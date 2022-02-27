# Discord/public chat

A simple (_"Personal Project"_) public chat application with a discord front end where you can connect with your google account, was developeed using **Firebase** for backend and authentication, and **Nextjs** as well as **Tailwindcss** for Front end.

## How to Configure your own project

1. Be sure to have [Node](https://nodejs.org) and [Yarn](https://yarnpkg.com/) installed.
2. Fork the repo.
3. Create your own firebase project and initialize it as a web app. **Be sure to copy the project configuration** (refer to the [docs](https://firebase.google.com/docs/web/setup) if lost)
4. Create a .env.local file.
5. Create your env variables (_ex: API_FIREBASE_KEY = "your project api key"_) __Make sure you append ***NEXT_PUBLIC_*** before every variable name you create (see [docs](https://nextjs.org/docs/basic-features/environment-variables#exposing-environment-variables-to-the-browser)) And separate every variable in its own line without a breaking comma.__
6. Replace my own environnement variables with your own in the **firebase.js** inside components/Helpers folders.
7. Run this command in the terminal: **yarn dev**.
8. This will start development server.
9. Then start making your own changes :)
