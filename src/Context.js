import React, {useState , useEffect} from 'react'
import axios from 'axios';

const Context = React.createContext()


function ContextProvider({children}){
const [allPhotos, setAllPhotos] = useState([])

useEffect(() => {
    getAllPhotos()
}, [])

const getAllPhotos = async () => {
    try {
    const resp = await axios.get('https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json')
    setAllPhotos(resp.data)
    }
    catch(err){
        console.log(err)
    }
}

    return (
        <Context.Provider value={{allPhotos}}>
            {children}
        </Context.Provider>
    )
}



export { ContextProvider, Context} 


//  try {
//       const resp = await axios.get(`/everything`);
//       // setintialSkierList(resp.data)
//       setintialSkierList(resp.data.filter((skier, index) => skier.id !== userId))

//     } catch (err) {
//       // Handle Error Here
//       console.error(err);
//     }