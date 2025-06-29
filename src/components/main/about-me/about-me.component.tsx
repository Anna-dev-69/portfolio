import "./about-me.component.scss";

import photo1 from "../../../assets/1.jpg";
import photo2 from "../../../assets/2.jpg";
import photo4 from "../../../assets/4.jpg";
import { useState } from "react";

const AboutMe = () => {
  return (
    <div id="AboutMe" className="AboutMe">
      <div className="AboutMe__title">About me</div>

      <div className="AboutMe__container-about">
        <div className="AboutMe__container-img">
          <div>
            <img className="AboutMe__3" src={photo4} alt="" />
          </div>
          <div className="AboutMe__frame"></div>
        </div>
        <div className="AboutMe__text">
          <div>
            "My name is Anna. I have been working in web development since July
            2024. But my path to IT began several months earlier. I completed
            the Manual Software Tester course, gained a lot of new knowledge and
            practical experience working on homework assignments. I also
            completed more than 100 tasks with databases. And received a
            certificate in Databases. Then I decided to study on my own to
            become a web developer. I read a textbook on JavaScript, the book by
            Eric Freeman and Elizabeth Robson "Learning JavaScript Programming",
            read a lot of additional material on Metanit and other Internet
            sources, watched video tutorials on YouTube. I strive to develop in
            the field of front-end development. I am open to learning. I am a
            goal-oriented and disciplined person.
          </div>

          <div>
            You can see my work on GitHab:
            <a
              style={{ textDecoration: "none", color: "rgb(231, 212, 248)" }}
              href="https://github.com/Anna-dev-69?tab=repositories"
            >
              https://github.com/Anna-dev-69?tab=repositories
            </a>
            . Here are projects where I used HTML, CSS, SCSS, JavaScript, React,
            TypeScript and other technologies."
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

/**
 * "Меня зовут Анна. Веб-разработкой занимаюсь с июля 2024года. Но путь
            в IT начался несколькими месяцами ранее. Я прошла курс Ручного
            Тестировщика ПО, получила много новых знаний и практического опыта
            работы на домашних заданиях. Также выполнила более 100 задач с
            базами данных. И получила сертификат по Базам Данных. Далее я решила
            учиться сама на веб-разработчика. Прочитала учебник по JavaScript,
            книгу Эрика Фримана и Элизабет Робсон "Изучаем программирование на
            JavaScript", прочла много дополнительного материала на Метаните, и
            других интернет-источниках, смотрела видео-уроки на YouTube.
            Стремлюсь развиваться в области фронтенд-разработки. Открыта к
            обучению. Являюсь человеком целеустремленным и дисциплинированным.
 */
