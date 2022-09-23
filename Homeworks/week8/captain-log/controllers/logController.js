const Log = require('../model/logs')

const log_index = (req, res) => {
    Log.find().sort({createdAt: -1})
        .then((result) => {
            res.render('captainLog/Index', {logs: result})
        })
        .catch(err => {
            console.log(err);
        })
}

const log_new = (req, res) => {
    res.render('captainLog/New') 
}

const log_get_edit = (req, res) => {
    const { id } = req.params;
    Log.findById(id)
        .then((result) => {
            res.render('captainLog/Edit', {log: result})
        })
        .catch((err) => {
            console.log(err);
        })
}

const log_get_details = (req, res) => {
    const { id } = req.params;
    Log.findById(id)
        .then(result => {
            res.render('captainLog/Show', {log: result})
        })
        .catch(err => {
            console.log(err);
            res.render('NotFound')
        })
}

const log_create = (req, res) => {
    // toggle isBroken to boolean
    if (req.body.isBroken === 'on') {
        req.body.isBroken = true;
    } else {
        req.body.isBroken = false;
    }
    const log = new Log(req.body);
    log.save()
        .then(result => {
            res.redirect('/logs')
        })
        .catch(err => {console.log(err);})
}

const log_post_edit = (req, res) => {
    if (req.body.isBroken === "on") {
        req.body.isBroken = true;
      } else {
        req.body.isBroken = false;
    }
    const { id } = req.params
    Log.findByIdAndUpdate(id, req.body)
        .then((result) => {
            res.redirect(`/logs/${id}`)
        })
        .catch(err => {
            console.log(err);
        })
}

const log_delete = (req, res) => {
    const { id } = req.params
    Log.findByIdAndDelete(id)
        .then(result => {
            res.redirect('/logs')
        })
        .catch(err => {
            console.log(err);
        })
}


module.exports = {
    log_index,
    log_new,
    log_get_edit,
    log_get_details,
    log_create,
    log_post_edit,
    log_delete
}