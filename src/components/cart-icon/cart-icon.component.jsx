import React from 'react';
import { createStructuredSelector } from 'reselect';

import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import { 
    CartIconContainer,
    ShoppingIcon,
    ItemCountContainer
} from './cart-icon.styles.jsx';

import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

const CartIcon = ({ toggleCartHidden, itemCount}) => (
    <CartIconContainer onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon'/>
        <ItemCountContainer>{itemCount}</ItemCountContainer>
    </CartIconContainer>
);

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
  });

export default connect(
    mapStateToProps,
    mapDispatchToProps 
    )(CartIcon);