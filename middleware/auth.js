const jwt = require('jsonwebtoken');


const authMiddleware = (request, response, next)=> {
    const authHeader = request.headers.authorization;
    if(!authHeader) throw new Error;
    if(!authHeader.startsWith('Bearer ')) throw new Error;
    const token = authHeader.split(' ')[1];
    const SECRET = process.env.JWT_SECRET;

    try{
        const decoded = jwt.verify(token, SECRET);
        const {username, id} = decoded;
        request.user = {username, id};
        next();
    }
    catch(error) {
        console.error(error);
        throw new Error;
    };
};

module.exports = authMiddleware;