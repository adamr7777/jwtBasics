const jwt = require('jsonwebtoken');

const dashboard = async (request, response)=> {
    const num = Math.floor(Math.random() * 100);
    response.status(200).json({msg: request.user.username, secret: `your number is ${num}`});
};

const login = async (request, response)=> {
    const {username, password} = request.body;
    if(!username || !password) throw new Error();

    const token = jwt.sign({username, id: new Date}, process.env.JWT_SECRET, {expiresIn: '30d'});
    // console.log(token);
    response.status(200).json({success: true, token});
};

module.exports = {dashboard, login};