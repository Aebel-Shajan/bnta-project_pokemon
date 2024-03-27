import { useState } from "react";

const PokemonForm = ({ handleForm, types }) => {
    const [search, setSearch] = useState("");
    const [typeFilter, setTypeFilter] = useState("not-chosen");

    const filterOptions = types.map((type) => {
        return <option value={type}>{type}</option>
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        handleForm(search.toLowerCase(), typeFilter);
    }


    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Seach Pokemon.."
                value={search}
                onChange={(event) => setSearch(event.target.value)}
            />
            <select
                defaultValue="all-types"
                onChange={(event) => setTypeFilter(event.target.value)}
            >
                <option value="all-types">all types</option>
                {filterOptions}
            </select>
            <input type="submit" value="Search" />
        </form>

    );
}

export default PokemonForm;