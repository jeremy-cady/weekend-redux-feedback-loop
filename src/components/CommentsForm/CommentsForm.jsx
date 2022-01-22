import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

function CommentsForm() {
    const dispatch = useDispatch();
    const history = useHistory();

    const [commentsInput, setCommentsInput] = useState('');

    const onSubmit = () => {
        dispatch({
            type: 'SET_COMMENTS_INFO',
            payload: commentsInput
        })
        history.push('/review');
    }



    return(
        <>
            <h1>Any comments you would like to leave?</h1>
            <input
                className="commentsInput"
                type="text"
                onChange={(event) => setCommentsInput(event.target.value)}
                value={commentsInput}
            />
            <button onClick={onSubmit}>NEXT</button>
        </>
    )
}

export default CommentsForm;