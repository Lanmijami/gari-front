import React from 'react';
import '../Home/home.css';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  return (
    <div className="container">
      This is the home page of all of yall friends man
      <Footer></Footer>
    </div>
  );
};

export default Home;
