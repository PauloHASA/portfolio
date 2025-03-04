import React, { useState } from "react";
import "./ModalSkills.css";
import images from "./assets/imagesMaps";
import translations from "./data/translations.json";

function ModalSkills({ isOpen, onClose, skillName }) {
  if (!isOpen) return null;

  const [language, setLanguage] = useState('pt');  
  
  const skillData = {
    vite: {
      titulo: "React Vite",
      descricao: translations[language]?.text_vite,  
      img: images.logos.vite,
      level: translations[language]?.level_advan
    },
    react: {
      titulo: "React",
      descricao: translations[language]?.text_react,
      img: images.logos.react,
      level: translations[language]?.level_advan
    },
    js: {
      titulo: "Javascript",
      descricao: translations[language]?.text_js,
      img: images.logos.javascript,
      level: translations[language]?.level_advan
    },
    ts: {
      titulo: "Typescript",
      descricao: translations[language]?.text_ts,
      img: images.logos.typescript,
      level: translations[language]?.level_inter
    },
    ns: {
      titulo: "NextJs",
      descricao: translations[language]?.text_ns,
      img: images.logos.nextjs,
      level: translations[language]?.level_inter
    },
    bootstrap: {
      titulo: "Bootstrap",
      descricao: translations[language]?.text_bootstrap,
      img: images.logos.bootstrap,
      level: translations[language]?.level_advan
    },
    tailwind: {
      titulo: "Tailwind",
      descricao: translations[language]?.text_tailwind,
      img: images.logos.tailwind,
      level: translations[language]?.level_inter
    },
    python: {
      titulo: "Python",
      descricao: translations[language]?.text_python,
      img: images.logos.python,
      level: translations[language]?.level_advan
    },
    nodejs: {
      titulo: "Nodejs",
      descricao: translations[language]?.text_nodejs,
      img: images.logos.nodejs,
      level: translations[language]?.level_inter
    },
    django: {
      titulo: "Python Django",
      descricao: translations[language]?.text_django,
      img: images.logos.django,
      level: translations[language]?.level_advan
    },
    docker: {
      titulo: "Docker",
      descricao: translations[language]?.text_docker,
      img: images.logos.docker,
      level: translations[language]?.level_inter
    },
    git: {
      titulo: "Git",
      descricao: translations[language]?.text_git,
      img: images.logos.git,
      level: translations[language]?.level_inter
    },
    kubernetes: {
      titulo: "Kubernetes",
      descricao: translations[language]?.text_kubernets,
      img: images.logos.kubernetes,
      level: translations[language]?.level_basic
    },
    github: {
      titulo: "Github",
      descricao: translations[language]?.text_github,
      img: images.logos.github,
      level: translations[language]?.level_advan
    },
    bitbucket: {
      titulo: "Bitbucket",
      descricao: translations[language]?.text_bitbuket,
      img: images.logos.bitbucket,
      level: translations[language]?.level_basic
    },
  };

  const skill = skillData[skillName?.toLowerCase()];
  
  if (!skill) {
    return (
      <div className="modal fade show" onClick={onClose} tabIndex="-1" style={{ display: "block" }} aria-modal="true" role="dialog">
        <div className="modal-dialog modal-dialog-centered ">
          <div className="modal-content">
            <div className="header">
              <section>
                <h1>Tecnologia não encontrada</h1>
              </section>
              <button type="button" className="btn-close" onClick={onClose} aria-label="Close"></button>
            </div>
            <main>
              <p>Não há informações disponíveis para esta tecnologia.</p>
            </main>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="modal fade show" onClick={onClose} tabIndex="-1" style={{ display: "block" }} aria-modal="true" role="dialog">
      <div className="modal-dialog modal-dialog-centered dialog-ModalSkills">
        <div className="modal-content content-ModalSkills">
          <div className="header">
            <section>
              <img src={skill.img} alt={skill.titulo} />
              <h1 className="txt-black txt-center font-sans">{skill.titulo}</h1>
              <div className="ex-anos">
                {skill.level}
              </div>
            </section>
            <button type="button" className="btn-close" onClick={onClose} aria-label="Close"></button>
          </div>
          <main>
            <p>{skill.descricao}</p>
          </main>
        </div>
      </div>
    </div>
  );
}

export default ModalSkills;
