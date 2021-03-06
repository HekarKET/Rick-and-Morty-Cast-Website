import { StoreProvider, createStore } from 'easy-peasy';
import Home from './components/home'
import Navbar from './components/navbar'
import model from './model'


const store = createStore(model);




function App() {




  return (
    <>
      <StoreProvider store={store}>
        <Navbar />

        <Home />

      </StoreProvider>


    </>
  );
}


export default App;
