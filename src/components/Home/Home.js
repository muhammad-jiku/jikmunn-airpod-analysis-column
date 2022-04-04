import React from 'react';
import useCarReviews from '../CustomHooks/useCarReviews/useCarReviews';
import Review from '../Review/Review';

const Home = () => {
  const [carReviews] = useCarReviews();

  // useEffect(() => {
  //   fetch('reviews.json')
  //     .then((res) => res.json())
  //     .then((data) => setCarReviews(data))
  //     .catch((err) => console.log(err));
  // }, []);

  return (
    <div>
      <h2>This is HomePage</h2>

      {/* main section starts */}
      <main>
        <h3>Some Reviews of Customers</h3>
        {carReviews.slice(0, 3).map((carReview) => (
          <Review key={carReview?._id} carReview={carReview} />
        ))}
      </main>
      {/* main sectin ends */}
    </div>
  );
};

export default Home;
