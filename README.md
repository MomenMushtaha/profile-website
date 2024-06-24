## 🚀 Features

- Built with modern JavaScript, using tools and frameworks like [create-react-app](https://github.com/facebook/create-react-app), [React-Router](https://reactrouter.com/), and SCSS.
- Automated workflows via [GitHub Actions](https://github.com/features/actions).
- And more!

## 🔧 Dependencies

Ensure you have [node](https://nodejs.org/) >= v16. Optionally, use [nvm](https://github.com/nvm-sh/nvm#installing-and-updating) to manage node versions.

## 🚀 Setup and Running

1. Clone the repository:

    ```bash
    git clone git://github.com/MomenMushtaha/profile-website.git
    cd profile-website
    ```

2. (Optional) Ensure you're on Node v16 or higher:

    ```bash
    nvm install
    node --version
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Start the application:

    ```bash
    npm start
    ```
   
## 🚢 Deploying

1. Update the environment variables and Git remote URL in [`.github/workflows/github-pages.yml`](.github/workflows/github-pages.yml).
2. Adjust the `homepage` value in `package.json` based on your hosting preferences.
3. Planning on using a custom domain? Update `public/CNAME`. Otherwise, remove it.
