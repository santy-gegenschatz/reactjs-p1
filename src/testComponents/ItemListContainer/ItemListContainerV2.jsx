import React from 'react'
import ItemList from '../../components/ItemList/ItemList'
import { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { collection, getDocs, getFirestore } from 'firebase/firestore';

const ItemListContainer = () => {

    const {pathname} = useLocation();
    const {categoryId} = useParams();
    let [products, setProducts] = useState([]);
    function filterProducts(productsArray) {
        console.log('starting')
        let productsToShow;
        switch (pathname) {
            case ('/'):
                return productsArray
            case('/categories/' + categoryId):
                productsToShow = productsArray.filter( (item) => item.category === categoryId);
                return productsToShow
            case ('/newSeason'):
                productsToShow = productsArray.filter( (item) => item.newSeason === true);
                return productsToShow
            default:
                return productsArray
        }
    }

    async function getProducts() {
        const db = getFirestore();
        const itemsCollection = collection(db, 'items');
        let firebaseProducts = [];
        await getDocs(itemsCollection).then( (snapshot) => {
            // Set the 
            firebaseProducts = (snapshot.docs.map( (doc) => ({id : doc.id, ...doc.data()})));
        })
        return firebaseProducts;
    }

    async function presentProducts() {
        setProducts([])
        let products = await getProducts()
        setProducts(filterProducts(products))
    }

    useEffect(() => {
        // Get Items form the Firebase
        presentProducts()
    }, [categoryId, pathname])
    
    return (
        <div>
            <p className = 'white-text'> This is an Item List Container </p>
            {products.length === 0 ? 
            <p className = 'white-text'> Loading ...</p>    
            :
            <div className = 'div-centered'>
                <ItemList items = {products}/> 
            </div>
        }
        </div>
    )
    }

export default ItemListContainer