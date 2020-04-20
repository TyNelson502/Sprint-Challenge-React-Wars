// Write your Character component here
import axios from "axios"
import Cards from "./Cards"

const Characters = props => {
    const [characters, setCharacters] = useState([]);
}
useEffect(() => { 
    axios.get("http://rickandmortyapi.com/")
        .then(res => {
        console.log(res);
        setCharacters(res.data.results);    
})
.catch(error => {
    console.log("M m m Morty, there's something wrong Morty!", {error});
}));
},[])