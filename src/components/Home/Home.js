import React from 'react';
import { useNavigate } from 'react-router-dom';
import useCarReviews from '../CustomHooks/useCarReviews/useCarReviews';
import Review from '../Review/Review';
import image from '../../images/first.jpg';

const Home = () => {
  const [carReviews] = useCarReviews();
  const navigate = useNavigate();

  const showAllReviews = () => {
    navigate('/reviews');
  };

  const goToBlogs = () => {
    navigate('/blogs');
  };

  return (
    <div className="container">
      {/* header section starts*/}
      <div className="flex flex-col-reverse items-center justify-between md:flex-row">
        <div className="p-5 text-center md:w-3/4">
          <h1 className="text-5xl">Wireless! Effortless! Magical!</h1>
          <p className="text-2xl text-justify">
            Just take them out and they're ready to use with all your devices.
            Put them in your ears and they connect instantly. Speak into them
            and your voice sounds clear. Introducing Airpods. Simplicity and
            technolgy, together like never before. The result is completely
            magical.
          </p>
          <button
            className="rounded-full bg-blue-600 text-white text-center px-5 py-3 m-5"
            onClick={goToBlogs}
          >
            Read Blogs
          </button>
        </div>
        <div className="md:w-1/4">
          <img
            src={image}
            alt=""
            className={`my-5 border-2 w-['250px'] md:w-full`}
            // style={{ width: '250px' }}
          />
        </div>
      </div>
      {/* header section ends */}

      {/* main section starts */}
      <div>
        <h3 className="m-4 text-center text-4xl">Some Reviews of Customers</h3>
        <div className="grid gap-4 grid-cols-1 md:mx-10 md:grid-cols-3">
          {carReviews.slice(0, 3).map((carReview) => (
            <Review key={carReview?._id} carReview={carReview} />
          ))}
        </div>

        <div className="flex justify-center">
          <button
            className="rounded-full bg-blue-600 text-white text-center px-5 py-3 m-5"
            onClick={showAllReviews}
          >
            See more
          </button>
        </div>
      </div>
      {/* main sectin ends */}
      {/* “*” */}
    </div>
  );
};

export default Home;
