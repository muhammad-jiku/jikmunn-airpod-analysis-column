import React from 'react';
import useCarReviews from '../CustomHooks/useCarReviews/useCarReviews';
import Review from '../Review/Review';

const Reviews = () => {
  const [carReviews] = useCarReviews();

  return (
    <div>
      <h2>This is Reviews Page</h2>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-3 md:mx-10">
        {carReviews.map((carReview) => (
          <Review key={carReview?._id} carReview={carReview} />
        ))}
      </div>
    </div>
  );
};

export default Reviews;
