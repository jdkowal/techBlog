const router = require('express').Router();
const withAuth = require('../utils/auth');

router.get('/:id', withAuth, async (req, res)=> {
    
res.render('homepage', { argument , user_id: req.session.user_id, logged_in: req.session.logged_in})

});

// get routes are gonna go to all posts, all posts admin, dashboard and main and single post 

router.post()//edit and new posts are gonna need to have a post route 

router.put()//going to need to put to edit posts 







module.exports = router;