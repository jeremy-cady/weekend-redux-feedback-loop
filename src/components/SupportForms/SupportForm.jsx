import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

function SupportForm() {
    const dispatch = useDispatch();
    const history = useHistory();

    const [supportInput, setSupportInput] = useState('');

    const onSubmit = () => {
        dispatch({
            type: 'SET_SUPPORT_INFO',
            payload: supportInput
        })
        if(!supportInput) {
            alert('Please enter a support value 💪');
        }
        else {
            history.push('/comments');
        }
    }



    return(
        <>
            <h1>How well do you feel you feel supported?</h1>
            <select 
                onChange={(event) => setSupportInput(event.target.value)}
                value={supportInput}>
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

export default SupportForm;