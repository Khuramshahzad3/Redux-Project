import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductComponents from './ProductComponents'
import { setProducts } from '../redux/actions/ProductAction'
import axios from 'axios'
const ProductListings = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state)
    const fetchproduct = async () => {
        const response = await axios.get('https://fakestoreapi.com/products')
            .catch((err) => {
                console.log(err)
            })
        dispatch(setProducts((response.data)))
    }
    useEffect(() => {
        fetchproduct()
    }, [])
    console.log("Products: ", products);
    return (
        <div className=''>

            <ProductComponents />
        </div>
    )
}

export default ProductListings