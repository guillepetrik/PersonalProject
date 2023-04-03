const { pitModel } = require('../Models/pit.model');

module.exports.createPit = (request, response) => {
    const { name, type, dpt, lat, lng, createdBy } = request.body;
    pitModel.create({
        name,
        type,
        dpt,
        lat,
        lng,
        createdBy
    })
        .then(pit => response.json(pit))
        .catch(err => {
            response.status(400)
            response.json(err)
        });
}
module.exports.getAllPit = (request, response) => {
    pitModel.find({})
        .then(pit => response.json(pit))
        .catch(err => response.json(err))
}
module.exports.getPitsByEmail = async (req, res) => {
    const { email } = req.query || req.body;
    try {
        const pit = await pitModel.find({ createdBy: email });
        res.json(pit);
    } catch (err) {
        res.json(err);
    }
};
module.exports.getPit = (request, response) => {
    pitModel.findOne({ _id: request.params.id })
        .then(pit => response.json(pit))
        .catch(err => response.json(err))
}
module.exports.updatePit = (request, response) => {
    pitModel.findOneAndUpdate({ _id: request.params.id }, request.body, { new: true })
        .then(updatedPit => response.json(updatedPit))
        .catch(err => response.json(err))
}

module.exports.deletePit = async (request, response) => {
    try {
        const pit = await pitModel.deleteOne({ _id: request.params.id })
        response.json(pit);
    } catch (err) {
        response.status(400);
        response.json(err);
    }
}