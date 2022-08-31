import React from "react";
import './_ReviewRoutes.scss';
import {useReviewData} from "../../hooks/reviewDataHook";
import Review from "../../components/Review/Review";

const ReviewRoutes = ({children}) => {
  const [reviewData] = useReviewData();

  if (children==='3') {
    reviewData.length = children*1;
  }

  return <div>

    {reviewData.map(review=>

      <Review key={review.id} review={review} />

    )}

  </div>;
};

export default ReviewRoutes;
