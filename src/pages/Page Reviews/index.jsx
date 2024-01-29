import React from 'react';
import PageReviewsInput from './pageReviewsInput';
import { useSelector } from 'react-redux';
import "./style.scss"

function PageReviews() {
  const comments = useSelector((state) => state.api.comments);

  return (
    <div className='PageReviews'>
    <h3 className='PageReviews_title'>Отзывы</h3>
      <PageReviewsInput />
      <div className='PageReviews__comentConeiner'>
        {comments.map((comment, index) => (
            <div key={index} className='PageReviews__comentConeiner_inner'>
                <h3>User</h3>
                <p >{comment}</p>
            </div>
        ))}
      </div>
    </div>
  );
}

export default PageReviews;