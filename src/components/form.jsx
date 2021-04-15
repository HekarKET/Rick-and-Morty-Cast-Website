import './style.css'
import { useStoreActions, useStoreState } from 'easy-peasy'


const Form = () => {

    const content = useStoreState(state => state.content);
    const setQuery = useStoreActions((actions) => actions.setQuery);
    const fetchQuery = useStoreActions((actions) => actions.fetchQuery);
    const setFilterContent = useStoreActions((actions) => actions.setFilterContent);


    const fetchByName = async (e) => {
        e.preventDefault();
        const text = document.getElementById('input');
        await setQuery(text.value);
        fetchQuery();

    }

    const filter = (e) => {
        e.preventDefault();
        const val = 'alive';
        switch (val) {
            case 'alive':
                setFilterContent(content.filter(element => element.status === 'Alive'));
                break;
            default: console.log('error');
        }

    }

    return (

        <form>

            <input type='text' placeholder='Search by Name' id='input'></input>

            <button className='btn-fetchbyname' onClick={fetchByName}> Search </button>


            <button className='btn-filter' onClick={filter}> Filter </button>



        </form >
    );
}

export default Form;