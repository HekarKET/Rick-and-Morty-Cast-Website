import './style.css'
import { useStoreActions, useStoreState } from 'easy-peasy'


const Form = () => {


    const setQuery = useStoreActions((actions) => actions.setQuery);
    const fetchQuery = useStoreActions((actions) => actions.fetchQuery)
    const query = useStoreState((state) => state.query)

    const changemenu = (e) => {
        e.preventDefault();
        const text = document.getElementById('input');
        setQuery(text.value);
        fetchQuery(query);

    }


    return (

        <form>

            <input type='text' placeholder='Search by Name' id='input'></input>

            <button onClick={changemenu}> Search </button>

        </form >
    );
}

export default Form;