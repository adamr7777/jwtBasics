const jwt = require('jsonwebtoken');

const dashboard = async (request, response)=> {
    const num = Math.floor(Math.random() * 100);
    response.status(200).json({message: 'John Donne', secret: `your number is ${num}`});
};

const login = async (request, response)=> {
    const {name, password} = request.body;
    if(!name || !password) throw new Error();

    const token = jwt.sign({name, id: 12343544534}, process.env.JWT_SECRET, {expiresIn: '30d'});

    response.status(200).json({success: true, token});
};

module.exports = {dashboard, login};