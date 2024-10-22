Here’s the updated `README.md` file with the `_redirects` section removed:

# My Portfolio Website

Welcome to my portfolio website! This project showcases my skills and experience as a Full-Stack Web Developer. The website is built using React and is deployed on Netlify. It includes several sections, such as an introduction, services, projects, and contact information, with form submission handling powered by Web3Forms.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Live Website](#live-website)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Deploying to Netlify](#deploying-to-netlify)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)
- [License](#license)

## Overview

This portfolio website serves as a platform to showcase my projects, technical skills, and experience in web development. Visitors can view live demos of my projects and contact me via the integrated contact form.

## Live Website

Check out the live version of the website [here](https://harryohm33.netlify.app/).

## Features

- **Responsive Design**: Mobile-first design, optimized for different screen sizes.
- **Custom Services and Projects Pages**: Dynamic routing for services and project details using React Router.
- **Form Submissions**: Contact form powered by Web3Forms with email address collection.
- **Custom Error Pages**: Client-side error handling for better user experience.

## Technologies Used

- **Frontend**: React, HTML, CSS, JavaScript
- **Routing**: React Router
- **State Management**: React Hooks
- **Forms**: Web3Forms for form submissions
- **Deployment**: Netlify
- **Version Control**: Git, GitHub

## Setup and Installation

To run this project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone hhttps://github.com/HarryOhm33/My-Portfolio
   cd My-Portfolio
   ```

````

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Set up environment variables**:
   Create a `.env` file in the root of your project with the following environment variables:

   ```bash
   VITE_API_URL=your_api_url
   VITE_API_KEY=your_api_key
   ```

4. **Run the development server**:

   ```bash
   npm run dev
   ```

5. **Build the project for production**:
   ```bash
   npm run build
   ```

## Deploying to Netlify

To deploy this project on Netlify:

1. **Connect your GitHub repository** to Netlify via their dashboard.
2. **Set build command**:
   ```bash
   npm run build
   ```
3. **Set publish directory**:
   ```bash
   dist
   ```
4. **Add environment variables** in the Netlify dashboard under the project settings.

## Environment Variables

The project requires the following environment variables:

- `VITE_API_URL`: The Web3Forms API endpoint for handling form submissions.
- `VITE_API_KEY`: Your Web3Forms API key.

## Contributing

Feel free to submit a pull request if you'd like to contribute to this project! Fork the repository, create a new branch, and submit your PR.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for more details.

```

```
````
