
import bazardor from "../assets/projects/bazardor.png";
import booknook from "../assets/projects/booknook.png";
import hireloop from "../assets/projects/hireloop.png";
import hostel from "../assets/projects/hostel.png";

const projects = [
  {
    id: 1,
    title: "HireLoop",
    category: "Full Stack Job Portal",
    image: hireloop,
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "MongoDB",
      "Better Auth",
      "Express.js",
    ],
    description:
      "A modern job portal connecting job seekers and recruiters. It features role-based dashboards, authentication, job management, and application tracking to simplify the recruitment process.",
    live: "",
    github: "",
    challenges: [
      "Implementing role-based authentication for seekers, recruiters, and administrators.",
      "Designing separate dashboards and navigation for different user roles.",
      "Managing user data and authentication with MongoDB and Better Auth.",
    ],
    future: [
      "Add advanced job search and filtering.",
      "Implement real-time notifications.",
      "Add recruiter analytics and application insights.",
    ],
  },
  {
    id: 2,
    title: "BazarDor",
    category: "E-commerce Web Application",
    image: bazardor,
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "DaisyUI",
      "MongoDB",
      "Better Auth",
    ],
    description:
      "An online marketplace designed to make product discovery and shopping easier. It provides a responsive shopping experience with user authentication and product browsing.",
    live: "https://a-7-bazar-dor.vercel.app/",
    github: "",
    challenges: [
      "Building a responsive interface for different screen sizes.",
      "Implementing user authentication.",
      "Organizing product information and marketplace navigation.",
    ],
    future: [
      "Add shopping cart functionality.",
      "Implement online payment integration.",
      "Add order tracking and product reviews.",
    ],
  },
  {
    id: 3,
    title: "BookNook",
    category: "Book Management Web Application",
    image: booknook,
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "MongoDB",
      "Express.js",
      "Better Auth",
    ],
    description:
      "A web-based library management platform that allows users to explore books, borrow and return books, and manage their borrowing history. Includes authentication and book availability tracking.",
    live: "https://booknook-frontend-gamma.vercel.app/",
    github: "",
    challenges: [
      "Implementing secure authentication and protected API routes.",
      "Managing book borrowing and returning operations.",
      "Maintaining accurate available and total book copies.",
    ],
    future: [
      "Add book reviews and ratings.",
      "Implement borrowing reminders.",
      "Improve book recommendations.",
    ],
  },
  {
    id: 4,
    title: "Super Hostel Management System",
    category: "Hostel Management System",
    image: hostel,
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
    ],
    description:
      "A hostel management platform designed to simplify daily hostel operations. It includes student services, staff management, meal and menu information, service booking, and complaint management.",
    live: "",
    github: "",
    challenges: [
      "Organizing different hostel management modules.",
      "Designing interfaces for students, staff, and administrators.",
      "Planning an efficient account and service management workflow.",
    ],
    future: [
      "Implement backend integration.",
      "Add online service request tracking.",
      "Introduce automated hostel notifications.",
    ],
  },
];

export default projects;
