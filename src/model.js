import { default as axios } from "axios";
import { action, thunk } from 'easy-peasy';

export default {
    content: [],
    loading: true,
    fetchData: thunk(async actions => {
        const page = Math.random() * 20;
        try {
            actions.setLoading(true);
            const req = await axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`)
                .then(data => data.data)
                .catch(err => console.log(err));
            const result = req.results


            actions.setContent(result);
            actions.setLoading(false);

        } catch (error) {
            console.log(error);
        }
    }
    ),
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

    })

}