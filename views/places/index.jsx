const React = require('react')
const Def = require('../default')

function index(data) {
    let placesFormatted = data.places.map((place, index) => {
        return (
            <div className="col-sm-6" key={index}>
                <h2 className="text-center">{place.name}</h2>
                <p className="text-center">
                    {place.cuisines}
                </p>
                <div className="d-block" style={{ width: '80%', height: 'auto', margin: '0 auto' }}>
                    <img src={place.pic} alt={place.name} className="img-fluid" />
                </div>
                <p className="text-center">Located in {place.city}, {place.state}</p>
            </div>
        )
    })




    return (
        <Def>
            <main>
                <h1>Places to Rave about</h1>
                <div className="row">
                    {placesFormatted}
                </div>
            </main>
        </Def>
    )
}



module.exports = index
