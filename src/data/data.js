//import HTMLImg from "../assets/html.png";
//import CSS from "../assets/css.png";
import Tailwind from "../assets/tailwind.png";
import JavaScript from "../assets/javascript.png";
import TypeScript from "../assets/typescript.png";
import ReactImg from "../assets/react.png";
import Node from "../assets/node.png";

import GitHub from "../assets/github.png";
//import AWS from "../assets/aws.png";
import Redux from "../assets/redux.png";
import Mongo from "../assets/mongo.png";

import FoodDelivery from "../assets/projects/food-delivery.jpeg";
import Todolist from "../assets/projects/todolist.jpeg";
import Recipe from "../assets/projects/recipe.jpeg";
import Fitness from "../assets/projects/fitness.jpeg";
import Workout from "../assets/projects/workout.jpeg";
import TravelPin from "../assets/projects/pinmap.jpeg";

export const skills = [
  { id: 1, src: Tailwind, alt: "CSS Icon", label: "Tailwind CSS" },
  { id: 2, src: JavaScript, alt: "JavaScript Icon", label: "JavaScript" },
  { id: 2, src: TypeScript, alt: "JavaScript Icon", label: "TypeScript" },
  { id: 4, src: ReactImg, alt: "React Icon", label: "React" },
  { id: 5, src: Node, alt: "Node Icon", label: "Node.js" },
  { id: 6, src: GitHub, alt: "GitHub Icon", label: "GitHub" },
  { id: 7, src: Redux, alt: "AWS Icon", label: "Redux" },
  { id: 8, src: Mongo, alt: "Mongo Icon", label: "Mongo" },
];
export const projects = [
  {
    id: 1,
    tags: ["Full-Stack", "MERN", "JavaScript", "CRUD"],
    name: "Global Flavor Hub: Created with My Love",
    image: Recipe,
    github: "https://github.com/Liao993/recipe_React",
    live: "https://drive.google.com/file/d/1Z9EJa9SzXd-qTyCsX5FZ97HAbaV3AQBV/view?usp=sharing",
  },
  {
    id: 2,
    name: "TypeScript Fitness Application",
    tags: ["Frontend", "React", "TypeScript", "Tailwind"],
    image: Fitness,
    github: "https://github.com/Liao993/typescript_gym_class",
    live: "https://drive.google.com/file/d/18OQ4EVdSryqqAfIffGj8nFvaojo602AK/view?usp=sharing",
  },
  {
    id: 3,
    name: "Workout Application with Authentication",
    tags: ["Full-Stack", "MERN", "JavaScript", "Auth"],
    image: Workout,
    github: "https://github.com/Liao993/MERN_workout",
    live: "https://drive.google.com/file/d/13R-rBUNSZHrKmG1g7-zrZXHs3CCiRdL7/view?usp=sharing",
  },
  {
    id: 4,
    name: "Travel Pin Map Application",
    tags: ["Full-Stack", "MERN", "TypeScript", "Redux"],
    image: TravelPin,
    github: "https://github.com/Liao993/travel-map-typescript",
    live: "https://drive.google.com/file/d/1TTb2mrpsGdi_O8sLtkYEwJTU5SLMvD8y/view?usp=sharing",
  },
  {
    id: 5,
    name: "React Food Delivery Application",
    tags: ["Frontend", "React", "JavaScript", "Tailwind"],
    image: FoodDelivery,
    github: "https://github.com/Liao993/react_food_delivery",
    live: "https://drive.google.com/file/d/1mWaoG1P1lgsLmyyqEbJwXK2CJn4sKyRK/view?usp=sharing",
  },
  {
    id: 6,
    name: "To-do List Application",
    tags: ["Frontend", "Redux", "JavaScript", "CRUD"],
    image: Todolist,
    github: "https://github.com/Liao993/redux-todolist",
    live: "https://drive.google.com/file/d/1qkK7NpoCn-DIin5U-su1Y5Mr2jlOrVHd/view?usp=sharing",
  },
];
