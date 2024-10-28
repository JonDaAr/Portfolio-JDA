import React from "react";
import '../dist/style/Studies.css'

const Studies = ({ items, title }) => {
    return (
      <section className="timeline">
        <h2>{title}</h2>
        <div className="timeline-container">
          {items.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>{item.title}</h3>
                <p><em>{item.institution}</em><br />{item.date}</p>
                {item.description && <p>{item.description}</p>}
                {item.technologies && <p><em>Tecnologías:</em> {item.technologies}</p>}
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Studies;