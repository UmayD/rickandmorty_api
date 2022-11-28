import React from 'react';

function Character({name, image, status, species}) {
    return (
        <div className="char_card">
            <img className="char_img" src={image} alt={name}></img>

            <div className="char_info">
                <section className="card_section">
                    <div className="char_name">
                        {name}
                    </div>

                    <div className="char_status">
                        {status} - {species}
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Character;