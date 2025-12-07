import { TYPES } from "./projectTypes.js";
import testThumbnail from "../assets/background.jpg";

export const portfolio = [
  {
    name: "Nomad Logic",
    type: TYPES.EDU,
    date: new Date(2021, 4), 
    people: ["Hong C", "Young Hoon C", "Zachary C", "Nawal D", "Yiyang H"],
    page: ["https://example.com/nomadlogic"],
    thumbnail: [testThumbnail]
  },
  {
    name: "Augmenting Robotics",
    type: TYPES.EDU,
    date: new Date(2025, 4),
    people: ["Hong C"],
    page: ["#/AugmentingRobotics"],
    thumbnail: [testThumbnail]
  },
  {
    name: "The Hive",
    type: TYPES.EDU,
    date: new Date(2024, 1), 
    people: ["Alex A", "Faizah A", "Hong C"],
    page: ["https://example.com/thehive"],
    thumbnail: [testThumbnail]
  },
  {
    name: "Clouds",
    type: TYPES.EDU,
    date: new Date(2023, 4), 
    people: ["Hong C"],
    page: ["https://example.com/clouds"],
    thumbnail: [testThumbnail]
  },
    {
    name: "The Commonspace",
    type: TYPES.COMP,
    date: new Date(2025, 6),
    people: ["Crystal C", "Hong C", "Samantha W"],
    page: ["https://example.com/thecommonspace"],
    thumbnail: [testThumbnail]
  },
  {
    name: "Beijing Yanqi",
    type: TYPES.PRO,
    date: new Date(2024, 8),
    people: ["ANDStudio"],
    page: ["https://www.andstudio.net/news/2500.html"],
    background_image: ["https://files.mkhongchen.ca/BYBackground.jpg"],
    thumbnail: ["https://files.mkhongchen.ca/BYThumbnail.jpg"],
    external: true
    }
];
