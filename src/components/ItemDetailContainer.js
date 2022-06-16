import ItemDetail from './ItemDetail.js';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom"
import db from '../utils/firebaseConfig.js';
import {getDoc, doc } from 'firebase/firestore';
const ItemDetailContainer = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [cookies , setCookies] = useState({})
    useEffect(()=>{
        getCookies().then((res) => {
            if (res === undefined){
                navigate("/")
            } else {
                setCookies(res)
            }
        })
    },[])
    const data = {...cookies, id}
    const getCookies = async()=> {
        const docRef = doc(db, "cookies", id);
        const docSnap = await getDoc(docRef);
        return docSnap.data()
}       
    return(
        <ItemDetail props={data} />
    ) 
}
export default ItemDetailContainer;