const React = require('react');
const Def = require('../default.jsx');

function edit_form(data) {
    const { place } = data; // Destructure the 'place' object from 'data'

    return (
        <Def>
            <main>
                <h1>Edit Place</h1>
                <form method="POST" action={`/places/${data.id}?_method=PUT`}>

                    <div className="row">
                        <div className="form-group col-sm-6">
                            <label htmlFor="name">Place Name</label>
                            <input
                                className="form-control"
                                id="name"
                                name="name"
                                value={place.name} // Pre-populate with place.name
                                required
                            />
                        </div>
                        <div className="form-group col-sm-6">
                            <label htmlFor="pic">Place Picture</label>
                            <input
                                className="form-control"
                                id="pic"
                                name="pic"
                                value={place.pic} // Pre-populate with place.pic
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-sm-6">
                            <label htmlFor="city">City</label>
                            <input
                                className="form-control"
                                id="city"
                                name="city"
                                value={place.city} // Pre-populate with place.city
                            />
                        </div>
                        <div className="form-group col-sm-6">
                            <label htmlFor="state">State</label>
                            <input
                                className="form-control"
                                id="state"
                                name="state"
                                value={place.state} // Pre-populate with place.state
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="cuisines">Cuisines</label>
                        <input
                            className="form-control"
                            id="cuisines"
                            name="cuisines"
                            placeholder="Enter cuisines separated by commas"
                            required
                            value={Array.isArray(place.cuisines) ? place.cuisines.join(', ') : place.cuisines} // Pre-populate with place.cuisines
                        />
                    </div>

                    <input className="btn btn-primary" type="submit" value="Edit place" />
                </form>
            </main>
        </Def>
    );
}

module.exports = edit_form;
