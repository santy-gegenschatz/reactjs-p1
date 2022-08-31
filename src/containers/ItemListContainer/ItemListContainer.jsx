import React from 'react'
import ItemList from '../../components/ItemList/ItemList'
import { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';

const ItemListContainer = () => {
    // We get the info from the route and the url params to decide what to look for.
    const { pathname } = useLocation();
    const { categoryId } = useParams();

    // An array of products to show. When it changes a hook will update the rendering.
    let [products, setProducts] = useState([]);

    function createQuery(itemsCollection) {
        let q;
        switch (pathname) {
            case ('/'):
                console.log("a");
                q = itemsCollection;
                break;
            case('/categories/' + categoryId):
            console.log("b");
                q = query(itemsCollection,
                    where('category', '==', categoryId)
                    );
                break;
            case ('/newSeason'):
                q = query(itemsCollection,
                    where('newSeason', '==', true)
                    );
                break;
            default:
                q =  itemsCollection;
                break;
    }
    return q;
}

    function getProducts() {
        setProducts([]);
        // Initialize the client and create the collection to be accessed
        const db = getFirestore();
        const itemsCollection = collection(db, 'items');
        // Depending on the route & params the query to Firebase will be different
        // The createQuery function handles this process, in line with the KISS principle of the U.S. Navy
        const productsQuery = createQuery(itemsCollection);
        let firebaseProducts = [];
        getDocs(productsQuery).then( (snapshot) => {
            // Set the array with the products
            firebaseProducts = (snapshot.docs.map( (doc) => ({id : doc.id, ...doc.data()})));
            // Update the state
            setProducts(firebaseProducts)
        })
        
    }

    useEffect(() => {
        // Get Items from the Firebase
        getProducts();
    }, [categoryId, pathname])
    
    return (
        <div>
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