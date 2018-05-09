let express = require('express');
let router = express.Router();
let bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
let Application = require('../Models/Application');
const { check, validationResult } = require('express-validator/check');
const { matchedData } = require('express-validator/filter');

router.get('/new', function(req, res) {
    res.render('applicant_form', {title: 'Applicant Information'});
});

router.post('/new', [
    check('salutation').isIn(['Mr', 'Ms', 'Miss', 'Mrs']),
    check('name').not().isEmpty().withMessage('name cannot be empty'),
    check('country').not().isEmpty().withMessage('country cannot be empty'),
    check('gender').isIn(['M', 'F'])
       ], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).send('Check your input format and try again');
    }
    const application = matchedData(req);
    Application.create(application).then(application => res.status(200).send('Congratulations! Your citizen ID is: ' + application["_id"]));
});


router.get('/', function (req, res) {
    Application.find({}, function (err, applications) {
        if (err) throw err;//return res.status(500).send("There was a problem finding the applicatons.");
        res.status(200).send(applications);
    });
});
module.exports = router;
