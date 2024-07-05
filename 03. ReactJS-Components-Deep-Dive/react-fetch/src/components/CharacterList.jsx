import { useEffect, useState } from "react";

const baseUrl = 'http://swapi.dev/api';

export default function CharacterList() {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        async function fetchCharacters(){
            const  responce = await fetch(baseUrl + `/people`);
            const result = await responce.json();

            setCharacters(result.results);


        }

        fetchCharacters();
    }, [])

    return (
        <>
            <h2>Characters</h2>
            <ul>
                {characters.map(character => <li key={character.name}>{character.name}</li> )}
            </ul>
        </>
    )
}
