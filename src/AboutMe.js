import React from "react";
import "../dist/style/About.css";

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
                    <h3 className="about__content-main-title">Conóceme!</h3>
                <div className="about__content-main">
                    <div className="imagen__Foto"></div>
                    <div className="about__content--details">
                    <p className="about__content--details-p">
    Soy un <strong>desarrollador web MERN</strong> especializado en construir interfaces de usuario atractivas y funcionales para sitios web y aplicaciones. Mi objetivo es crear experiencias front-end que impulsen el éxito general del producto. Puedes ver algunos de mis proyectos en la sección de <strong>Proyectos</strong>.
</p>
<p className="about__content--details-p">
    Disfruto compartir conocimientos sobre <strong>Desarrollo Web</strong> para ayudar a otros en la comunidad. Te invito a conectarte o seguirme en{" "}
    <a
        rel="noreferrer"
        href="https://www.linkedin.com/in/jonatan-arroyo-b0ab19265/"
        target="_blank"
    >
        LinkedIn
    </a>, donde publico contenido útil sobre desarrollo y programación web.
</p>
<p className="about__content--details-p">
    Estoy abierto a <strong>oportunidades laborales</strong> que me permitan contribuir, aprender y crecer.
</p>
                        <a href="./#contact" className="btn btn--med btn--theme dynamicBgClr">
                        Contacto
                    </a>
                    </div>
                    
                </div>
            </div>
            
        </section>
    );
}

export default AboutMe;
