import React from 'react';
import './List.css';

export default function List() {
    const songs = [
        "intro (end of the world)",
        "bye",
        "don’t wanna breakup again",
        "Saturn Returns Interlude",
        "eternal sunshine",
        "supernatural",
        "true story",
        "the boy is mine",
        "yes, and?",
        "we can’t be friends (wait for your love)",
        "i wish i hated you",
        "imperfect for you",
        "ordinary things (feat nonna)"
      ];
      

    return (
        <section className='List'>
            <div className="headingp">
                <h2 className='cfff'>tracklist</h2>
            </div>
            <div className="list dircol">
                {
                    songs.map((item, index) => (
                        <div className='t'>{index + 1}. {item}</div>
                    ))
                }
            </div>
        </section>
    )
}
