const mongoose = require('mongoose')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const saltRounds = 10;
const User = mongoose.model('User');

exports.registerUser = (req, res) => {

    var email = req.body.user.email;
    var username = req.body.user.username;
    var password = req.body.user.password;

    if(username.length < 3 || username.length > 30) {
        return res.status(400).send({
            message: 'Invalid Username.'
        }).end()
    } else if(email.length < 3 || email.length > 50) {
        return res.status(400).send({
            message: 'Invalid Email.'
        }).end()
    } else {

        User.findOne({
            username: username
        }, function(error, user) {
            if(error) throw error;
    
            if(user) {
                return res.status(400).send({
                    message: 'Username Taken',
                    taken: true
                }).end()
            } else {

                bcrypt.hash(password, saltRounds, function(err, hash) {
                    var newUser = new User({
                        email: email,
                        username: username,
                        password: hash
                    })
            
                    newUser.save(function (err, user) {
                        if (err) return console.error(err);
            
                        return res.status(200).send({
                            message: 'Ok'
                        }).end()
                    }); 
                });
            }
        })
    }
}

exports.loginUser = (req, res) => {

    var email = req.body.user.email;
    var password = req.body.user.password;

    User.findOne({
        email: email
    }, function(error, user) {
        if(error) throw error;

        if(user) {
            bcrypt.compare(password, user.password, function(err, result) {
                if(result) {

                    let token = jwt.sign({
                        username: user.username
                    }, 
                        process.env.JWT_KEY, {
                            expiresIn: "15d", 
                            algorithm: "HS256"
                        }
                    );

                    return res.send({token: token})
                }
                else {  
                    return res.status(400).send({
                        message: 'Invalid Credentials',
                        invalidCredentials: true
                    }).end()
                }
            });
        } else {
            return res.status(400).send({
                message: 'Invalid Credentials',
                invalidCredentials: true
            }).end()
        }
    })
}