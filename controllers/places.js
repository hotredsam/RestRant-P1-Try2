const router = require('express').Router()

// GET /places/new
router.get('/new', (req, res) => {
    // Render your new form view here
    res.render('places/new')
})

// GET /places
router.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/exampleRest2.jpg'
    }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/exampleRest2.jpg'
    }]

    res.render('places/index', { places: places })
})

// In future you would need to add a GET /places/:id route
// Make sure to place it after GET /places/new
// POST /places
router.post('/', (req, res) => {
    res.send('POST /places stub')
})


module.exports = router
