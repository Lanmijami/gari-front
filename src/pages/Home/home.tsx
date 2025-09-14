import React from 'react';
import '../Home/home.css';

import Footer from '../../components/Footer/Footer';

const Home = () => {
  return (
    <div className="container">
      <h1 className="home-h1">Imas garije? Blago tebi!</h1>
      <h2>Dodaj, brisi i menjaj informacije o garijima</h2>
      <p className="home-p">
        <i>
          „Čovek ne može živeti sam. A onaj ko je na svetu sam, taj ili je zver
          ili bog. Zato tražimo prijatelje. A od prijateljstva se živi kao i od
          hleba, jer ono hrani srce i dušu, kao što hleb hrani telo.“ - Ivo
          Andrić
        </i>
      </p>

      <p className="home-p">
        <i>
          Reč "gari" je nekadašnji novosadski žargon koji se, prema nekim
          mišljenjima, koristi u smislu "brate" ili "druže", a označava
          prijateljsko obraćanje u nekadašnjim, kolektivističkim društvima sa
          manje društvenih razlika.
        </i>
      </p>

      <Footer></Footer>
    </div>
  );
};

export default Home;
