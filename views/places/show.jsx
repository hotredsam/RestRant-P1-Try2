const React = require('react');
const Def = require('../default');

function show(props) {
    const place = props.place;
    return (
        <Def>
            <main>
                <h1>{place.name}</h1>
                <p>{place.description}</p>
                {/* Display other properties of the place here */}
            </main>
        </Def>
    )
}

module.exports = show;
