import React from 'react';
import Form from './form';
import Card from './cards'
import { useStoreState, useStoreActions } from 'easy-peasy';
import { useEffect } from 'react'
import PacmanLoader from "react-spinners/PacmanLoader";
import './style.css'



const Main = () => {
    //const card = useStoreState(state => state.content);
    const contents = useStoreState(state => state.content);
    const fetchData = useStoreActions(actions => actions.fetchData);
    const status = useStoreState(state => state.loading);



    useEffect(() => {
        fetchData();
        setTimeout(() => {
        }, 1000);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);





    return (




        < div className="main" >


            {status ? <PacmanLoader size={150} color={"#73F80F"} /> :

                <React.Fragment>
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

                        ))
                        }
                    </div>
                </React.Fragment>

            }



        </div >
    );
}

export default Main;