// import axios from 'axios';
// import React, { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom'
// import { selectedProduct } from '../redux/actions/ProductAction';
// const ProductDetails = () => {
//     const product = useSelector((state) => state.product)
//     const { productId } = useParams();
//     console.log(product)
//     const dispatch = useDispatch();
//     const fetchProductdata = async () => {
//         const response = await axios.get(`https://fakestoreapi.com/products/${productId}`).catch((err) => {
//             console.log("err", err)
//         })
//         dispatch(selectedProduct(response.data))
//     }
//     useEffect(() => {

//         if (productId && productId !== "")
//             fetchProductdata()
//     }, [productId])
//     return (
//         <div>ProductDetails</div>
//     )
// }

// export default ProductDetails

import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectedProduct, removeSelectedProduct } from '../redux/actions/ProductAction';

const ProductDetails = () => {
    const product = useSelector((state) => state.product);
    const { productId } = useParams();
    const dispatch = useDispatch();

    const fetchProductdata = async () => {
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`).catch((err) => {
            console.log("err", err);
        });
        dispatch(selectedProduct(response.data));
    };

    useEffect(() => {
        if (productId && productId !== "")
            fetchProductdata();
        return () => {
            dispatch(removeSelectedProduct());
        }
    }, [productId]);

    return (
        <div className="container mx-auto mt-10">       
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-5">
                {/* Product Image */}
                <div className="flex justify-center md:justify-start">
                    <img src={product.image} alt={product.title} className="object-cover w-96 h-auto" />
                </div>

                {/* Product Details */}
                <div className="flex flex-col justify-center max-md:p-6">
                    <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
                    <div className="text-2xl text-teal-500 font-semibold mb-2">${product.price}</div>
                    <div className="bg-gray-200 text-gray-700 font-medium px-2 py-1 rounded inline-block mb-4">{product.category}</div>
                    <p className="text-gray-700 mb-6">{product.description}</p>
                    <button className="bg-pink-500 text-white font-semibold py-2 px-4 rounded hover:bg-pink-600 transition duration-300 ease-in-out">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
