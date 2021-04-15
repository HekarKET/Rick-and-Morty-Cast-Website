import './style.css'
import { useStoreActions } from 'easy-peasy'
import Dropdown from './dropdown'


const Form = () => {


    const setQuery = useStoreActions((actions) => actions.setQuery);
    const fetchQuery = useStoreActions((actions) => actions.fetchQuery);



    const fetchByName = async (e) => {
        e.preventDefault();
        const text = document.getElementById('input');
        await setQuery(text.value);
        fetchQuery();

    }



    return (

        <div className="form">

            <form>

                <input type='text' placeholder='Search by Name' id='input'></input>
                <button className='btn-fetchbyname' onClick={fetchByName}> Search </button>


            </form >

            <Dropdown

            />
        </div>
    );
}

export default Form;