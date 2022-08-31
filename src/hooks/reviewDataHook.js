import {useEffect, useState} from "react";
export const useReviewData = () => {

  const [reviewData, setReviewData] = useState([]);

  useEffect(() => {
    const fetchReviewData = async () => {
      const response = await fetch("data/reviewData.json");
      const data = await response.json();
      setReviewData(data);
    };

    fetchReviewData();
  }, []);

  return [reviewData, setReviewData];
}