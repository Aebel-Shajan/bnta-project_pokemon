import {useState} from "react";
import './Pokemon.css';

const PokemonForm = ({handleSearch}) => {
   const [search, setSearch] = useState("");
    
    const handleChange = (event) => {
        setSearch(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        handleSearch(search.toLowerCase());
    }

  


    return ( 
    <form onSubmit={handleSubmit}>
        <input
        type = "text"
        placeholder="Seach Pokemon.."
        value={search}
        onChange={handleChange}
        />
        <input type="submit" value="Search" />
    </form>
    
    );
}
 
export default PokemonForm;