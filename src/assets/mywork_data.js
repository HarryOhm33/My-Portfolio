import portfolio from "../assets/projects_photo/portfolio.png";
import random_quotes from "../assets/projects_photo/random-quotes.png";
import samarpan from "../assets/projects_photo/samarpan.png";
import simon_says from "../assets/projects_photo/simon_says.png";
import weather_app from "../assets/projects_photo/weather_app.png";
import wonderlust from "../assets/projects_photo/wonderlust.png";
import spotify_clone from "../assets//projects_photo/spotify-clone.png";
import amazon_clone from "../assets/projects_photo/amazon_clone.png";

import portfolio_icon from "../assets/project_icons/portfolio_icon.jpg";
import wonderlust_icon from "../assets/project_icons/wonderlust_icon.jpg";
import weather_icon from "../assets/project_icons/weather_icon.png";
import samarpan_icon from "../assets/project_icons/samarpan_icon.png";
import simon_icon from "../assets/project_icons/simon_icon.png";
import quotes_icon from "../assets/project_icons/quotes_icon.png";
import spotify_icon from "../assets/project_icons/spotify_icon.png";
import amazon_icon from "../assets/project_icons/amazon_icon.png";

const projects = [
  {
    id: "f4d42d98-ceb5-446d-ac7e-c1dbec23fc1c",
    name: "My Portfolio",
    description:
      "This portfolio website serves as a comprehensive platform to showcase my skills, projects, and achievements. It features an intuitive and modern UI/UX design, optimized for performance and responsive across devices. The site includes detailed sections for each project, an about me page, and interactive elements like animations and forms. Built with a focus on minimalism and functionality, it integrates social media links, contact forms, and custom styling to reflect my personal branding.",
    miniDescription: "A personal portfolio to display projects and skills.",
    technologies: ["CSS"],
    githubLink: "https://github.com/HarryOhm33/My-Portfolio",
    hostedLink: null,
    image: portfolio,
    icon: portfolio_icon,
  },
  {
    id: "6da79f81-e547-45a6-81e1-073e846d8465",
    name: "Wonderlust",
    description:
      "Wonderlust is a project designed for travel enthusiasts, featuring a curated list of top travel destinations. It allows users to explore destinations by category, such as beaches, mountains, or historical landmarks. The project uses JavaScript to dynamically load content, ensuring a seamless user experience. The interface is designed with simplicity in mind, while the content is presented in an engaging manner with large, high-quality images, and brief descriptions of each destination. This project demonstrates my skills in front-end development and content management.",
    miniDescription: "A travel-themed project built with JavaScript.",
    technologies: ["JavaScript"],
    githubLink: "https://github.com/HarryOhm33/Wonderlust",
    hostedLink: null,
    image: wonderlust,
    icon: wonderlust_icon,
  },
  {
    id: "8263962e-de8f-4a34-a7d1-19231fbb3631",
    name: "Weather App",
    description:
      "A fully responsive weather app that allows users to get real-time weather updates based on their location or by entering a city. This app makes use of the OpenWeatherMap API to fetch accurate data, including temperature, humidity, wind speed, and weather conditions. The application features a clean and intuitive UI, with seamless navigation between different cities and weather metrics. It also includes error handling for invalid city names and a loading spinner while fetching data from the API.",
    miniDescription: "A weather app fetching real-time data via API.",
    technologies: ["HTML", "CSS", "JavaScript", "ReactJs"],
    githubLink: "https://github.com/HarryOhm33/Weather-App",
    hostedLink: "https://weatherappbyh.netlify.app",
    image: weather_app,
    icon: weather_icon,
  },

  {
    id: "d2df95bd-3cf5-4d0f-a181-e4fe7296a90f",
    name: "Samarpan",
    description:
      "Samarpan is a full-stack web application built using EJS as a templating engine. This project demonstrates the use of server-side rendering to dynamically generate pages with user-specific content. It features multiple page layouts, conditional rendering, and integrates with a backend to store and retrieve data. Samarpan is designed for scalability, offering customizable options for content management and easy deployment. The project is a practical showcase of clean and maintainable code architecture.",
    miniDescription: "An EJS templated website project.",
    technologies: ["EJS"],
    githubLink: "https://github.com/HarryOhm33/Samarpan",
    hostedLink: null,
    image: samarpan,
    icon: samarpan_icon,
  },
  {
    id: "966717b9-af7f-4ef6-a70a-7376137af700",
    name: "Simon Says",
    description:
      "A browser-based version of the classic memory game Simon Says. This project emphasizes front-end development with JavaScript, focusing on DOM manipulation and event handling. Players must mimic an increasingly complex sequence of colors and sounds to progress in the game. The game is built to be responsive and user-friendly, with engaging animations and sound effects to enhance the player experience. It also features multiple difficulty levels, increasing the challenge as the game progresses.",
    miniDescription: "A JavaScript version of the Simon Says game.",
    technologies: ["JavaScript"],
    githubLink: "https://github.com/HarryOhm33/Simon-Says",
    hostedLink: null,
    image: simon_says,
    icon: simon_icon,
  },
  {
    id: "a93cea12-5f39-4e42-b8ef-fdd945f83432",
    name: "Random Quotes",
    description:
      "This project utilizes the Quote Garden API to generate random quotes from famous authors. The user interface is simple yet elegant, with a dynamically updating quote display section. The project highlights the use of modern JavaScript techniques, including Fetch API for handling HTTP requests, and responsive design principles. The application also supports additional features like sharing quotes via social media, and copying them to the clipboard for easy sharing.",
    miniDescription: "Random quote generator using Quote Garden API.",
    technologies: ["CSS", "API"],
    githubLink: "https://github.com/HarryOhm33/Random-Quotes-API_Project",
    hostedLink: null,
    image: random_quotes,
    icon: quotes_icon,
  },
  {
    id: "1ae1e70c-77df-48cb-8bb8-b2319f629d2b",
    name: "Spotify Clone",
    description:
      "This project is a static clone of the Spotify homepage, built using HTML and CSS. The goal was to replicate Spotify’s modern, clean design with pixel-perfect accuracy. The clone showcases CSS Flexbox and Grid for creating a responsive layout, as well as various modern CSS techniques like animations, hover effects, and media queries. This project was a great learning experience for improving layout skills and understanding how to structure a complex, content-heavy page.",
    miniDescription: "Spotify homepage clone using HTML and CSS.",
    technologies: ["HTML", "CSS"],
    githubLink: "https://github.com/HarryOhm33/Spotify-Clone-Project",
    hostedLink: null,
    image: spotify_clone,
    icon: spotify_icon,
  },
  {
    id: "6d100272-5a41-4c27-8227-bd6a888f28f6",
    name: "Amazon Clone",
    description:
      "A front-end clone of Amazon's homepage, this project is built entirely with HTML and CSS. It includes a detailed header, navigation bar, product grid, and footer section. This project focuses on recreating a responsive layout using CSS Grid and Flexbox, while maintaining design accuracy. Although it doesn't include back-end functionality, it is a comprehensive example of front-end development and a perfect demonstration of layout structuring for e-commerce platforms.",
    miniDescription: "A front-end Amazon clone using HTML and CSS.",
    technologies: ["HTML", "CSS"],
    githubLink: "https://github.com/HarryOhm33/Amazon-Clone",
    hostedLink: null,
    image: amazon_clone,
    icon: amazon_icon,
  },
];

export default projects;
