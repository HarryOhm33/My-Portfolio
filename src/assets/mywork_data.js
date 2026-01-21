import pratibha_kosh from "../assets/projects_photo/pratibha_kosh.png";
import miitie from "../assets/projects_photo/miitie.png";
import mic_on_mithila from "../assets/projects_photo/mic_on_mithila.png";
import feedx from "../assets/projects_photo/feedx.png";
import icmit_2025 from "../assets/projects_photo/icmit_2025.png";
import time_capsule from "../assets/projects_photo/time_capsule.png";
import portfolio from "../assets/projects_photo/portfolio.png";
import random_quotes from "../assets/projects_photo/random-quotes.png";
import samarpan from "../assets/projects_photo/samarpan.png";
import simon_says from "../assets/projects_photo/simon_says.png";
import weather_app from "../assets/projects_photo/weather_app.png";
import wonderlust from "../assets/projects_photo/wonderlust.png";
import spotify_clone from "../assets//projects_photo/spotify-clone.png";
import amazon_clone from "../assets/projects_photo/amazon_clone.png";

import pratibha_kosh_icon from "../assets/project_icons/pratibha_kosh_icon.png";
import miitie_icon from "../assets/project_icons/miitie_icon.png";
import mic_on_mithila_icon from "../assets/project_icons/mic_on_mithila_icon.png";
import feedx_icon from "../assets/project_icons/feedx_icon.png";
import icmit_2025_icon from "../assets/project_icons/icmit_2025_icon.png";
import time_capsule_icon from "../assets/project_icons/time_icon.png";
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
    id: "c4a9d72e-8f31-4b6a-9e2a-7d5f3a1c6e98",
    name: "Pratibha-Kosh – Student Achievement Management Platform",
    description:
      "Pratibha-Kosh is a centralized web platform developed to help students manage academic and extracurricular achievements while enabling institutions to streamline certificate verification and approval workflows. The system provides role-based dashboards for students, faculty, and administrators and incorporates AI-driven career guidance to assist students in aligning achievements with future career paths. Designed for scalability and structured data management, the platform improves transparency and efficiency in student achievement tracking.",
    miniDescription:
      "A role-based platform for managing student achievements and certificates.",
    technologies: [
      "ReactJs",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JavaScript",
      "Gemini API",
    ],
    githubLink: "https://github.com/HarryOhm33/Student-Hub",
    hostedLink: "https://pratibha-kosh.netlify.app/",
    image: pratibha_kosh,
    icon: pratibha_kosh_icon,
  },
  {
    id: "e91c7b24-5b3f-4d6a-9a8c-6e2f4d1a9b77",
    name: "MIITIE – College Startup & Incubation Cell Website",
    description:
      "The MIITIE website is the official digital platform for the college startup and incubation cell, built to manage incubation programs, startup teams, mentors, and institutional events. The platform leverages Firebase for real-time data storage and updates, ensuring seamless management of events and incubatee information. It also integrates Amazon SES to send 100+ bulk emails and newsletters to incubatees and stakeholders in a single delivery. Designed for reliability and accessibility, the website serves as the primary digital presence of the incubation cell and receives regular daily visitors.",
    miniDescription:
      "Startup cell website using Firebase and Amazon SES for real-time data and bulk emails.",
    technologies: [
      "ReactJs",
      "Firebase",
      "JavaScript",
      "HTML",
      "CSS",
      "Amazon SES",
    ],
    githubLink: "https://github.com/HarryOhm33/MIITIE",
    hostedLink: "https://miitie.org",
    image: miitie,
    icon: miitie_icon,
  },
  {
    id: "b7d2e914-4c63-41e8-9f21-8a6d4c9b5f02",
    name: "Mic on Mithila – Show Listing & Ticket Booking Platform",
    description:
      "Mic on Mithila is a production-ready web platform built and deployed within 5 days to manage show listings, schedules, and online ticket bookings for live events. The platform includes an admin dashboard for managing shows and bookings and integrates secure online payments using Cashfree. Built with React and Firebase, the system ensures fast performance, real-time data updates, and a seamless booking experience for users.",
    miniDescription:
      "A live event listing and ticket booking platform built in 5 days.",
    technologies: [
      "ReactJs",
      "Firebase",
      "Cashfree",
      "JavaScript",
      "HTML",
      "CSS",
    ],
    githubLink: "",
    hostedLink: "https://miconmithila.in",
    image: mic_on_mithila,
    icon: mic_on_mithila_icon,
  },
  {
    id: "a3f7c921-6b2e-4c1d-9d54-2f8b7c3e41ab",
    name: "FeedX – HR Feedback & Goal Management Platform",
    description:
      "FeedX is a web-based HR platform designed to streamline continuous feedback, goal tracking, and performance evaluation within organizations. The system supports real-time 360-degree feedback, role-based dashboards for employees, managers, and HR teams, and structured performance insights. The project was recognized as the Problem Statement Winner at HackFest’25 (GoFloww’s Atom HR track) for delivering a scalable and production-ready HR-tech solution. Built with scalability and data consistency in mind, FeedX enables transparent feedback cycles and goal alignment across teams in fast-paced work environments.",
    miniDescription:
      "HackFest’25 winning HR platform for feedback and goal management.",
    technologies: ["MongoDB", "Express.js", "ReactJs", "Node.js", "JavaScript"],
    githubLink: "https://github.com/HarryOhm33/FeedX",
    hostedLink: "https://feedxmarkii.netlify.app/",
    image: feedx,
    icon: feedx_icon,
  },
  {
    id: "6c2f9a41-1d7b-4f88-9c5e-b1e8d6a47f32",
    name: "ICMIT 2025 Conference Website",
    description:
      "The ICMIT 2025 website is the official digital platform for the 1st International Conference on Mechanical & Industrial Technologies. It provides comprehensive information on the conference theme, schedules, keynote speakers, paper submission guidelines, publications, and important announcements. Designed with a professional academic layout, the website ensures clear navigation, responsiveness across devices, and accessibility for a global audience.",
    miniDescription:
      "Official website for the ICMIT 2025 international conference.",
    technologies: ["ReactJs", "CSS", "HTML", "JavaScript"],
    githubLink: "https://github.com/HarryOhm33/IC-MIT",
    hostedLink: "https://icmit.co.in/",
    image: icmit_2025,
    icon: icmit_2025_icon,
  },
  {
    id: "9b8e7c12-3a45-4f9e-8d21-cc8d9f2a6b10",
    name: "Time Capsule 2.0",
    description:
      "Time Capsule 2.0 is a web-based application that allows users to store messages, memories, or media securely and unlock them at a future date. The platform focuses on privacy, timed content delivery, and a clean user experience. It features user authentication, scheduled content release, and a responsive UI optimized for both desktop and mobile devices. Built with scalability and simplicity in mind, the application ensures reliable storage and controlled access to time-locked content.",
    miniDescription:
      "A time-locked digital capsule for storing and unlocking memories.",
    technologies: ["ReactJs", "Node.js", "Express.js", "MongoDB", "CSS"],
    githubLink: "https://github.com/HarryOhm33/TimeCapsule",
    hostedLink: "https://time-capsule-404.netlify.app/",
    image: time_capsule,
    icon: time_capsule_icon,
  },
  {
    id: "f4d42d98-ceb5-446d-ac7e-c1dbec23fc1c",
    name: "My Portfolio",
    description:
      "This portfolio website serves as a comprehensive platform to showcase my skills, projects, and achievements. It features an intuitive and modern UI/UX design, optimized for performance and responsive across devices. The site includes detailed sections for each project, an about me page, and interactive elements like animations and forms. Built with a focus on minimalism and functionality, it integrates social media links, contact forms, and custom styling to reflect my personal branding.",
    miniDescription: "A personal portfolio to display projects and skills.",
    technologies: ["ReactJs", "CSS", "HTML"],
    githubLink: "https://github.com/HarryOhm33/My-Portfolio",
    hostedLink: "https://harryohm33.netlify.app/",
    image: portfolio,
    icon: portfolio_icon,
  },
  {
    id: "6da79f81-e547-45a6-81e1-073e846d8465",
    name: "Wonderlust",
    description:
      "Wonderlust is a project designed for travel enthusiasts, featuring a curated list of top travel destinations. It allows users to explore destinations by category, such as beaches, mountains, or historical landmarks. The project uses JavaScript to dynamically load content, ensuring a seamless user experience. The interface is designed with simplicity in mind, while the content is presented in an engaging manner with large, high-quality images, and brief descriptions of each destination. This project demonstrates my skills in front-end development and content management.",
    miniDescription: "A travel-themed project built with JavaScript.",
    technologies: ["HTML", "CSS", "JavaScript", "Node.js", "MongoDB"],
    githubLink: "https://github.com/HarryOhm33/Wonderlust",
    hostedLink: "http://wonderlust-3tfn.onrender.com",
    image: wonderlust,
    icon: wonderlust_icon,
  },
  {
    id: "8263962e-de8f-4a34-a7d1-19231fbb3631",
    name: "Weather App",
    description:
      "A fully responsive weather app that allows users to get real-time weather updates based on their location or by entering a city. This app makes use of the OpenWeatherMap API to fetch accurate data, including temperature, humidity, wind speed, and weather conditions. The application features a clean and intuitive UI, with seamless navigation between different cities. It also includes error handling for invalid city names and a loading spinner while fetching data from the API.",
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
    technologies: ["HTML", "CSS", "JavaScript", "Node.js", "MySQL"],
    githubLink: "https://github.com/HarryOhm33/Samarpan",
    hostedLink: null,
    image: samarpan,
    icon: samarpan_icon,
  },
  {
    id: "966717b9-af7f-4ef6-a70a-7376137af700",
    name: "Simon Says",
    description:
      "A browser-based version of the classic memory game Simon Says. This project emphasizes front-end development with JavaScript, focusing on DOM manipulation and event handling. Players must mimic an increasingly complex sequence of colors and sounds to progress in the game. The game is built to be responsive and user-friendly, with engaging animations and sound effects to enhance the player experience.",
    miniDescription: "A JavaScript version of the Simon Says game.",
    technologies: ["HTML", "CSS", "JavaScript"],
    githubLink: "https://github.com/HarryOhm33/Simon-Says",
    hostedLink: "https://simonsaysh.netlify.app/",
    image: simon_says,
    icon: simon_icon,
  },
  {
    id: "a93cea12-5f39-4e42-b8ef-fdd945f83432",
    name: "Random Quotes",
    description:
      "This project utilizes the Quote Garden API to generate random quotes from famous authors. The user interface is simple yet elegant, with a dynamically updating quote display section. The project highlights the use of modern JavaScript techniques, including Fetch API for handling HTTP requests, and responsive design principles. The application also supports additional features like sharing quotes via social media, and copying them to the clipboard for easy sharing.",
    miniDescription: "Random quote generator using Quote Garden API.",
    technologies: ["HTML", "CSS", "JavaScript"],
    githubLink: "https://github.com/HarryOhm33/Random-Quotes-API_Project",
    hostedLink: "https://stirring-squirrel-1f1d2e.netlify.app/",
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
    hostedLink: "https://roaring-cascaron-85b3a3.netlify.app/",
    image: amazon_clone,
    icon: amazon_icon,
  },
];

export default projects;
