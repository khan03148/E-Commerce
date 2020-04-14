import React, { Component } from 'react'
import Title from '../Title'
import CartColumns from './CartColumns';
import {ProductConsumer} from '../../Context';
import EmptyCart from './EmptyCart';
import CartLists from './CartLists';
import CartTotals from './CartTotals';

export default class Cart extends Component {
    render() {
        return (
            <section>
            <ProductConsumer>
          
                {(value) => {
                    const {cart} = value;
                    if(cart.length > 0){
                        return(
                            <>
                            <Title name="your" title="cart"/>
                            <CartColumns/>
                            <CartLists value={value}/>
                            <CartTotals value={value}/>
                            </>
                        );
                    }
                    else{
                       return( <EmptyCart/>);

                    }
                  
                }}
                
            
            </ProductConsumer>
           
            </section>
        )
    }
}
