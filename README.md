NASA Picture of the Day Web App
Overview

This is a simple, user-friendly web application that allows users to view NASA's Picture of the Day (APOD) for any date. Users can select a date from a calendar, fetch the corresponding image or video, and save their searches. Past searches are displayed and can be clicked to revisit previous results.

The app is built using HTML, CSS, and JavaScript and leverages the NASA APOD API.

Features

Display the current Picture of the Day on page load.

Fetch images/videos for any selected date using a date picker.

Save search history to localStorage so users can revisit past searches.

Click on a previous search to re-fetch and display that day's media.

Responsive design for mobile and desktop.

Simple and clean UI with modern styling.

Screenshots


Current Picture of the Day displayed on the page.


Search history showing past searches.

Installation & Usage

Clone the repository:

git clone https://github.com/your-username/nasa-apod-webapp.git
cd nasa-apod-webapp


Get your NASA API key:

Visit https://api.nasa.gov
 and sign up for an API key.

Replace YOUR_API_KEY in script.js with your key:

const apiKey = "YOUR_API_KEY";


Open the web app:

Open index.html in your browser.

Or use Live Server in VS Code for development:

Right-click index.html → Open with Live Server.

Start using the app:

The current NASA Picture of the Day is displayed.

Select a date to fetch images or videos for that date.

Past searches appear in the search history list.

Project Structure
nasa-apod-webapp/
│
├── index.html         # Main HTML file
├── style.css          # Styling for UI elements
├── script.js          # JavaScript logic for API and UI
└── README.md          # This file

Technologies Used

HTML5 – structure and semantic elements

CSS3 – styling, responsive layout

JavaScript – API requests, DOM manipulation, localStorage

NASA APOD API – fetching pictures and videos of the day

Deployment

You can deploy this web app using GitHub Pages:

Push the project to a GitHub repository.

Go to Settings → Pages in the repository.

Select branch: main and folder: /root.

GitHub will provide a live URL like:
https://username.github.io/nasa-apod-webapp/

Or use platforms like Netlify or Vercel for instant deployment.

License

This project is open-source and free to use.
