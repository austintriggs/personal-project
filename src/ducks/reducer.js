import axios from 'axios';

const initialState = {
    products: [],
    cart: []
};

const GET_PRODUCTS = 'GET_PRODUCTS'

export default function reducer(state = initialState, action) {
    console.log(action)
    console.log(state);
    switch(action.type) {
        // case GET_PRODUCTS + '_PENDING':
        //     console.log('_PENDING')
        //     // break;
        case GET_PRODUCTS + '_FULFILLED':
            return Object.assign ({}, state, {products: action.payload})
        default:
           return state;
    }
}

export function getProducts() {
    return {
        type: GET_PRODUCTS,
        payload: axios.get('/api/products').then((response)=>{
            return response.data
          })
    }
}