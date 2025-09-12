import React, { useState } from 'react';
import Footer from '../../components/Footer/Footer';
import '../DodajGarije/DodajGarije.css';

const DodajGarije = () => {
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [description, setDescription] = useState('');
  const [closeness, setCloseness] = useState('');
  const [priority, setPriority] = useState('');
  const [error, setError] = useState('');

  const handleAddGari = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/Garis`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: name,
            lastname: lastname,
            description: description,
            closeness: closeness,
            priority: priority,
          }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log('Adding success', data);

        if (data.token) {
          localStorage.setItem('token', data.token);
        }

        alert(`Uspesno je dodat Gari: ${name}`);
        window.location.reload();
      } else {
        setError('Error');
      }
    } catch (err) {
      console.log('Error adding Gari', err);
      setError('Something went wrong');
    }
  };

  return (
    <div>
      <div className="gari-container">
        <form className="form2" onSubmit={handleAddGari}>
          <h1 className="heading">Dodaj novog Garija:</h1>
          <input
            required
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            required
            type="text"
            placeholder="Last Name"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
          <input
            required
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            required
            type="number"
            placeholder="Closeness"
            value={closeness}
            onChange={(e) => setCloseness(e.target.value)}
          />
          <input
            required
            type="number"
            placeholder="Priority"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          />
          <button type="submit" className="button">
            Dodaj Garija
          </button>
          {error && <p style={{ color: 'red', fontSize: '30px' }}>{error}</p>}
        </form>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default DodajGarije;
