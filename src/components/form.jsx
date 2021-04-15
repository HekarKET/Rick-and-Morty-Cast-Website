import './style.css'
import { useStoreActions } from 'easy-peasy'
import Dropdown from './dropdown'


const Form = () => {


    const setQuery = useStoreActions((actions) => actions.setQuery);
    const fetchQuery = useStoreActions((actions) => actions.fetchQuery);



    const fetchByName = async (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            const text = document.getElementById('input');
            await setQuery(text.value);
            console.log(text.value)
            fetchQuery();

        }


    }



    return (

        <div className="form">

            <form>

                <input type='text' placeholder='Search by Name' id='input' onKeyDown={fetchByName}></input>
                {/* <button className='btn-fetchbyname' onClick={fetchByName}> Search </button> */}
                <Dropdown />


            </form >


        </div>
    );
}

export default Form;