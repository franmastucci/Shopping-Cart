import React, {  }  from 'react';
import "./HomeScreen.css";
import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
//componnts
import Product from "../components/Product";

//actions
import {getProducts as listProducts} from "../redux/actions/productActions";

const HomeScreen = () => {
    const dispatch = useDispatch();

    const getProducts = useSelector((state) => state.getProducts);
    const {products, loading, error} = getProducts;

    useEffect (() => {
        dispatch(listProducts()); 
    }, [dispatch]);

    return (
        <div className = "homescreen"> 
            <h2 className = "homescreen-title">Latest Products</h2>
            <div className = "homescreen-products"> 
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
            </div> 
        </div>
    )
}

export default HomeScreen;