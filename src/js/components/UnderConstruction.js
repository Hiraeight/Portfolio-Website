import React from 'react';
import constructionImage from '../../images/under_construction.svg'; 

const UnderConstruction = () => {
  return (
    <div className="under-construction">
      <img src={constructionImage} alt="Under Construction" className="background-image" />
      <h1>Under Construction</h1>
    </div>
  );
};

export default UnderConstruction;
