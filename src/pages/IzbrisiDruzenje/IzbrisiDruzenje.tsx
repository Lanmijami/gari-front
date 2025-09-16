import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';

const IzbrisiDruzenje = () => {
  const [error, setError] = useState('');
  const handleDelete = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/Druzenje/${id}`,
        {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.ok) {
        alert(`Uspesno je izbrisano druzenje`);
        window.location.href = '/#/Druzenja';
      } else {
        setError('Error');
      }
    } catch (err) {
      console.log('Error deleting', err);
      setError('Something went wrong');
    }
  };

  const { id } = useParams();

  return (
    <div className="izbrisi-container">
      <h1 className="heading">Jel si siguran :^/</h1>
      <button onClick={handleDelete}>DA</button>
      <button>NE</button>
      <Footer></Footer>
    </div>
  );
};

export default IzbrisiDruzenje;
