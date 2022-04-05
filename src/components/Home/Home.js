import React from 'react';
import { useNavigate } from 'react-router-dom';
import useAirPodReviews from '../CustomHooks/useAirPodReviews/useAirPodReviews';
import Review from '../Review/Review';
import image from '../../images/airPod.jpg';
import './Home.css';

const Home = () => {
  const [carReviews] = useAirPodReviews();
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
      {/* custom css added to this component */}
      <div className="flex flex-col-reverse items-center justify-between md:flex-row">
        <div className="custom-header-left-style">
          <h1>Wireless! Effortless! Magical!</h1>
          <p>
            Just take them out and they're ready to use with all your devices.
            Put them in your ears and they connect instantly. Speak into them
            and your voice sounds clear. Introducing Airpods. Simplicity and
            technolgy, together like never before. The result is completely
            magical.
          </p>
          <button
            className="rounded-full custom-header-left-button-style"
            onClick={goToBlogs}
          >
            Read Blogs
          </button>
        </div>
        <div className="custom-header-right-style">
          <img src={image} alt="" className="custom-header-right-image-style" />
        </div>
      </div>
      {/* header section ends */}

      {/* main section starts */}
      <div className="m-5">
        <h3 className="custom-main-heading-style">Customer reviews</h3>
        <div className="grid gap-4 grid-cols-1 md:mx-10 md:grid-cols-3">
          {carReviews.slice(0, 3).map((carReview) => (
            <Review key={carReview?._id} carReview={carReview} />
          ))}
        </div>

        <div className="flex justify-center">
          <button
            className="rounded-full custom-main-button-style"
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
