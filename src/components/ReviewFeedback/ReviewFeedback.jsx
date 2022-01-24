import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function ReviewFeedback() {
    const history = useHistory();

    const feelings = useSelector(store => store.feelingsReducer);
    console.log('feelings are:', feelings);

    const understanding = useSelector(store => store.understandingReducer);
    console.log('understanding is:', understanding);

    const support = useSelector(store => store.supportReducer);
    console.log('support is:', support);

    const comments = useSelector(store => store.commentsReducer);
    console.log('comments are:', comments);


    const addFeedbackItem = () => {
        axios.post({
          method: 'POST',
          url: '/feedback',
          data: {
              feelings,
              understanding,
              support,
              comments
          }
        }).then((response) => {
          console.log('response is:', response);
          //history.push('/feelings')
        }).catch((error) => {
          console.error('POST /feedback error', error);
        });
      }



    return(
        <>
            <div>
                <ul>
                    <li>Feelings: {feelings}</li>
                    <li>Understanding: {understanding}</li>
                    <li>Support: {support}</li>
                    <li>Comments: {comments}</li>
                </ul>

                <button className="submit" onClick={addFeedbackItem}>Submit</button>
            </div>
        </>
    )
}

export default ReviewFeedback;