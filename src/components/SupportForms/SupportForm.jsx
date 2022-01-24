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
            <input 
                type="number"
                min="0"
                max="10"
                step="1"
                onChange={(event) => setSupportInput(event.target.value)}
                value={supportInput}
            />
            <button onClick={onSubmit}>NEXT</button>
        </>
    )
}

export default SupportForm;