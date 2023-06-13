const router = require('express').Router();
const places = require('../models/places.js');
const methodOverride = require('method-override');

// Add method override middleware
router.use(methodOverride('_method'));

// GET /places/new
router.get('/new', (req, res) => {
    // Render your new form view here
    res.render('places/new');
});

// GET /places
router.get('/', (req, res) => {
    res.render('places/index', { places });
});

router.get('/:id/edit', (req, res) => {
    let id = Number(req.params.id);
    if (isNaN(id)) {
        res.render('error404');
    } else if (!places[id]) {
        res.render('error404');
    } else {
        res.render('places/edit', { place: places[id], id });
    }
});

router.put('/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.render('error404')
    }
    else if (!places[id]) {
        res.render('error404')
    }
    else {
        // Dig into req.body and make sure data is valid
        if (!req.body.pic) {
            // Default image if one is not provided
            req.body.pic = 'http://placekitten.com/400/400'
        }
        if (!req.body.city) {
            req.body.city = 'Anytown'
        }
        if (!req.body.state) {
            req.body.state = 'USA'
        }

        // Save the new data into places[id]
        places[id] = req.body
        res.redirect(`/places/${id}`)
    }
})


router.get('/:id', (req, res) => {
    let id = Number(req.params.id);
    if (isNaN(id)) {
        res.render('error404');
    } else if (!places[id]) {
        res.render('error404');
    } else {
        res.render('places/show', { place: places[id], id });
    }
});

router.delete('/:id', (req, res) => {
    let id = Number(req.params.id);
    if (isNaN(id)) {
        res.render('error404');
    } else if (!places[id]) {
        res.render('error404');
    } else {
        // Delete the place from the array or database
        places.splice(id, 1);
        res.redirect('/places'); // Redirect to the places index page after deletion
    }
});





// In future you would need to add a GET /places/:id route
// Make sure to place it after GET /places/new
// POST /places
router.post('/', (req, res) => {
    console.log(req.body)
    if (!req.body.pic) {
        // Default image if one is not provided
        req.body.pic = 'http://placekitten.com/400/400'
    }
    if (!req.body.city) {
        req.body.city = 'Anytown'
    }
    if (!req.body.state) {
        req.body.state = 'USA'
    }
    // Split the cuisines string into an array
    req.body.cuisines = req.body.cuisines.split(',').map(cuisine => cuisine.trim());
    places.push(req.body)
    res.redirect('/places')
})


module.exports = router
