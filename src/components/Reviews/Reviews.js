import React from 'react';
// custom hook imported
import useAirPodReviews from '../CustomHooks/useAirPodReviews/useAirPodReviews';
import Review from '../Review/Review';

const Reviews = () => {
  const [carReviews] = useAirPodReviews();

  return (
    <div>
      {/* custom class added */}
      <h3 className="custom-main-heading-style">Customer reviews</h3>
      <div className="grid gap-4 grid-cols-1 my-4 md:grid-cols-3 md:mx-10">
        {carReviews.map((carReview) => (
          <Review key={carReview?._id} carReview={carReview} />
        ))}
      </div>
    </div>
  );
};

export default Reviews;
