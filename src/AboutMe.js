import React from "react";
import "../dist/style/About.css";
import HTML from "../public/assets/Logos/Logo_HTML.svg";
function AboutMe() {
    return (
        <section id="about" className="about sec-pad">
            <div className="main--container">
                <div className="title--main">
                    <h2 className="title__main">Sobre mí</h2>
                    <p className="info__main">
                        Aquí encontrarás más información sobre mí, lo que hago y mis
                        habilidades actuales principalmente en términos de programación y
                        tecnología.
                    </p>
                </div>
            </div>
            <div className="about__content">
                <div className="about__content-main">
                    <h3 className="about__content-main-title">Conóceme!</h3>

                    <div className="about__content--details">
                        <p className="about__content--details-p">
                            Soy un <strong>desarrollador web MERN</strong> que construye el
                            front-end de sitios web y aplicaciones web que conducen al éxito
                            del producto en general. Echa un vistazo a algunos de mis trabajos
                            en la sección de <strong>Proyectos</strong>.
                        </p>
                        <p className="about__content--details-p">
                            También me gusta compartir contenido relacionado con lo que he
                            aprendido en <strong>Desarrollo Web</strong> para que pueda ayudar
                            a otras personas de la Comunidad de Desarrollo. No dudes en
                            conectarte o seguirme en mi{" "}
                            <a
                                rel="noreferrer"
                                href="https://www.linkedin.com/in/jonatan-arroyo-b0ab19265/"
                                target="_blank"
                            >
                                Linkedin
                            </a>{" "}
                            donde publico contenido útil relacionado con el desarrollo y la
                            programación web.
                        </p>
                        <p className="about__content--details-p">
                            Estoy abierto a oportunidades <strong>Laborales</strong> donde
                            pueda contribuir, aprender y crecer. Si tienes una buena
                            oportunidad que coincida con mis habilidades y experiencia, no
                            dudes en <strong>contactarme</strong>.
                        </p>
                    </div>
                    <a href="./#contact" className="btn btn--med btn--theme dynamicBgClr">
                        Contacto
                    </a>
                </div>
                <div>
                    <h3 className="about__content-main-title"> Mis Habilidades</h3>
                    <div className="about_skill">
                        <div className="skills">
                            <div className="skills_skill">
                                <div className="HTML"></div>
                                <p>HTML</p>
                            </div>
                            <div className="skills_skill">
                                <div className="CSS"></div>
                                <p>CSS</p>
                            </div>
                            <div className="skills_skill">
                                <div className="JavaScript"></div>
                                <p>JavaScript</p>
                                <img src={HTML} />
                            </div>
                            <div className="skills_skill">
                                <div className="React"></div>
                                <p>React</p>
                            </div>
                            <div className="skills_skill">
                                <div className="Node"></div>
                                <p>Node</p>
                            </div>
                            <div className="skills_skill">
                                <div className="Angular"></div>
                                <p>Angular.js</p>
                            </div>
                            <div className="skills_skill">
                                <div className="MongoDB"></div>
                                <p>MongoDB</p>
                            </div>
                            <div className="skills_skill">
                                <div className="Bootstrap"></div>
                                <p>Bootstrap</p>
                            </div>

                            <div className="skills_skill">
                                <div className="GIT"></div>
                                <p>GitHub</p>
                            </div>
                            <div className="skills_skill">
                                <div className="SQLBasic"></div>
                                <p>MySQL</p>
                            </div>
                            <div className="skills_skill">
                                <div className="JAVA"></div>
                                <p>JAVA</p>
                            </div>
                            <div className="skills_skill">
                                <div className="Veu"></div>
                                <p>Veu.js</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;
