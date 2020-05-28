const jwt = require("jsonwebtoken");

module.exports  = (req, res) => {
    
    try {

        const token = req.get("Authorization");
        
        let decoded = jwt.verify(token, process.env.JWT_KEY);

        req.userData = decoded;

    } catch(error) {
        return res.status(401).send({
            message: 'Invalid Token'
        }).end();
    }
}