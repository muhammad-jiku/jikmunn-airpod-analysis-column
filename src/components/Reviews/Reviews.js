import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';

const Reviews = () => {
  const [carReviews, setCarReviews] = useState([]);
  useEffect(() => {
    fetch('reviews.json')
      .then((res) => res.json())
      .then((data) => setCarReviews(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h2>This is Reviews Page</h2>
      {carReviews.map((carReview) => (
        <Review key={carReview?._id} carReview={carReview} />
      ))}
    </div>
  );
};

export default Reviews;
