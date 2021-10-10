import React from 'react'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from "@material-ui/icons/Instagram";
import TelegramIcon from "@material-ui/icons/Telegram";
import { YouTube, GutHubIcon, Language } from '@material-ui/icons';
import GitHubIcon from "@material-ui/icons/GitHub";
import { AssignmentOutlined, WebOutlined } from '@material-ui/icons';
export default {
  name: "Anvar Abduganiev",
  title: "Frontend developer",
  birthday: "23th April 1999",
  email: "blablabla99@gmail.com",
  address: "Tashkent",
  phone: "+99894 365 1200",

  socials: {
    Linkedin: {
      link: "https://www.linkedin.com/in/anvar-abduganiev-4534751a5/",
      text: "MyLinkedin",
      icon: <LinkedInIcon />,
    },
    Github: {
      link: "https://github.com/anvar099",
      text: "MyGithub",
      icon: <GitHubIcon />,
    },
    Instagram: {
      link: "https://www.instagram.com/a.n.v.a.r___/",
      text: "MyInstagram",
      icon: <InstagramIcon />,
    },
  },

  about:
    "I am professional with 1 years of experience web development. Also, I like to make additions, this is my passion! I have large work experience with clients from Azerbaijan. \n\n I specialized in web development since 2020 year, now I work alone, but in past I had small design and development company that specialized in development, support and promotion of web and mobile projects since 2021. So, I can help you with any project in web-development. I offer professional assistance to my clients, providing a full range of services from initial consultations to the turnkey projects",

  experiences: [
    {
      title: "Work 1",
      date: "2020 - PreSent",
      description:
        "I am professional with 1 years of experience web development. Also, I like to make additions, this is my passion!",
    },
    {
      title: "Work 2",
      date: "2019 - 2020",
      description:
        "I am professional with 1 years of experience web development. Also, I like to make additions, this is my passion!",
    },
    {
      title: "Work 3",
      date: " Aug 2018 -  Sept 2019",
      description:
        "I am professional with 1 years of experience web development. Also, I like to make additions, this is my passion!",
    },
  ],
  educations: [
    {
      title: "Education 1",
      date: "2020 - PreSent",
      description:
        "I am professional with 1 years of experience web development. Also, I like to make additions, this is my passion!",
    },
    {
      title: "Education 2",
      date: "2019 - 2020",
      description:
        "I am professional with 1 years of experience web development. Also, I like to make additions, this is my passion!",
    },
    {
      title: "Education 3",
      date: " Aug 2018 -  Sept 2019",
      description:
        "I am professional with 1 years of experience web development. Also, I like to make additions, this is my passion!",
    },
  ],

  services: [
    {
      title: "Web Development",
      description: "I have been n experienced web developer",
      icon: <WebOutlined />,
    },
    {
      title: "Branding Identity",
      description: "We will make you a brand that is catchy and leaves a trace",
      icon: <AssignmentOutlined />,
    },
    {
      title: "Illustrator",
      description: "I have been n experienced web developer",
      icon: <WebOutlined />,
    },
  ],

  skills: [
    {
      title: "FRONT-END",
      description: ["Html", "Css", "JavaScript", "React.JS"],
    },
    {
      title: "BACK-END",
      description: ["Html", "Css", "Python", "Laravel"],
    },
    {
      title: "DATABASES",
      description: ["Firebase", "Ms SQL", "MySQL", "MongoDB"],
    },
    {
      title: "SOURCE CONTROL",
      description: ["Git", "Github"],
    },
  ],

  projects: [
    {
      tag: "React",
      image: [
        "https://image.freepik.com/free-vector/halftone-background-with-circles_23-2148907689.jpg",
        "https://img.freepik.com/free-photo/abstract-grunge-decorative-relief-navy-blue-stucco-wall-texture-wide-angle-rough-colored-background_1258-28311.jpg?size=626&ext=jpg",
    ],
      title: "React Project 1",
      caption: "A short description",
      description: "This is my first project description",
      links: [
        { link: "https://www.youtube.com", icon: <YouTube /> },
        { link: "https://www.github.com", icon: <GitHubIcon /> },
        { link: "https://www.google.com", icon: <Language /> },
      ],
    },
    {
      tag: "Python",
      image: [
        "https://image.freepik.com/free-vector/halftone-background-with-circles_23-2148907689.jpg",
        "https://img.freepik.com/free-photo/abstract-grunge-decorative-relief-navy-blue-stucco-wall-texture-wide-angle-rough-colored-background_1258-28311.jpg?size=626&ext=jpg",
    ],
      title: "Python Project 1",
      caption: "A short description",
      description: "This is my first project description",
      links: [
        { link: "https://www.youtube.com", icon: <YouTube /> },
        { link: "https://www.github.com", icon: <GitHubIcon /> },
        { link: "https://www.google.com", icon: <Language /> },
      ],
    },
    {
      tag: "Java",
     image: [
        "https://image.freepik.com/free-vector/halftone-background-with-circles_23-2148907689.jpg",
        "https://img.freepik.com/free-photo/abstract-grunge-decorative-relief-navy-blue-stucco-wall-texture-wide-angle-rough-colored-background_1258-28311.jpg?size=626&ext=jpg",
     ],
      title: "Java Project 1",
      caption: "A short description",
      description: "This is my first project description",
      links: [
        { link: "https://www.youtube.com", icon: <YouTube /> },
        { link: "https://www.github.com", icon: <GitHubIcon /> },
        { link: "https://www.google.com", icon: <Language /> },
      ],
    },
  ],
}; 