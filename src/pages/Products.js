import ItemList from '../components/ItemList.js';
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import db from '../utils/firebaseConfig.js';
import { query, collection, where, getDocs } from 'firebase/firestore';
const Products =() =>{
    const [cookies, setCookies] = useState([])
    const { category } = useParams()

    useEffect( () => {
        const itemCollection=query(collection(db, "cookies"), where("category", "==", category))
        getDocs(itemCollection).then((snapshot)=>{
            setCookies(snapshot.docs.map((doc)=>({id:doc.id, ...doc.data()})))
        })
    }, [category])
    return (
        <ItemList data={cookies}/>
    )
}
export default Products;