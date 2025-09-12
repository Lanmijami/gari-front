import React, { useEffect, useState } from 'react';
import Garis from '../../garis.model';

interface Props {
  userId: string;
}

const OneGari = ({ userId }: Props) => {
  const [gari, setGari] = useState<Garis | null>(null);

  useEffect(() => {
    const fetchGari = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}/api/Garis/${userId}`
        );

        if (response.status === 404) {
          console.log('Gari not found');
          setGari(null);
          return;
        }

        if (!response.ok) throw new Error(`Https error ${response.status}`);

        const data = await response.json();
        setGari(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchGari();
  }, []);

  return (
    <>
      {gari ? (
        <div>
          <p>{`${gari.name} -- ${gari.description} -- ${gari.priority}`}</p>
        </div>
      ) : (
        'Loading gari...'
      )}
    </>
  );
};

export default OneGari;
