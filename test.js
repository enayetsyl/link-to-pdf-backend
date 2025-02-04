const path = require('path');
const fs = require('fs-extra');
const { PDFDocument } = require('pdf-lib');
const puppeteer = require('puppeteer');

async function generatePdfFromUrls(urls) {
    if (!urls || !Array.isArray(urls)) {
        throw new Error('URLs array is required');
    }

    try {
        const tempDir = path.join(__dirname, 'temp');
        await fs.ensureDir(tempDir);

        // Process URLs in batches
        const batchSize = 5;
        const pdfPaths = [];
        for (let i = 0; i < urls.length; i += batchSize) {
            const batchUrls = urls.slice(i, i + batchSize);
            const batchPdfPaths = await Promise.all(batchUrls.map(async (pageUrl, index) => {
                return await savePageContentAsPdf(pageUrl, tempDir, i + index);
            }));
            pdfPaths.push(...batchPdfPaths);
        }

        // Merging PDFs
        const pdfDocs = await Promise.all(pdfPaths.map(async (pdfPath) => {
            const pdfBytes = fs.readFileSync(pdfPath);
            return PDFDocument.load(pdfBytes);
        }));

        const mergedPdf = await PDFDocument.create();
        for (const pdfDoc of pdfDocs) {
            const copiedPages = await mergedPdf.copyPages(pdfDoc, pdfDoc.getPageIndices());
            copiedPages.forEach(page => mergedPdf.addPage(page));
        }

        const mergedPdfBytes = await mergedPdf.save();
        const mergedPdfPath = path.join(__dirname, 'merged.pdf');
        fs.writeFileSync(mergedPdfPath, mergedPdfBytes);

        // Cleanup individual PDF files
        pdfPaths.forEach(file => {
            if (fs.existsSync(file)) {
                fs.unlinkSync(file);
            }
        });

        return mergedPdfPath;
    } catch (error) {
        console.error('Error generating or merging PDF files', error);
        throw new Error('Error generating or merging PDF files');
    }
}

async function savePageContentAsPdf(pageUrl, tempDir, index) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    try {
        await page.goto(pageUrl, { waitUntil: 'networkidle2', timeout: 60000 }); // Increase timeout to 60 seconds
        const pdfPath = path.join(tempDir, `page_${index}.pdf`);
        await page.pdf({ path: pdfPath, format: 'A4' });
        return pdfPath;
    } catch (error) {
        console.error(`Error loading page: ${pageUrl}`, error);
        throw new Error(`Failed to load page: ${pageUrl}`);
    } finally {
        await browser.close();
    }
}

// Usage example
(async () => {
    const urls = ['https://socialbu.com/developers/docs'];
    try {
        const pdfPath = await generatePdfFromUrls(urls);
        console.log('PDF generated at:', pdfPath);
    } catch (error) {
        console.error(error.message);
    }
})();
