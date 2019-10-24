const mongoose = require("mongoose");

const warnSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    action: String,
    username: String,
    userID: String,
    reason: String,
    doneBy: String,
    time: String,
    caseID: String,
    serverID: String
});

module.exports = mongoose.model("ModAction", warnSchema);
