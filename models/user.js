const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50,
        trim: true,
    },
    username: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 30,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 60,
        trim: true,
    }
})

module.exports = mongoose.model("User", UserSchema);