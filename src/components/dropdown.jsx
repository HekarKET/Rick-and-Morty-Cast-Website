import React from 'react';
import { useStoreState, useStoreActions } from 'easy-peasy'





const Dropdown = () => {
    const content = useStoreState(state => state.content);
    const setFilterContent = useStoreActions((actions) => actions.setFilterContent);

    const filter = (e) => {
        e.preventDefault();
        const val = e.target.innerText;
        switch (val) {
            case 'Alive':
                setFilterContent(content.filter((element) => element.status === 'Alive'));
                break;
            case 'Dead':
                setFilterContent(content.filter((element) => element.status === 'Dead'));
                break;
            case 'Male':
                setFilterContent(content.filter((element) => element.gender === 'Male'));
                break;
            case 'Female':
                setFilterContent(content.filter((element) => element.gender === 'Female'));
                break;

            default:
                break;
        }

    }


    return (
        <div className="dropdown">
            <p ><i className="fas fa-filter"></i>FILTER</p>


            <ul className='mainmenu' >
                <li>
                    <p> Status</p>
                    <ul className='submenu' onClick={filter}>
                        <li>
                            <p>Alive</p>
                        </li>
                        <li>
                            <p>Dead</p>
                        </li>
                    </ul>
                </li>
                <li>
                    <p>Gender</p>
                    <ul className='submenu' onClick={filter}>

                        <li>
                            <p>Male</p>
                        </li>
                        <li>
                            <p>Female</p>
                        </li>
                    </ul>
                </li>

            </ul>
        </div>

    );
}

export default Dropdown;