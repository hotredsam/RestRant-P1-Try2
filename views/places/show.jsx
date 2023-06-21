const React = require('react');
const Def = require('../default');

function show(props) {
    const place = props.place;
    return (
        <Def>
            <main>
                <div className="place-details">
                    <h1>{place.name}</h1>
                    <img className="place-image" src={place.pic} alt={place.name} />
                    <h3>
                        Located in {place.cty}, {place.state}
                    </h3>
                    <p><strong>Cuisines:</strong> {Array.isArray(place.cuisines) ? place.cuisines.join(", ") : place.cuisines}</p>
                </div>
                <div className="place-rating">
                    <h2>Rating</h2>
                    <p>Currently unrated.</p>
                </div>

                <h3>
                    {place.showEstablished()}
                </h3>
                <h4>
                    Serving {place.cuisines}
                </h4>
                <div className="place-comments">
                    <h2>Comments</h2>
                    <p>No comments yet!</p>
                </div>
                <a href={`/places/${props.id}/edit`} className="btn btn-warning">
                    Edit
                </a>

                <form method="POST" action={`/places/${props.id}?_method=DELETE`}>
                    <button type="submit" className="btn btn-danger">
                        Delete
                    </button>
                </form>




            </main>
        </Def>
    )
}

module.exports = show;
