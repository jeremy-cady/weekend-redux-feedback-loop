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
            <select 
                onChange={(event) => setUnderstandingInput(event.target.value)}
                value={understandingInput}>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                
            </select>
            <button onClick={onSubmit}>NEXT</button>
        </>
    )
}

export default UnderstandingForm;