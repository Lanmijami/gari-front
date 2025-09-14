import React from 'react';
import '../SortingBar/SortingBar.css';

interface Props {
  sortDescPrio: () => void;
  sortAscPrio: () => void;
  sortDescClose: () => void;
  sortAscClose: () => void;
}

const SortingBar = ({
  sortDescPrio,
  sortAscClose,
  sortAscPrio,
  sortDescClose,
}: Props) => {
  return (
    <div className="sorting-bar-container">
      <button className="sorting-bar-button" onClick={sortDescPrio}>
        Sort DESC PRIORITY
      </button>
      <button className="sorting-bar-button" onClick={sortAscPrio}>
        Sort ASC PRIORITY
      </button>
      <button className="sorting-bar-button" onClick={sortDescClose}>
        Sort DESC CLOSENESS
      </button>
      <button className="sorting-bar-button" onClick={sortAscClose}>
        Sort ASC CLOSENESS
      </button>
      {/* <button className="sorting-bar-button">Sort DESC PRIORITY</button>
      <button className="sorting-bar-button">Sort DESC PRIORITY</button> */}
    </div>
  );
};

export default SortingBar;
