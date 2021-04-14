import React from 'react';
import Form from './form';
import Card from './cards'
import { useStoreState, useStoreActions } from 'easy-peasy';
import { useEffect } from 'react'
import './style.css'



const Main = () => {
    //const card = useStoreState(state => state.content);
    const fetchData = useStoreActions(actions => actions.fetchData);
    useEffect(() => { fetchData(); }, []);
    const contents = useStoreState(state => state.content);

    //console.log(contents);




    return (
        <div className="main">
            <Form />
            <div className="body-card">
                {contents.map(content => (
                    <Card
                        key={content.id}
                        id={content.id}
                        img={content.image}
                        name={content.name}
                        gender={content.gender}
                        status={content.status}
                        species={content.species}

                    />
                ))}

            </div>

        </div >
    );
}

export default Main;