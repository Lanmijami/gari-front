import React, { useEffect, useState } from 'react';
import Garis from '../../garis.model';
import GariComponent from '../GariComponent/GariComponent';
import '../GariList/GariList.css';
import SortingBar from '../SortingBar/SortingBar';

const GariList = () => {
  const [garis, setGaris] = useState<Garis[]>();

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/api/Garis`).then((response) =>
      response.json().then((json) => {
        console.log('Garis: ', json);
        setGaris(json);
      })
    );
  }, []);

  function handleSortDescPriority() {
    if (!garis) return;
    const sorted = [...garis].sort((a, b) => b.priority - a.priority);
    setGaris(sorted);
  }

  function handleSortAscPriority() {
    if (!garis) return;
    const sorted = [...garis].sort((a, b) => a.priority - b.priority);
    setGaris(sorted);
  }

  function handleSortDescClose() {
    if (!garis) return;
    const sorted = [...garis].sort((a, b) => b.closeness - a.closeness);
    setGaris(sorted);
  }

  function handleSortAscClose() {
    if (!garis) return;
    const sorted = [...garis].sort((a, b) => a.closeness - b.closeness);
    setGaris(sorted);
  }

  return (
    <>
      <SortingBar
        sortDescPrio={handleSortDescPriority}
        sortAscPrio={handleSortAscPriority}
        sortAscClose={handleSortAscClose}
        sortDescClose={handleSortDescClose}
      ></SortingBar>
      {garis ? (
        <div className="gari-component-grid">
          {garis.map((g) => (
            <GariComponent
              id={g.id}
              name={g.name}
              lastname={g.lastname}
              priority={g.priority}
              closeness={g.closeness}
              description={g.description}
            ></GariComponent>
          ))}
        </div>
      ) : (
        'Loading...'
      )}
    </>
  );
};

export default GariList;
