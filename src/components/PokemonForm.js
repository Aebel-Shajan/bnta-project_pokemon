import {useState} from "react";

const PokemonForm = (event) => {
   const [search, setSearch] = useState("");
    
    const handleChange = (event) => {
        setSearch(event.target.value)
    }

    const handleSubmit = (event) => {
        
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