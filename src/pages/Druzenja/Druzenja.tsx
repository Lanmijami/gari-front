import React, { useEffect, useState } from 'react';
import Footer from '../../components/Footer/Footer';
import DruzenjaModel from '../../druzenje.model';
import '../Druzenja/Druzenja.css';
import DruzenjeComponent from '../../components/DruzenjeComponent/DruzenjeComponent';

const Druzenja = () => {
  const [druzenja, setDruzenja] = useState<DruzenjaModel[]>([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/api/Druzenje`).then((response) =>
      response.json().then((json) => {
        console.log('Garis: ', json);
        setDruzenja(json);
      })
    );
  }, []);
  return (
    <div className="druzenja-grid-container">
      {druzenja.map((d) => (
        <div key={d.id}>
          <DruzenjeComponent
            id={d.id}
            title={d.title}
            garis={d.garis}
            location={d.location}
            date={d.date}
          ></DruzenjeComponent>
        </div>
      ))}
      <Footer></Footer>
    </div>
  );
};

export default Druzenja;
