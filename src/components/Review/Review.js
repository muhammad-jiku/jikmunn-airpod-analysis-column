import React from 'react';
import './Review.css';
import { StarIcon } from '@heroicons/react/solid';

const Review = (props) => {
  // destructuring
  const { carReview } = props;
  const { name, pic, review, ratings, date } = carReview;

  return (
    <div className="custom-review-section-style">
      <div className="flex items-center">
        <img
          src={pic}
          alt={name}
          className="rounded-full custom-review-image-section-style"
        />
        <h3 className="custom-review-card-name-section-style">{name}</h3>
      </div>
      <div className="flex items-center my-5">
        <h3 className="custom-review-card-ratings-section-style">{ratings}</h3>
        <StarIcon className="h-6 text-yellow-400" />
        <p className="custom-review-card-date-section-style">
          <small>{date}</small>
        </p>
      </div>
      <p className="custom-review-card-review-section-style">
        <span className="text-3xl">“</span>
        {review}
        <span className="text-3xl">”</span>
      </p>
    </div>
  );
};

export default Review;
