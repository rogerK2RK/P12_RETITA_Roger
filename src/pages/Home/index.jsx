import React from 'react';
// import './style.css';
// import "./styles.modules.css"
import { Link } from "react-router-dom"

function Home(props) {
  
  return (
    <div>
      <section className="content">
        <h1>
          Chez vous, partout et ailleurs
        </h1>
      </section>
      <div className="Users">
      <Link to="/user/12" >User 12</Link>
      <Link to="/user/18" >User 18</Link>

        {/* {props.logements.map((logement) => {
          return (
            <Link
              to={`/logement/${logement.id}`}
              className="cards"
              key={logement.id}
            >
              <img
                src={logement.cover}
                className="cards-img"
                alt={logement.title}
              />
              <div className="box"></div>
              <p className="cards-text">{logement.title}</p>
            </Link>
          )
        })} */}
      </div>
    </div>

  );
}

export default Home ;





