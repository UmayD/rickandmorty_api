import { useEffect, useState } from "react";
import axios from "axios";
import Character from "./Character";

function Characters() {

    const [character, setCharacter] = useState([]);
    const [characters, setCharacters] = useState([]);
    const [randNumber, setRandNumber] = useState(Math.floor(Math.random() * 826));
    const [pageNumber, setPageNumber] = useState(1);
    
    const getCharacter = () => {
        axios.get("https://rickandmortyapi.com/api/character/" + randNumber)
            .then((res) => setCharacter(res.data));
    }

    const getCharacters = (pageNumber) => {
        axios.get(`https://rickandmortyapi.com/api/character/?page=${pageNumber}`)
            .then((res) => setCharacters([...res.data.results]));
    }

    useEffect(() => {
        getCharacter();
    }, [randNumber]);

    useEffect(() => {
        getCharacters(pageNumber);
    }, [pageNumber])


    console.log(pageNumber);
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

            <div className="load_more_characters">
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

                {pageNumber > 1 && <button onClick={() => setPageNumber(pageNumber - 1)}>Prev.</button>}
                {pageNumber < 42 && <button onClick={() => setPageNumber(pageNumber + 1)}>Next</button>}
            </div>

        </div>
    );
}

export default Characters;