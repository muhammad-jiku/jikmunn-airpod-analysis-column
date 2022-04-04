import React from 'react';

const Review = (props) => {
  // destructuring
  const { carReview } = props;
  const { name, pic, review, ratings } = carReview;

  return (
    <div>
      <img src={pic} alt={name} />
      <h2>Name: {name} </h2>
      <p>{review}</p>
      <p>
        <small>{ratings}</small>
      </p>
    </div>
  );
};

export default Review;
