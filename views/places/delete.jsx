const React = require('react');
const Def = require('../default');

function DeletePage(props) {
    const place = props.place;

    return (
        <Def>
            <main>
                <h1>Delete {place.name}</h1>
                <div className="place-details">
                    <h2>{place.name}</h2>
                    <img className="place-image" src={place.pic} alt={place.name} />
                    <p><strong>Location:</strong> {place.city}, {place.state}</p>
                    <p><strong>Cuisines:</strong> {place.cuisines.join(", ")}</p>
                </div>
                <form method="POST" action={`/places/${props.id}?_method=DELETE`}>
                    <button type="submit" className="btn btn-danger">
                        Delete
                    </button>
                </form>
            </main>
        </Def>
    );
}

module.exports = DeletePage;
