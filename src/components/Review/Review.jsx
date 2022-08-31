import React from 'react';
import './_Review.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faStar } from '@fortawesome/free-solid-svg-icons'

const Review = ({review}) => {
  return (
      <div className="story">
          <figure className="story__shape">

              <img src={require(`../../img/${review.img}`)}
                   alt="Person on a tour" className="story__img" />


              <figcaption className="story__caption">{review.name}</figcaption>
          </figure>
          <div className="story__text">
              <p>
                  {
                      review.review
                  }
              </p>
              <h3 className="heading-tertiary u-margin-bottom-small">

                {review.rating}

               <span> {Array.from(Array(5), (e, i) => {
                 return <FontAwesomeIcon key={i} className={`${i+1 <= review.rating ? 'text-orange-700': 'text-gray-500'} mx-0.5`} icon={faStar} />
               })}</span>

              </h3>

          </div>
      </div>
  );
};

export default Review;