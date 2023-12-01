const dbclient = require('../utils/databaseutills')
const mongoose = require('mongoose');
const User = require('../model/Users');





async function createUser(user){
    try{
        const client = await dbclient.getdbClient();
        
        const newuser = new User(user);
        await newuser.save();
        console.log('User saved to the database:', newUser);
        await client.close();
        return newuser;

    }
    catch(error){
        throw new Error(` Error Occured ${error}`);
    }
    
}

async function getUser(userid){
    try{
        const client = await dbclient.getdbClient();

        const Guser = User.findOne({userid});
        await client.close();
        return Guser;
        
    }
    catch(error){
        throw new Error(` Error Occured ${error}`);
    }
}

module.exports = {createUser,getUser};