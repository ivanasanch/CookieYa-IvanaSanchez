import ItemList from '../components/ItemList';
import { useState, useEffect } from 'react';
import { collection, getDocs} from 'firebase/firestore';
import db from '../utils/firebaseConfig';

const Home =() =>{
    const [cookies, setCookies] = useState([])
    useEffect( () => {
        const itemCollection=collection(db, "cookies")
        getDocs(itemCollection).then((snapshot)=>{
            setCookies(snapshot.docs.map((doc)=>({id:doc.id, ...doc.data()})))
        })
    }, [])
    return (
        <ItemList data={cookies}/>
    )
}
export default Home;