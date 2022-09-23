const FoodLog = require('../model/foodLog')

const foodLog_index = (req, res) => {
    FoodLog.find().sort({createAt: -1})
        .then(result => {
            res.render('foodLog/IndexFood', {foodLogs: result})
        })
        .catch(err => {
            console.log(err);
        })
}

const foodLog_new = (req, res) => {
    res.render('foodLog/NewFood')
}

const foodLog_get_edit = (req, res) => {
    const { foodId } = req.params;
    FoodLog.findById(foodId)
        .then(result => {
            res.render('foodLog/EditComment', { foodLog: result})
        })
        .catch(err => {
            console.log(err);
        })
}

const foodLog_get_details = (req, res) => {
    const { foodId } = req.params;
    FoodLog.findById(foodId)
        .then(result => {
            res.render('foodLog/FoodShow', { foodLog: result })
        })
        .catch(err => {
            console.log(err);
            res.render('NotFound')
        })
}

const foodLog_create = (req, res) => {
    const foodLog = new FoodLog(req.body);
    foodLog.save()
        .then((result) => {
            res.redirect('/foodlogs')
        })
        .catch(err => {
            console.log(err);
        })
}

const foodLog_post_edit = (req, res) => {
    const { foodId } = req.params
    FoodLog.findByIdAndUpdate(foodId, req.body)
        .then((result) => {
            res.redirect(`/foodlogs/${foodId}`)
        })
        .catch(err => {
            console.log(err);
        })
}

const foodLog_delete = (req, res) => {
    const { foodId } = req.params
    FoodLog.findByIdAndDelete(foodId)
        .then(() => {
            res.redirect('/foodlogs')
        })
        .catch(err => {
            console.log(err);
        })
}

module.exports = {
    foodLog_index,
    foodLog_new,
    foodLog_get_edit,
    foodLog_get_details,
    foodLog_create,
    foodLog_post_edit,
    foodLog_delete
}