import React, { useState } from 'react';
import './style.css'



const Form = () => {

    const [menuList, setMenu] = useState(false);



    const changemenu = (e) => {
        e.preventDefault();
        setMenu(!menuList);
    }
    // const bringMenu = (e) => {
    //     const elements = document.querySelectorAll('.menu');
    //     console.log(e.target);
    //     for (let i = 0; i < elements.length; i++) {
    //         elements[i].style.display = "flex";
    //     }
    //     setMenu(!menu);
    // }

    // const outMenu = (e) => {
    //     const elements = document.querySelectorAll('.menu');

    //     for (let i = 0; i < elements.length; i++) {
    //         elements[i].style.display = "none";
    //     }
    //     setMenu(!menu);
    // }

    return (

        <form>

            <input type='text' placeholder='Search by Name'>

            </input>
            <div className="ddmenu">

                <button onClick={changemenu}> Filter </button>

                <ul className={menuList ? '' : 'hidden'}>

                    <li> Gender </li>
                    <li> Species </li>
                    <li> Status </li>
                </ul>


            </div>

        </form >
    );
}

export default Form;