// Write your Character component here
import axios from "axios"
import Cards from "./Cards"

const Characters = props => {
    const [characters, setCharacters] = useState([]);
}
useEffect(() => { axios.get(https://rickandmortyapi.com/)
.then(res => {
  console.log(res.data);
  setCharacter(res.data.results);
})
.catch(error => {
    console.log("M m m Morty, there's something wrong Morty!");
});
},[])