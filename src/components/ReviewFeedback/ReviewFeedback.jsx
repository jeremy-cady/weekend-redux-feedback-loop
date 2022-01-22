import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function ReviewFeedback({ addFeedbackItem }) {
    const history = useHistory();

    const feelings = useSelector(store => store.feelingsReducer);
    const understanding = useSelector(store => store.understandingReducer);
    const support = useSelector(store => store.supportReducer);
    const comments = useSelector(store => store.commentsReducer);

    const newItem = {
        feelings: feelings,
        understanding: understanding,
        support: support,
        comments: comments
    }

    const onSubmit = () => {
        addFeedbackItem(newItem);
        history.push('/success');
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

                <button className="submit" onClick={onSubmit}>Submit</button>
            </div>
        </>
    )
}

export default ReviewFeedback;