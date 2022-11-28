import { useEffect, useState } from "react";
import axios from "axios";
import Character from "./Character";

function Characters() {

    const [character, setCharacter] = useState([]);
    const [characters, setCharacters] = useState([]);
    const [randNumber, setRandNumber] = useState(Math.floor(Math.random() * 826));
    
    const getCharacter = () => {
        axios.get("https://rickandmortyapi.com/api/character/" + randNumber)
            .then((res) => setCharacter(res.data));
    }

    const getCharacters = (page = 0) => {
        axios.get("https://rickandmortyapi.com/api/character")
            .then((res) => setCharacters(res.data.results));
    }

    useEffect(() => {
        getCharacter();
    }, [randNumber]);

    useEffect(() => {
        getCharacters();
    }, [])
    
    return (
        <div className="main_page">
            <h1>Character</h1>
            <Character
                name={character.name}
                image={character.image}
                status={character.status}
                species={character.species}
            />
            <br></br>

            <button onClick={() => setRandNumber(Math.floor(Math.random() * 826))}>Random Character</button>



            <h1>Characters</h1>

            {characters.map(character => (
                <Character
                    key={character.id}
                    name={character.name}
                    image={character.image}
                    status={character.status}
                    species={character.species}
                />
            ))}

        </div>
    );
}

export default Characters;