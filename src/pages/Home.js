import ItemList from '../components/ItemList';
import { useState, useEffect } from 'react';
import { collection, getDocs} from 'firebase/firestore';
import db from '../utils/firebaseConfig';
import { Typography } from '@mui/material';
//Componente home. Se visualiza al acceder al sitio. Muestra todos los artículos del sitio. Los obtiene de Firebase
const Home =() =>{
    const [cookies, setCookies] = useState([])
    useEffect( () => {
        const itemCollection=collection(db, "cookies")
        getDocs(itemCollection).then((snapshot)=>{
            setCookies(snapshot.docs.map((doc)=>({id:doc.id, ...doc.data()})))
        })
    }, [])
    return (
        <div className="Cards">
        <Typography variant="h2">Productos destacados</Typography>
        <ItemList data={cookies}/>
        </div>
    )
}
export default Home;