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
            payload: feelingsInput
        })

        if(!feelingsInput) {
            alert('Please enter a feelings value 😊');
        }
        else {
            history.push('/understanding');
        }
    }
    return(
        <>
            <h1>How are you feeling today?</h1>
            <select 
                onChange={(event) => setFeelingsInput(event.target.value)}
                value={feelingsInput}>
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
                {/* type="number"
                min="0"
                max="10"
                step="1"
                onChange={(event) => setFeelingsInput(event.target.value)}
                value={feelingsInput}
            /> */}
            <button onClick={onSubmit}>NEXT</button>
        </>
    )
}

export default FeelingsForm;