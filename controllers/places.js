const router = require('express').Router()
const places = require('../models/places.js')

// GET /places/new
router.get('/new', (req, res) => {
    // Render your new form view here
    res.render('places/new')
})

// GET /places
router.get('/', (req, res) => {
    res.render('places/index', { places })
})

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
    places.push(req.body)
    res.redirect('/places')
})

module.exports = router
