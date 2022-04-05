import React from 'react';
import './Review.css';
import { StarIcon } from '@heroicons/react/solid';

const Review = (props) => {
  // destructuring
  const { carReview } = props;
  const { name, pic, review, ratings, date } = carReview;

  return (
    <div className="p-5 mx-10 border-solid rounded border">
      <div className="flex items-center">
        <img src={pic} alt={name} className="rounded-full imageOfReviewer" />
        <h2 className="mx-5">{name}</h2>
      </div>
      <div className="flex items-center my-5">
        <p className="text-3xl">{ratings}</p>
        <StarIcon className="h-16 text-yellow-400" />
        <p className="text-xl text-gray-700 ml-16 right-0">
          <small>{date}</small>
        </p>
      </div>
      <p className="text-2xl">
        <span className="text-3xl">“</span>
        {review}
        <span className="text-3xl">”</span>
      </p>
    </div>
  );
};

export default Review;
