import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import '../Izbrisi/Izbrisi.css';

const Izbrisi = () => {
  const [error, setError] = useState('');
  const handleDelete = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/Garis/${id}`,
        {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log('Deleting success', data);

        if (data.token) {
          localStorage.setItem('token', data.token);
        }

        alert(`Uspesno je izbrisan Gari`);
        window.location.href = '/#/Home';
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

export default Izbrisi;
