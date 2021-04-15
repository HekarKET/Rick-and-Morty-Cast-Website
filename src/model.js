import { default as axios } from "axios";
import { action, thunk } from 'easy-peasy';

export default {
    content: [],
    filterContent: [],
    loading: true,
    query: '',
    error: false,
    fetchData: thunk(async actions => {
        const page = Math.random() * 20;
        try {
            actions.setLoading(true);
            const req = await axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`)
                .then(data => data)
                .catch(err => console.log(err));
            if (req.status === 200) {
                const result = req.data.results
                // console.log(req);
                actions.setContent(result);
                actions.setFilterContent();
                actions.setLoading(false);
                actions.setErroPage(false);

            }
            else {
                actions.setErrorPage(true);
                actions.setLoading(false);
                console.log(req);
            }


        } catch (error) {
            console.log(error);
        }
    }
    ),
    fetchQuery: thunk(async (actions, query, { getStoreState }) => {

        try {
            actions.setLoading(true);


            await axios.get(`${getStoreState().query}`)
                .then(data => data)
                .then((data) => {
                    if (data.status === 200) {
                        const result = data.data.results;
                        actions.setContent(result);
                        actions.setFilterContent();
                        actions.setLoading(false);
                        actions.setErroPage(false);

                    }
                    else {
                        actions.setLoading(false);

                    }
                }
                )
                .catch(err => {
                    alert('Invalid name');
                    console.log(err);
                    actions.setLoading(false);
                    actions.setFilterContent();

                });


        } catch (error) {
            console.log(error);
        }
    }
    ),

    setErroPage: action((state, bool) => {
        state.error = bool;
    }),

    setFilterContent: action((state, content = null) => {
        if (content === null) {
            state.filterContent = state.content;
        }
        else {
            state.filterContent = content;
        }

    }),

    setContent: action((state, content) => {
        //const contentNeeded = content.map(contents => ([contents.id, contents.name, contents.status, content.url]));
        const contentNeeded = content.map(contents => ({

            'id': contents.id,
            'name': contents.name,
            'status': contents.status,
            'gender': contents.gender,
            'image': contents.image,
            'species': contents.species
        }

        ));

        state.content = [...contentNeeded];
    }
    ),

    setLoading: action((state, bool) => {
        state.loading = bool;

    }),

    setQuery: action((state, name) => {
        state.query = `https://rickandmortyapi.com/api/character/?name=${name}`;

    })

}