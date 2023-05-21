import React from 'react';
import './header.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function Header({addCart}) {
  return (
    <div className='header'>
        <div className="addHeader">
            <span className="addNavName addone">Home</span>
            <span className="addNavName">Cantact</span>
            <span className="addNavName">Campany</span>
            <span className="addNavName">Product</span>
            <div className="cartAdded">
                <ShoppingCartIcon className='addIcon'/>
                <span className='cartAddedTitle'>Cart</span>
                <span className="cartAddedNumber">{addCart}</span>
            </div>
        </div>
    </div>
  )
}
