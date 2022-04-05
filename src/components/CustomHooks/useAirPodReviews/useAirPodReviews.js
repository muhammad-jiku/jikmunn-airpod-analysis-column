import { useEffect, useState } from 'react';

const useAirPodReviews = () => {
  const [carReviews, setCarReviews] = useState([]);
  useEffect(() => {
    fetch('reviews.json')
      .then((res) => res.json())
      .then((data) => setCarReviews(data))
      .catch((err) => console.log(err));
  }, []);

  return [carReviews, setCarReviews];
};

export default useAirPodReviews;
