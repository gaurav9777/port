import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    incture,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    open_source,
    Kotlin,
    mysql,
    python,
    spring_boot,
    flask,
    port,
    java,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Android Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Open Source Contributor",
      icon: open_source,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Kotlin",
      icon: Kotlin,
    },
    {
      name: "Spring Boot",
      icon: spring_boot,
    },
    {
      name: "MYSql",
      icon: mysql,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Flask",
      icon: flask,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Java Development",
      company_name: "Incture Technology",
      icon: incture,
      iconBg: "#383E56",
      date: "Jan 2022 - oct 2022",
      points: [
        "Developing and maintaining web applications using Java and Spring boot framework .",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality product.",
        "Implementing backend code and performing unit and integrating testing.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Android Development",
      company_name: "Incture Technology",
      icon: incture,
      iconBg: "#E6DEDD",
      date: "Nov 2022 - Feb 2023",
      points: [
        "Developing and maintaining web application's Android version using Java and other related technologies like Kotlin.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality product.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Python Development",
      company_name: "Incture Technology",
      icon: incture,
      iconBg: "#383E56",
      date: "March 2023 - Present",
      points: [
        "Developing and maintaining web application's Dashboard using Python and Flask framework.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing backend code for the same.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    
  ];

  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Portfolio ",
      description:
        "Three js based portfolio contains the following section About, Work, Contact",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: port,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };