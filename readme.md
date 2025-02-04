# PDF Management Tool

## Overview
The **PDF Management Tool** is a web application that provides multiple functionalities, including:
- Merging multiple PDF files
- Extracting transcripts from YouTube videos and converting them to PDFs
- Generating PDFs from web pages and their sub-route links

## Features
- Upload and merge multiple PDF files
- Extract and download video transcripts as PDFs
- Generate PDFs from web page content
- Fetch and process sub-route links to PDFs
- Easy-to-use frontend with React and Tailwind CSS

## Tech Stack
### Backend
- **Node.js** with **Express.js**
- **Multer** for handling file uploads
- **PDF-lib** for PDF manipulation
- **Puppeteer** for web scraping
- **fs-extra** for file system operations
- **CORS** for handling cross-origin requests

### Frontend
- **React.js** with Vite
- **React Router** for navigation
- **Axios** for API communication
- **TailwindCSS** for styling

## Installation
### Prerequisites
Make sure you have the following installed on your system:
- **Node.js** (v18 or later)
- **npm** or **yarn**

### Backend Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/pdf-management-tool.git
   cd pdf-management-tool
   ```
2. Install backend dependencies:
   ```sh
   npm install
   ```
3. Start the backend server:
   ```sh
   npm start
   ```
   The server will run on **http://localhost:3000**.

### Frontend Setup
1. Navigate to the frontend directory:
   ```sh
   cd frontend
   ```
2. Install frontend dependencies:
   ```sh
   npm install
   ```
3. Start the frontend development server:
   ```sh
   npm run dev
   ```
   The frontend will run on **http://localhost:5173**.

## API Endpoints
### **1. Check Server Status**
- **Endpoint:** `GET /`
- **Response:**
  ```json
  {
    "Message": "CORS enabled for all origins"
  }
  ```

### **2. Merge PDF Files**
- **Endpoint:** `POST /merge-pdf`
- **Headers:**
  - `Content-Type: multipart/form-data`
- **Request Body:**
  - `pdfs` (array of PDF files)
- **Response:** Returns the merged PDF file.

### **3. Extract Video Transcript**
- **Endpoint:** `POST /extract-transcript`
- **Headers:**
  - `Content-Type: application/json`
- **Request Body:**
  - `videoUrl` (string)
  - `videoTitle` (string)
- **Response:** Returns a PDF with the extracted transcript.

### **4. Generate PDF from Web Page**
- **Endpoint:** `POST /generate-pdf`
- **Headers:**
  - `Content-Type: application/json`
- **Request Body:**
  - `urls` (array of web page URLs)
- **Response:** Returns a merged PDF with the page content.

### **5. Get Sub-route Links**
- **Endpoint:** `POST /generate-link`
- **Headers:**
  - `Content-Type: application/json`
- **Request Body:**
  - `url` (string, main website URL)
- **Response:** Returns an array of sub-route links.

## Folder Structure
```
/pdf-management-tool
├── backend/
│   ├── server.js
│   ├── uploads/
│   ├── temp/
│   ├── package.json
│   ├── package-lock.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── LinkToPdf.jsx
│   │   │   ├── VideoToPdf.jsx
│   │   │   ├── PdfMerge.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   ├── package.json
│   ├── tailwind.config.js
│   ├── vite.config.js
│   ├── index.html
│   ├── public/
├── README.md
```

## Dependencies
### Backend
```json
"dependencies": {
  "body-parser": "^1.20.2",
  "cors": "^2.8.5",
  "express": "^4.19.2",
  "fs-extra": "^11.2.0",
  "multer": "^1.4.5-lts.1",
  "pdf-lib": "^1.17.1",
  "puppeteer": "^20.5.1"
}
```

### Frontend
```json
"dependencies": {
  "axios": "^1.7.1",
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "react-router-dom": "^6.29.0",
  "tailwindcss": "^4.0.3"
}
```

## Future Enhancements
- Support for password-protected PDFs
- Improved error handling
- Option to save merged PDFs for future retrieval

## License
This project is licensed under the **ISC License**.

## Author
- **Your Name** (Replace with actual author)

## Contributions
Contributions are welcome! Feel free to open an issue or submit a pull request.

## 🏆 **Author:** Md Enayetur Rahman

### Contact Information
- [LinkedIn](https://www.linkedin.com/in/md-enayetur-rahman/)
- [Facebook](https://www.facebook.com/profile.php?id=100094416483981)
- [X (Twitter)](https://x.com/enayetu_syl)
- [YouTube](https://www.youtube.com/@MdEnayeturRahman)
- [GitHub](https://github.com/enayetsyl/)
- [Medium](https://medium.com/@enayetflweb)
- [dev.to](https://dev.to/md_enayeturrahman_2560e3)
- [Leetcode](https://leetcode.com/u/XTl7hvNPIc/)
- [Hackerrank](https://www.hackerrank.com/profile/enayetflweb)
- [Codeforces](https://codeforces.com/profile/enayetsyl)
- [Email](mailto:enayetflweb@gmail.com)