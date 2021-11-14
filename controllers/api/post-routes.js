const router = require('express').Router();
const { Post } = require('../../models');
const withAuth = require('../../utils/auth');

// CREATE new user
router.post('/', withAuth, async (req, res) => {
    const body = req.body
    try {
        const newPost = await Post.create({ ...body, user_id: req.session.user_id});
        res.json(newPost);


    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});


router.put('/:id', withAuth, async (req, res) => {
    try {
        const [affectedRows] = await Post.update(req.body, {
            where: {
                id: req.params.id,
            },
        });

        if (affectedRows > 0) {
            res
                .status(200).end();
        } else {
            res.status(404).end();
        }

        // const validPassword = await dbUserData.checkPassword(req.body.password);

        // if (!validPassword) {
        //     res
        //         .status(400)
        //         .json({ message: 'Incorrect email or password. Please try again!' });
        //     return;
        // }

        // // Once the user successfully logs in, set up the sessions variable 'loggedIn'
        // req.session.save(() => {
        //     req.session.loggedIn = true;

        //     res
        //         .status(200)
        //         .json({ user: dbUserData, message: 'You are now logged in!' });
        // });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.delete('/:id', withAuth, async (req, res) => {
    try {
        const [affectedRows] = Post.destroy( {
            where: {
                id: req.params.id,
            },
        });

        if (affectedRows > 0) {
            res
                .status(200).end();
        } else {
            res.status(404).end();
        }

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;
