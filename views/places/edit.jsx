const React = require('react');
const Def = require('../default');

function EditPage(props) {
    const place = props.place;

    return (
        <Def>
            <main>
                <h1>Edit {place.name}</h1>
                <div className="place-details">
                    <form method="POST" action={`/places/${props.id}?_method=PUT`}>
                        <div className="form-group">
                            <label>Name:</label>
                            <input type="text" name="name" defaultValue={place.name} />
                        </div>
                        <div className="form-group">
                            <label>Picture URL:</label>
                            <input type="text" name="pic" defaultValue={place.pic} />
                        </div>
                        <div className="form-group">
                            <label>City:</label>
                            <input type="text" name="city" defaultValue={place.city} />
                        </div>
                        <div className="form-group">
                            <label>State:</label>
                            <input type="text" name="state" defaultValue={place.state} />
                        </div>
                        <div className="form-group">
                            <label>Cuisines:</label>
                            <input
                                type="text"
                                name="cuisines"
                                defaultValue={place.cuisines.join(", ")}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Save
                        </button>
                    </form>
                </div>
            </main>
        </Def>
    );
}

module.exports = EditPage;
