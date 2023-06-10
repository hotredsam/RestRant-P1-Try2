const router = require('express').Router()

// // GET /places
// router.get('/', (req, res) => {
//     res.render('places/index')
// })

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

module.exports = router