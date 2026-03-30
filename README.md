# RandoMaps

RandoMaps is a lightweight web app that generates random travel destinations across Spain.
It is designed to promote local tourism, including less crowded towns and smaller cities.

## Features

- Random destination generation with embedded Google Maps.
- Firebase Authentication for sign in, sign up, and sign out.
- Basic user profile persistence in Firestore.
- Responsive UI for desktop and mobile.

## Project Structure

```text
.
├── index.html
├── pages/
│   ├── login.html
│   ├── register.html
│   └── user.html
├── assets/
│   ├── css/
│   │   ├── bootstrap.min.css
│   │   ├── styles.css
│   │   └── responsive.css
│   ├── images/
│   └── js/
│       ├── core/
│       │   └── common.js
│       └── pages/
│           ├── home.js
│           ├── login.js
│           ├── register.js
│           └── user.js
└── README.md
```

## Tech Stack

- HTML5
- CSS3 + Bootstrap
- Vanilla JavaScript
- Firebase v8 (Auth + Firestore)

## Running Locally

1. Clone the repository.
2. Open the project folder in your editor.
3. Serve the folder with a local static server.
4. Open the app in your browser from the served URL.

Example using VS Code Live Server:

- Open [index.html](index.html)
- Start Live Server

## Notes

- Firebase configuration is currently defined in [assets/js/core/common.js](assets/js/core/common.js).
- For production use, move sensitive configuration and tighten Firebase security rules.
