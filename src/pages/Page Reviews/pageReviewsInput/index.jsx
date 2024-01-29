import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setComment, setComments} from '../../../apiComonents/apiSlice';

function PageReviewsInput() {
  const dispatch = useDispatch();
  const comment = useSelector((state) => state.api.comment);

  const handleInputChange = (event) => {
    dispatch(setComment(event.target.value));
  };

  const handleAddComment = () => {
    if (comment.trim() !== '') {
      dispatch(setComments(comment));
      dispatch(setComment(''));
    }
  };

  return (
    <div className='PageReviewsInput'>
      <input value={comment} onChange={handleInputChange}></input>
      <button onClick={handleAddComment}>Добавить отзыв</button>
      <div>
        {comment.split('\n').map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>
    </div>
  );
}

export default PageReviewsInput;