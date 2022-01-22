import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';

function FeelingsForm({ getFeedback }) {
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        getFeedback();
      }, []);

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
            <input 
                type="number"
                onChange={(event) => setFeelingsInput(event.target.value)}
                value={feelingsInput}
            />
            <button onClick={onSubmit}>NEXT</button>
        </>
    )
}

export default FeelingsForm;