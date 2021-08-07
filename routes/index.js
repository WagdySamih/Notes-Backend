const { Router } = require('express');

const router = Router({ mergeParams: true });

router.use('/notes', require('./notes/notes'));

module.exports = router;