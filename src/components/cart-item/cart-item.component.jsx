import React from 'react';

import { 
    CartItemContainer,
    CartItemImage,
    CartItemDetails
} from './cart-item.styles.jsx';

const CartItem = ({ item: { i,imageUrl, price, name, quantity}}) => (
     
    <CartItemContainer>
        <CartItemImage src={imageUrl} alt='item' />
        <CartItemDetails>
            <span>${name}</span>
            <span> 
            ${quantity} ${price}</span>
        </CartItemDetails>
    </CartItemContainer>
)

export default CartItem;