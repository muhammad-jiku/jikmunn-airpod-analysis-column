import React from 'react';
import { useNavigate } from 'react-router-dom';
import useCarReviews from '../CustomHooks/useCarReviews/useCarReviews';
import Review from '../Review/Review';

const Home = () => {
  const [carReviews] = useCarReviews();
  const navigate = useNavigate();

  const showAllReviews = () => {
    navigate('/reviews');
  };

  return (
    <div>
      <h2>This is HomePage</h2>

      {/* main section starts */}
      <main>
        <h3>Some Reviews of Customers</h3>
        {carReviews.slice(0, 3).map((carReview) => (
          <Review key={carReview?._id} carReview={carReview} />
        ))}
        <button onClick={showAllReviews}>See more</button>
      </main>
      {/* main sectin ends */}
    </div>
  );
};

export default Home;
