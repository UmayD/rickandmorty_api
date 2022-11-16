import { useEffect, useState } from "react";
import axios from "axios";

function Characters() {

    const [character, setChars] = useState([]);
    const randNumber = Math.floor(Math.random() * 826);    

    const baseurl = "https://rickandmortyapi.com/api/character/";
    let randomUrl = baseurl + randNumber;

    useEffect(() => {
        axios.get(randomUrl)
        .then((res) => setChars(res.data));
    }, []);

    console.log(character);

    return (
        <div class="main_page">
            <h1>Characters</h1>
            <div class="char_card">
                <img class="char_img" src={character.image} alt={character.name}></img>
                
                <div class="char_info">
                    <section class="card_section">
                        <div class="char_name">
                            {character.name}
                        </div>

                        <div class="char_status">
                            {character.status} - {character.species}
                        </div>
                    </section>


                </div>

            </div>

            <br></br>

            <button >Random Character</button>
        </div>
    );
}

export default Characters;