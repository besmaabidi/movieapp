import React, { useEffect, useState } from "react";
import "./stars.css";
import StarRatingComponent from "react-star-rating-component"

const Stars = ({ isEdit, rating, myclass, setFilterRate, filterRate }) => {
  

  return (
    <div>

      <StarRatingComponent
        name="rate1"
        starCount={5}
        value={isEdit ? filterRate : rating}
        editing={isEdit}
        className={myclass}
        emptyStarColor={"white"}
        onStarClick={(nextValue) => setFilterRate(nextValue)}
      />
      
    </div>
  );
};

export default Stars;