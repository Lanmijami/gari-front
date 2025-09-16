import React from 'react';
import '../DruzenjeComponent/DruzenjeComponent.css';
import Garis from '../../garis.model';
import { MapPin } from 'lucide-react';
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';

interface Props {
  id: string;
  title: string;
  location: string;
  date: string;
  garis: Garis[];
}

const DruzenjeComponent = ({ id, title, location, date, garis }: Props) => {
  const navigate = useNavigate();

  const handleDelete = () => {
    navigate(`/MojaDruzenja/${id}/Izbrisi`);
  };

  return (
    <div className="druzenje-component-container">
      <div className="druzenje-component-header">
        <h2>{title}</h2>
        <div className="druzenje-component-header-location">
          <MapPin size={18}></MapPin>
          <p> {location}</p>
        </div>
        <hr className="hr"></hr>
      </div>
      <div className="druzenje-component-gari">
        {garis.map((gari) => (
          <div key={gari.id} className="druzenje-component-gari-item">
            <b>
              {gari.name} {gari.lastname}
            </b>
          </div>
        ))}
      </div>
      <div className="druzenje-component-date">
        <hr className="hr"></hr>
        <p>{format(new Date(date), 'dd.MM.yyyy. -  HH:mm')}</p>
      </div>
      <div className="druzenje-component-buttons">
        <button>Izmeni</button>
        <button onClick={handleDelete}>Izbrisi</button>
      </div>
    </div>
  );
};

export default DruzenjeComponent;
