import './App.css';
import AddCart from './components/AddCart';
import Header from './components/header/Header';
import { cartProduct} from './dummyData';
import { useState } from 'react';

function App() {
  const [addCart, setAddCart] = useState(0);
  return (
    <div className="App">
      <Header addCart={addCart}/>
     <div className='addCartCom'>
          {
              cartProduct.map((e) => {
                  return(
                    <AddCart data={e} addCart={addCart} setAddCart={setAddCart}/>
                  )
              })

            }
     </div>
      
    </div>
  );
}

export default App;
