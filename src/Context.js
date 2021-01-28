import React, {useState , useEffect} from 'react'
import axios from 'axios';

const Context = React.createContext()


function ContextProvider({children}){
const [allPhotos, setAllPhotos] = useState([])

const toggleFavorite = (id) => {
    const updatedArr = allPhotos.map(photo => {
            if(photo.id === id) {
                return {
                    ...photo,
                    isFavorite: !photo.isFavorite
                }
            }
            return photo
        })
    setAllPhotos(updatedArr)
}

 


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
        <Context.Provider value={{allPhotos, toggleFavorite}} toggleFavorite={toggleFavorite}>
            {children}
        </Context.Provider>
    )
}



export { ContextProvider, Context} 
