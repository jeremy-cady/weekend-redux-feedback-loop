import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

function FeelingsForm() {
    const dispatch = useDispatch();
    const history = useHistory();

    const [feelingsInput, setFeelingsInput] = useState('');

    const onSubmit = () => {
        dispatch({
            type: 'SET_FEELINGS_INFO',
            payload: feelingInput
        })

        if(!feelingInput) {
            alert('Please enter a feelings value 😊');
        }
        else {
            history.push('/understanding');
        }
    }
    return(
        <>
            <h1>How are you feeling today?</h1>
            <label for="feelings">Feelings?</label>
            <select name="feelings">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>    
            </select>
            <button onClick={onSubmit}>NEXT</button>
        </>
    )
}

export default FeelingsForm;