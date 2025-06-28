import myProject from "../assets/myProject1.png";
import myProject2 from "../assets/myProject2.png";
import loft from "../assets/loft.png";
import infinite from "../assets/infinite.png";
import alfa from "../assets/alfa.png";
import moon from "../assets/moon.png";
import todos from "../assets/todos.png";
import sliderNuts from "../assets/sliderNuts.png";
import biocad from "../assets/biocad.png";
import myTrello from "../assets/myTrello.png";

export interface IExperienceList {
  id: string;
  href: string;
  hrefGit: string;
  imgSrc: string;
}

const experienceList = [
  {
    id: "1",
    href: "https://Anna-dev-69.github.io/todos",
    hrefGit: "https://github.com/Anna-dev-69/todos",
    imgSrc: todos,
  },
  {
    id: "2",
    href: "https://Anna-dev-69.github.io/slider-nuts",
    hrefGit: "https://github.com/Anna-dev-69/slider-nuts",
    imgSrc: sliderNuts,
  },
  {
    id: "3",
    href: "https://Anna-dev-69.github.io/biocad",
    hrefGit: "https://github.com/Anna-dev-69/biocad",
    imgSrc: biocad,
  },
  {
    id: "4",
    href: "https://Anna-dev-69.github.io/my-trello",
    hrefGit: "https://github.com/Anna-dev-69/my-trello",
    imgSrc: myTrello,
  },

  {
    id: "5",
    href: "https://online-store-lemon-delta.vercel.app",
    hrefGit: "https://github.com/Anna-dev-69/online-store",
    imgSrc: myProject,
  },
  {
    id: "6",
    href: "https://spa-theta-ten.vercel.app/",
    hrefGit: "https://github.com/Anna-dev-69/spa",
    imgSrc: myProject2,
  },
  {
    id: "7",
    href: " https://anna-dev-69.github.io/ecosystem-alfa/#/",
    hrefGit: "https://github.com/Anna-dev-69/ecosystem-alfa",
    imgSrc: alfa,
  },
  {
    id: "8",
    href: "https://anna-dev-69.github.io/infinite/",
    hrefGit: "https://github.com/Anna-dev-69/infinite",
    imgSrc: infinite,
  },
  {
    id: "9",
    href: "https://loft-ts-wc9a.vercel.app/",
    hrefGit: "https://github.com/Anna-dev-69/loft-ts",
    imgSrc: loft,
  },
  {
    id: "10",
    href: "https://moon-ashen.vercel.app/",
    hrefGit: "https://github.com/Anna-dev-69/moon",
    imgSrc: moon,
  },
];
export default experienceList;
