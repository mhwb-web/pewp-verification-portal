# PEWP Certificate Verification Portal

A web-based certificate verification system developed for the **Pedagogical Excellence and Wellness Program (PEWP 2026)** organized by **Motilal Nehru National Institute of Technology (MNNIT) Allahabad**.

## Overview

The PEWP Certificate Verification Portal enables participants, institutions, and employers to verify the authenticity of certificates issued during PEWP 2026 using a unique Certificate ID.

The portal provides a simple, secure, and user-friendly interface for certificate validation and helps prevent misuse or forgery of certificates.

## Features

* Certificate verification using unique Certificate ID
* Instant validation results
* Responsive and mobile-friendly design
* Secure verification through Google Apps Script backend
* Integration with Google Sheets certificate database
* Easy deployment through GitHub Pages
* Clean and professional user interface

## Technology Stack

### Frontend

* HTML5
* CSS3
* JavaScript

### Backend

* Google Apps Script
* Google Sheets Database

### Hosting

* GitHub Pages

## Project Structure

```text
├── index.html
├── style.css
├── script.js
├── assets/
│   ├── logo.png
│   └── images/
└── README.md
```

## How Verification Works

1. User enters a valid Certificate ID.
2. The portal sends a request to the Google Apps Script API.
3. The API searches the certificate database.
4. Matching certificate details are returned.
5. The portal displays the verification status and participant information.

## Deployment

### Clone Repository

```bash
git clone https://github.com/mhwb-web/pewp-verification-portal.git
```

### Open Project

```bash
cd pewp-verification-portal
```

### Run Locally

Open `index.html` in any modern web browser.

### Deploy to GitHub Pages

1. Push the project to GitHub.
2. Navigate to:

   * Settings → Pages
3. Select:

   * Source: Deploy from Branch
   * Branch: main
4. Save the settings.
5. GitHub will generate a public URL for the portal.

## Security Note

The verification system is intended solely for validating certificates issued under PEWP 2026. Unauthorized modification, misuse, or reproduction of certificate data is prohibited.

## Organization

**Pedagogical Excellence and Wellness Program (PEWP 2026)**
Motilal Nehru National Institute of Technology (MNNIT) Allahabad
Prayagraj, Uttar Pradesh, India

## Contact

For certificate-related queries, please contact the PEWP 2026 organizing team through the official communication channels of MNNIT Allahabad.

## License

This project is maintained for educational and administrative purposes under PEWP 2026.
