const React = require('react');
const Def = require('../default');

function show(data) {
    let comments = (
        <h3 className="inactive">
            No comments yet!
        </h3>
    )
    if (data.place.comments.length) {
        comments = data.place.comments.map(c => {
            return (
                <div className="border">
                    <h2 className="rant">{c.rant ? 'Rant! ðŸ˜¡' : 'Rave! ðŸ˜»'}</h2>
                    <h4>{c.content}</h4>
                    <h3>
                        <stong>- {c.author}</stong>
                    </h3>
                    <h4>Rating: {c.stars}</h4>
                </div>
            )
        })
    }

    const place = data.place; // Defined here

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
                    {comments}
                </div>
                <a href={`/places/${place.id}/edit`} className="btn btn-warning">  {/* place.id instead of props.id */}
                    Edit
                </a>

                <form method="POST" action={`/places/${place.id}?_method=DELETE`}>  {/* place.id instead of props.id */}
                    <button type="submit" className="btn btn-danger">
                        Delete
                    </button>
                </form>
                <div className="comment-form">
                    <h2>Add Comment</h2>
                    <form action={`/places/${place.id}/rant`} method="POST">
                        <div class="form-group">
                            <label for="author">Author:</label>
                            <input type="text" id="author" name="author" class="form-control" required />
                        </div>

                        <div class="form-group">
                            <label for="content">Content:</label>
                            <textarea id="content" name="content" class="form-control" required></textarea>
                        </div>

                        <div class="form-group">
                            <label for="stars">Star Rating:</label>
                            <input type="number" id="stars" name="stars" min="0" max="5" step="0.5" class="form-control" required />
                        </div>

                        <div class="form-group form-check">
                            <input type="checkbox" id="rant" name="rant" class="form-check-input" />
                            <label class="form-check-label" for="rant">Rant</label>
                        </div>

                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
            </main>
        </Def>
    )
}

module.exports = show
