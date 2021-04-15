import { StoreProvider, createStore } from 'easy-peasy';
import Home from './components/home'

import model from './model'
import './App.css';

const store = createStore(model);




function App() {




  return (
    <>
      <StoreProvider store={store}>

        <Home></Home>

      </StoreProvider>


    </>
  );
}


export default App;
