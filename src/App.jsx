import React, { useState, useEffect, useRef  } from "react";
import { Link } from "react-scroll";
import { Parallax } from 'react-scroll-parallax'
import { ChevronDown, ChevronUp } from 'lucide-react';
import images from '../src/assets/imagesMaps';
import translations from '../src/data/translations.json';
import ModalSkills from "./ModalSkills";

import './App.css'

function App() {
  const [language, setLanguage] = useState('pt');
  const [isExpandSection, setIsExpandSection] = useState(false);
  const [expandedContainerId, setExpandedContainerId] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState(""); // Estado para armazenar o nome da tecnologia

  const handleOpenModal = (skillName) => {
    setSelectedSkill(skillName); // Define a tecnologia selecionada
    setShowModal(true); // Abre o modal
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedSkill(""); // Reseta o nome ao fechar
  };
  
  const handleExpandContainer = (id) => {
    setExpandedContainerId(prevId => (prevId === id ? null : id));
  };
  
  const handleExpandSection = () => {
    setIsExpandSection(prev => !prev);
    }
  
  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };

  const github_url = "https://github.com/PauloHASA"
  const linkedin_url = "https://www.linkedin.com/in/paulo-henrique-almeida-da-silva-alves-55a17328b/"
  const whatsapp_url = "https://wa.me/5511963965062"

  const [isNavVisible, setIsNavVisible] = useState(false);
  const targetRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log("Visibilidade:", entry.intersectionRatio); // Depuração
        setIsNavVisible(entry.intersectionRatio >= 0.2);
      },
      {
        root: null, // Observa em relação ao viewport
        rootMargin: "0px",
        threshold: [0.2], // Detecta quando atinge 20% de visibilidade
      }
    );

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, []);


  return (
    <div className="relative">
      <div className="header-global">
        <div className="change-language">
          <button className="br" onClick={() => setLanguage('pt')}>
            <img src={images.logos.icon_brasil} alt="" />
          </button>
          <button onClick={() => setLanguage('en')}>
            <img src={images.logos.icon_usa} alt="" />
          </button>
          <button onClick={() => setLanguage('es')}>
            <img src={images.logos.icon_espanha} alt="" />
          </button>
        </div>
      </div>

      <section  id="home" className="relative h-screen overflow-hidden">
        <Parallax translateY={[-20, 20]} className='absolute inset-0'>
          <div className="absolute inset-0 bg-cover bg-center background-img"/>
        </Parallax>
        <div className="relative h-full flex-col-center">
          <div className="central-container">
            <h4 className='principal-title font-sans'> 
              {translations[language].greeting} 
              <span className='p-left-12'>{translations[language].name}</span>
            </h4>
            <div className="border-line"></div>
            <div className="animation-txt">
              <p className='title font-sans'> 
                {translations[language].professional} 
                <span className='p-left-12'>{translations[language].fullstack}</span>
              </p>
              <p className='title font-sans'> 
                {translations[language].professional} 
                <span className='p-left-12'>{translations[language].frontend}</span>
              </p>
              <p className='title font-sans'> 
                {translations[language].professional} 
                <span className='p-left-12'>{translations[language].backend}</span>
              </p>
            </div>
            <nav className='flex nav-horizontal'>
              <a href="#about">
                <button className='glass-effect'>
                  <i className="bi bi-person-fill icon"></i>
                  <i className="bi bi-person-fill-check icon-hover"></i>
                  {translations[language].about} 

                </button>
              </a>
              <a href="#experience">
                <button className='glass-effect'>
                  <i className="bi bi-people icon"></i>
                  <i className="bi bi-people-fill icon-hover"></i>
                  {translations[language].experience} 
                </button>
              </a>
              <a href="#skills">
                <button className='glass-effect'>
                  <i className="bi bi-database-fill-gear icon"></i>
                  <i className="bi bi-database-fill-check icon-hover"></i>
                  {translations[language].skills} 
                </button>
              </a>
              <a href="#projects">
                <button className='glass-effect'>
                  <i className="bi bi-columns icon"></i>
                  <i className="bi bi-columns-gap icon-hover"></i>
                  {translations[language].project} 
                </button>
              </a>
            </nav>
          </div>
          <div className="absolute bottom-10 animate-bounce">
            <a href="#about" style={{cursor: 'pointer'}}>
              <i class="bi bi-chevron-double-down"></i>
            </a>
          </div>

        </div>
      </section>

      <div id="isVisible" ref={targetRef}>
        <section id="about" className="py-20 bg-white relative">
          <div className="row justify-content-center">
            <div className="col-8">
              <Parallax speed={-5}>
                <h2 className='txt-black txt-center font-sans section-title'>
                  {translations[language].about} 
                </h2>
              </Parallax>

              <div className="row">
                <div className="col flex-col-center txt-area-aboutMe">
                  <p>
                    {translations[language].about_me_one} 
                  </p>
                  <div className="social-media">
                    <a href={github_url} target="_blank" className=''>
                      <button className='btn-socialmedia github'>
                        <i className="bi bi-github"></i>
                      </button>
                    </a>

                    <a href={linkedin_url} target="_blank" className=''>
                      <button className='btn-socialmedia linkedin'>
                        <i className="bi bi-linkedin"></i>
                      </button>
                    </a>

                    <a href="mailto:seuemail@gmail.com" className=''>
                      <button className='btn-socialmedia gmail'>
                        <i className="bi bi-envelope-fill icon"></i>
                        <i className="bi bi-envelope-paper-fill icon-hover"></i>
                      </button>
                    </a>

                    <a href={whatsapp_url} target="_blank" className=''>
                      <button className='btn-socialmedia whatsapp'>
                        <i className="bi bi-whatsapp"></i>
                      </button>
                    </a>
                  </div>
                </div>
                <div className="col img-area-aboutMe">

                  <img src={images.logos.dev_img} alt="" />
                </div>
              </div>

            </div>
          </div>

        </section>
        
        <section id="experience" className="py-20 b-gray relative">
          
          <h2 className='txt-black txt-center font-sans section-title'>
            {translations[language].title_experience} 
          </h2>

          <div className="row justify-content-center">
            <div className="col-9">
              <div className={`container-section ${ isExpandSection ? 'expand' : ''}`}>
                
                {/* Ouronova */}
                <div className={`container-experience-box ${expandedContainerId === 1 ? 'expand' : ''}`}>
                  <header>
                    <section>
                      <h1> 
                        {translations[language].title_on_ex}
                      </h1>
                      <label>
                        <img src={images.logos.on_icon} alt="" />
                        <p>Ouronova</p>
                      </label>
                    </section>
                    <section>
                      <h2>2023 - {translations[language].present} </h2>
                    </section>
                  </header>
                  <main>
                    <p>
                      {translations[language].description_on} 
                    </p>
                  </main>
                  <footer>
                    <button onClick={() => handleExpandContainer(1)}>
                      {expandedContainerId === 1 ? translations[language].retract_btn : translations[language].expand_btn}
                    </button>
                  </footer>
                </div>

                {/* Plusoft */}
                <div className={`container-experience-box ${expandedContainerId === 2 ? 'expand' : ''}`}>
                  <header>
                    <section>
                      <h1> 
                        {translations[language].title_plusoft_ex}
                      </h1>
                      <label>
                        <img src={images.logos.plusoft_logo} alt="" />
                        <p>Plusoft</p>
                      </label>
                    </section>
                    <section>
                      <h2>2022 - 2023 </h2>
                    </section>
                  </header>
                  <main>
                    <p>
                      {translations[language].description_plusoft} 
                    </p>
                  </main>
                  <footer>
                    <button onClick={() => handleExpandContainer(2)}>
                      {expandedContainerId === 2 ? translations[language].retract_btn : translations[language].expand_btn}
                    </button>
                  </footer>
                </div>

                {/* Roma */}
                <div className={`container-experience-box ${expandedContainerId === 3 ? 'expand' : ''}`}>
                  <header>
                    <section>
                      <h1> 
                        {translations[language].title_roma_ex}
                      </h1>
                      <label>
                        <img src={images.logos.logo_gruporomap} alt="" style={{width: '110px'}}/>
                        
                      </label>
                    </section>
                    <section>
                      <h2>2020 - 2022 </h2>
                    </section>
                  </header>
                  <main>
                    <p>
                      {translations[language].description_roma} 
                    </p>
                  </main>
                  <footer>
                    <button onClick={() => handleExpandContainer(3)}>
                      {expandedContainerId === 3 ? translations[language].retract_btn : translations[language].expand_btn}
                    </button>
                  </footer>
                </div>

                {/* Freelancer */}
                <div className={`container-experience-box ${expandedContainerId === 4 ? 'expand' : ''}`}>
                  <header>
                    <section>
                      <h1> 
                        {translations[language].title_free_ex}
                        
                      </h1>
                      <label>
                        <p> {translations[language].title_freelancer} </p>
                      </label>
                    </section>
                    <section>
                      <h2> 2017 - {translations[language].present} </h2>
                    </section>
                  </header>
                  <main>
                    <p>
                      {translations[language].description_freelancer} 
                    </p>
                  </main>
                  <footer>
                    <button onClick={() => handleExpandContainer(4)}>
                      {expandedContainerId === 4 ? translations[language].retract_btn : translations[language].expand_btn}
                    </button>
                  </footer>
                </div>

                <footer className='container-section-footer'>
                  {!isExpandSection ? (
                    <button onClick={handleExpandSection} className="animate-bounce">
                      <ChevronDown />
                    </button>
                  ) : (
                    <button onClick={handleExpandSection} className="animate-bounce">
                      <ChevronUp />
                    </button>
                  )}
                </footer>

              </div>

            </div>
          </div>    
    
        </section>

        <section id="skills" className="py-20 relative">
          <h2 className='txt-black txt-center font-sans section-title margin-bottom-0'>
            {translations[language].title_tecnologies} 
          </h2>

          <p className='txt-black txt-center description_txt'>
            Clique no ícone e descubra mais sobre minhas experiências!
          </p>

          <div className="row justify-content-center margin-top-45">
            <div className="col-9 skills-container">

              <div 
                className="icon-skill" 
                onClick={() => handleOpenModal("vite")}
              >
                <img src={images.logos.vite} alt="" />
              </div>

              <div 
                className=" icon-skill"
                onClick={() => handleOpenModal("react")}
                >
                <img src={images.logos.react} alt="" />
              </div>

              <div 
                className=" icon-skill"
                onClick={() => handleOpenModal("js")}
                >
                <img src={images.logos.javascript} alt="" />
              </div>

              <div 
                className=" icon-skill"
                onClick={() => handleOpenModal("ts")}

              >
                <img src={images.logos.typescript} alt="" />
              </div>

              <div 
                className=" icon-skill"
                onClick={() => handleOpenModal("ns")}
              >
                <img src={images.logos.nextjs} alt="" />
              </div>

              <div 
                className=" icon-skill"
                onClick={() => handleOpenModal("bootstrap")}              
              >
                <img src={images.logos.bootstrap} alt="" />
              </div>

              <div 
                className=" icon-skill"
                onClick={() => handleOpenModal("tailwind")}              
              >
                <img src={images.logos.tailwind} alt="" />
              </div>

              <div 
                className=" icon-skill"
                onClick={() => handleOpenModal("python")}              
              >
                <img src={images.logos.python} alt="" />
              </div>

              <div 
                className=" icon-skill"
                onClick={() => handleOpenModal("nodejs")}              
              >                
                <img src={images.logos.nodejs} alt="" />
              </div>

              <div 
                className=" icon-skill"
                onClick={() => handleOpenModal("django")}              
              >                 
                <img src={images.logos.django} alt="" />
              </div>

              <div 
                className=" icon-skill"
                onClick={() => handleOpenModal("docker")}              
              >                 
                <img src={images.logos.docker} alt="" />
              </div>

              <div 
                className=" icon-skill"
                onClick={() => handleOpenModal("git")}              
              >                 
                <img src={images.logos.git} alt="" />
              </div>

              <div 
                className=" icon-skill"
                onClick={() => handleOpenModal("kubernetes")}              
              >                     
                <img src={images.logos.kubernetes} alt="" />
              </div>

              <div 
                className=" icon-skill"
                onClick={() => handleOpenModal("github")}              
              >                     
                <img src={images.logos.github} alt="" />
              </div>

              <div 
                className=" icon-skill"
                onClick={() => handleOpenModal("bitbucket")}              
              >                    
                <img src={images.logos.bitbucket} alt="" />
              </div>

            </div>
          </div>
        </section>

        <section id="projects" className="py-20 b-gray relative">
          
          <h2 className='txt-black txt-center font-sans section-title margin-bottom-0'>
            {translations[language].title_projects} 
          </h2>

          {/* <p className='txt-black txt-center description_txt'>
            Clique no ícone e descubra mais sobre minha experiência!
          </p> */}

          <div className="row justify-content-center margin-top-45">
            <div className="col-9 skills-container">

              <div className={`container-projects ${ expandedContainerId === 5 ? 'expand' : ''}`}>
                <header>
                  <img src={images.logos.wellnova_img} alt="" />
                </header>
                <main>
                  <h1>
                    {translations[language].project_details_wellnova_title} 
                  </h1>
                  <p>
                  {translations[language].project_details_wellnova} 

                  </p>
                  <section>
                    <div className="tec-text">
                      <p>Python</p>
                      <p>Django</p>
                      <p>Bootstrap5</p>
                      <p>CSS3</p>
                      <p>React.js</p>
                      <p>Vite</p>
                      <p>JavaScript</p>
                      <p>GitHub</p>
                      <p>Docker</p>
                    </div>
                  </section>
                </main>
                  <footer>
                  <button onClick={() => handleExpandContainer(5)}>
                      {expandedContainerId === 5 ? translations[language].retract_btn : translations[language].expand_btn}
                    </button>
                  </footer>
              </div>

              <div className={`container-projects ${ expandedContainerId === 5 ? 'expand' : ''}`}>
                <header>
                  <img src={images.logos.digitalpm} alt="" />
                </header>
                <main>
                  <h1>
                    {translations[language].project_details_digitalpm_title} 
                  </h1>
                  <p>
                  {translations[language].project_details_digitalpm} 

                  </p>
                  <section>
                    <div className="tec-text">
                      <p>Python</p>
                      <p>Django</p>
                      <p>Bootstrap5</p>
                      <p>CSS3</p>
                      <p>JavaScript</p>

                    </div>
                  </section>
                </main>
                  <footer>
                  <button onClick={() => handleExpandContainer(5)}>
                      {expandedContainerId === 5 ? translations[language].retract_btn : translations[language].expand_btn}
                    </button>
                  </footer>
              </div>
            </div>
          </div>



        </section>
      </div>

      
      <div className={`fixed ${isNavVisible ? "block" : "hidden"}`}>
        <div className="relative" style={{height:'100%'}}>

          <div className={`absolute nav-vertical `}>
            <Link to="home">
              <button className="glass-effect btn-nav-vertical">
                <i className="bi bi-house icon"></i>
                <i className="bi bi-house-check-fill icon-hover"></i>
              </button>
            </Link>
            <div className="line-vertical"></div>

            <Link to="about">
              <button className="glass-effect btn-nav-vertical">
                <i className="bi bi-person-fill icon"></i>
                <i className="bi bi-person-fill-check icon-hover"></i>
              </button>
            </Link>
            <div className="line-vertical"></div>

            <Link to="experience">
              <button className="glass-effect btn-nav-vertical">
                <i className="bi bi-people icon"></i>
                <i className="bi bi-people-fill icon-hover"></i>
              </button>
            </Link>
            <div className="line-vertical"></div>

            <Link to="skills">
              <button className="glass-effect btn-nav-vertical">
                <i className="bi bi-database-fill-gear icon"></i>
                <i className="bi bi-database-fill-check icon-hover"></i>
              </button>
            </Link>
            <div className="line-vertical"></div>

            <Link to="projects">
              <button className="glass-effect btn-nav-vertical">
                <i className="bi bi-columns icon"></i>
                <i className="bi bi-columns-gap icon-hover"></i>
              </button>
            </Link>
          </div>

        </div>
      </div>
      
      <ModalSkills isOpen={showModal} onClose={handleCloseModal} skillName={selectedSkill} />

    </div>
  )
}

export default App
