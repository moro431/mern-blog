
import { errorHandler } from '../../utils/error.js';
import User from '../models/user.model.js'
import bcryptjs from 'bcryptjs'


export const signup = async (req,res,next) =>{
    //console.log(req.body);
    const {username,email,password} = req.body;
    
    if(!username || !email || !password || username === '' || email === '' || password  === ''){
        next(errorHandler(400,'ALl fiels are required'))
    }
   
    const hash = await bcryptjs.hashSync(password,10)

    const newUser = new User({
        username,
        email,
        password:hash
    })

   try {
    await newUser.save();
    res.json('Signup Successful')
   } catch (error) {
     next(error)
   }
  };