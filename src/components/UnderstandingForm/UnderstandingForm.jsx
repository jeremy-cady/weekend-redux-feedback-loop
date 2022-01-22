import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

function UnderstandingForm() {
    const dispatch = useDispatch();
    const history = useHistory();

    const [understandingInput, setUnderstandingInput] = useState('');

    const onSubmit = () => {
        dispatch({
            type: 'SET_UNDERSTANDING_INFO',
            payload: understandingInput
        })
        if(!understandingInput) {
            alert('PLease enter an understanding input 🤔');
        }
        else {
            history.push('/support');
        }
    }

    return(
        <>
            <h1>How well do you feel you are understanding the material?</h1>
            <input 
                type="number"
                onChange={(event) => setUnderstandingInput(event.target.value)}
                value={understandingInput}
            />
            <button onClick={onSubmit}>NEXT</button>
        </>
    )
}

export default UnderstandingForm;