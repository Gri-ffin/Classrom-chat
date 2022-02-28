# Discord/public chat

A simple (_"Personal Project"_) public chat application with a discord front end where you can connect with your google account, was developeed using **Firebase** for backend and authentication, and **Nextjs** as well as **Tailwindcss** for Front end.

## How to Configure your own project

1. Be sure to have [Node](https://nodejs.org) and [Yarn](https://yarnpkg.com/) installed.

2. Fork the repo.

3. Create your own firebase project and initialize it as a web app. **Be sure to copy the project configuration** (refer to the [docs](https://firebase.google.com/docs/web/setup) if lost).

4. Make sure to enable the google authentication method in the authentication section in your firebase console.

5. Create a .env.local file in the root project.

6. Create your env variables inside .env.local (**ex: API_FIREBASE_KEY = your project api key**), Make sure you append ***NEXT_PUBLIC_*** before every variable name you create (see [docs](https://nextjs.org/docs/basic-features/environment-variables#exposing-environment-variables-to-the-browser)) And separate every variable in its own line without a breaking comma and don't add quotes.

7. Replace my own environnement variables with your own in the **firebase.js** inside components/Helpers folders.

8. First run this command on your terminal: **yarn install**. 

9. Then run this command in the terminal: **yarn dev**.

10. This will start development server.

11. Then start making your own changes :)
