import { useHistory } from 'react-router-dom'

function SuccessPage(feelings, understanding, support, comments) {
    const history = useHistory();

    const onSubmit = () => {
        feelings = '';
        understanding = '';
        support = '';
        comments = '';

        console.log(feelings, understanding, support, comments);

        history.push('/feelings');
    }



    return(
        <>
            <h1>
                Submission successful!
            </h1>
            <button onClick={onSubmit}>Add more feedback</button>
        </>
    )
}

export default SuccessPage;