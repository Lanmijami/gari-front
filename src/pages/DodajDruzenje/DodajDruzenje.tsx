import React, { useState, useEffect } from 'react';
import Footer from '../../components/Footer/Footer';
import '../DodajDruzenje/DodajDruzenje.css';

interface Gari {
  id: string; // GUID
  name: string;
  lastname?: string;
}

const DodajDruzenje = () => {
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
  const [allGaris, setAllGaris] = useState<Gari[]>([]);
  const [selectedGaris, setSelectedGaris] = useState<string[]>([]); // GUIDs

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/api/Garis`)
      .then((res) => res.json())
      .then((data: Gari[]) => setAllGaris(data))
      .catch((err) => console.error(err));
  }, []);

  const handleToggleGari = (id: string) => {
    setSelectedGaris((prev) =>
      prev.includes(id) ? prev.filter((gid) => gid !== id) : [...prev, id]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Selected Garis:', selectedGaris); //

    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/Druzenje`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            Title: title,
            Location: location,
            Date: date,
            GariIds: selectedGaris, // array of GUIDs
          }),
        }
      );

      if (response.ok) {
        alert('Druzenje uspešno dodato!');
        window.location.reload();
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="dodaj-druzenje-container">
      <form className="form2" onSubmit={handleSubmit}>
        <h1 className="dodaj-druzenje-h1">Dodaj Druzenje</h1>

        <input
          type="text"
          placeholder="Naziv Druzenja"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Lokacija"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />
        <input
          type="datetime-local"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />

        <h2>Izaberi Garije</h2>
        <div>
          {allGaris.map((gari) => (
            <label key={gari.id} style={{ display: 'block' }}>
              <input
                type="checkbox"
                checked={selectedGaris.includes(gari.id)}
                onChange={() => handleToggleGari(gari.id)}
              />
              {gari.name} {gari.lastname}
            </label>
          ))}
        </div>

        <button className="dodaj-druzenje-button" type="submit">
          Dodaj Druzenje
        </button>
      </form>
      <Footer></Footer>
    </div>
  );
};

export default DodajDruzenje;
