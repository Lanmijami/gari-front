import React, { useEffect, useState } from 'react';
import Garis from '../../garis.model';
import GariComponent from '../GariComponent/GariComponent';

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

  return (
    <>
      {garis ? (
        <div>
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
