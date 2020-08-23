import React from 'react';

export default function Action({ type, id, onActionClick }) {
  const handleIconClick = () => {
    onActionClick(id, type);
  };

  return (
    <span className="material-icons small" onClick={handleIconClick}>
      {type}
    </span>
  );
}
