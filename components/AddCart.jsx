import React from 'react';
import './addCart.css';
// import Button from '@mui/material/Button';
import { useState } from 'react';

export default function AddCart({data, addCart, setAddCart}) { 
  const [ show, setShow] = useState(true);
  const handleClick = () => {
    setAddCart(addCart + 1)
    setShow(!show)
  }

  return (
        <div className="addBody">
            <img src={data.poster} alt={data.name} className="addImg" />
            <span className="addItem">Itemname: {data.name}</span>
            <span className="addItem">rating: {data.rating}</span>
            <span className="addItem">price: {data.price}</span>
            {
              show ? <button className="clickToAdd"
              onClick={handleClick}
            >
              AddCart
            </button> :  <button className="view"
               onClick ={() => setShow(!show)}
             >View</button>
            }
            
        </div>
  )
};
