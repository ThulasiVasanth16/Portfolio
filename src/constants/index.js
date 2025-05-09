import zepic from "../assets/projects/zepic.png";
import amazon from "../assets/projects/amazon.png";
import contact from "../assets/projects/contact.png";
import todo from "../assets/projects/todo.png";

export const HERO_CONTENT = `I am a front-end developer who enjoys creating clean and responsive websites. 
I have 2 years of hands-on experience and skills in HTML, CSS, JavaScript, React.js, Tailwind CSS, Material UI, and Redux. 
I’m excited to use my knowledge in real projects and grow as a developer.`;

export const ABOUT_TEXT = `Hi, I’m Thulasi, a front-end developer who loves creating clean, responsive, and easy-to-use websites. My coding journey started in college, where I first learned HTML, CSS, and JavaScript. After finishing my studies, I did a 9-month internship at Zepic, where I got practical experience in front-end development.
To improve my skills, I joined SoftTech Ashram, where I completed advanced training and also worked as a trainer, helping others improve their coding skills. With 2 years of experience in HTML, CSS, JavaScript, React.js, Tailwind CSS, Material UI, and Redux, I’m now ready to take on new challenges and grow further as a front-end developer.
I am passionate about building real-world projects that provide great user experiences, and I’m excited to keep learning, improving my skills, and creating solutions that make a difference.
`;

export const EXPERIENCES = [
  {
    year: "Nov 2024 - Apr 2025",
    role: "Front-end Developer Trainer",
    company: "BlueTick Coders [SoftTech Ashram].",
    description: `Mentored freshers by providing practical guidance on coding standards, best practices, and helping them transition into professional developer roles. Designed layouts and posts using Canva for social media and presentations. Conducted training sessions on front-end technologies like HTML, CSS, JavaScript, React.js, and Material UI, ensuring effective learning and real-world application.`,
    technologies: ["Html", "Css", "Javascript", "React.js", "Material UI"],
  },
  {
    role: "Junior Front-End Developer Intern",
    company: "Zepic",
    year: "Aug 2023 - Apr 2024",
    description: `Gained hands-on experience in HTML, CSS, JavaScript, React, and Tailwind CSS. 
    Contributed to bug fixing and enhancements in live products.
     Developed and maintained live Webflow websites and created one demo Shopify website, 
     ensuring responsive design and optimized performance.`,
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Tailwind CSS",
      "Webflow",
      "Shopify",
    ],
  },
];

export const PROJECTS = [
  {
    title: "Zepic - About  Us Page ",
    image: zepic,
    link: `https://www.zepic.com/about-us`,
    description: `Created an 'About Us' page for Zepic during my internship using Webflow. 
    The page includes sections like 'Who We Are', 'When It All Began', 'How We Roll', and 'We Are ZEPIC', providing a comprehensive overview of the company’s mission, values, and team. The design is responsive and optimized for both desktop and mobile views.`,
    technologies: ["Webflow"],
  },
  {
    title: "My Contact Page",
    image: contact,
    link: `https://thulasivasanth16.github.io/my-contact-page/`,
    description:
      "A responsive contact page built with React.js and Tailwind CSS. Users can submit their contact details (name, age, email, phone number), which are stored in localStorage. The dashboard displays the stored contacts, allowing users to edit, update, or delete their information.",
    technologies: ["React", "Tailwind Css"],
  },
  {
    title: "Amazon Clone Website",
    image: amazon,
    link: `https://amazonclonewebsite16.netlify.app`,
    description:
      "A responsive Amazon clone built with HTML and CSS, optimized for both desktop and mobile screens.",
    technologies: ["HTML", "CSS"],
  },
  {
    title: "Todo List",
    image: todo,
    link: `https://thulasivasanth16.github.io/Todo-List-React/`,

    description:
      "A To-Do List web application built with React.js and Tailwind CSS. The app allows users to perform CRUD (Create, Read, Update, Delete) operations on tasks, providing a simple and interactive way to manage daily tasks. The design is responsive and optimized for both desktop and mobile views.",
    technologies: ["React", "Tailwind Css"],
  },
  
];

export const CONTACT = {
  github: `https://github.com/ThulasiVasanth16`,
  phoneNo: "9361562608",
  email: 'thulasivasanth01@gmail.com',
  linkedIn: `https://www.linkedin.com/in/thulasivasanth/`,
  gitLab: `https://gitlab.com/ThulasiVasanth`,
  address:`Vettuvankeni, ECR, Chennai - 600115`,
};
