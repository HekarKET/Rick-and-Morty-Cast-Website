import Header from './components/header'
import Main from './components/main'
import { StoreProvider, createStore } from 'easy-peasy';

import model from './model'
import './App.css';

const store = createStore(model);




function App() {



  return (
    <>
      <StoreProvider store={store}>
        <Header />


        <Main />
      </StoreProvider>


    </>
  );
}


export default App;
