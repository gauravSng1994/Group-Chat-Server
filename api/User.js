import Joi from 'joi';
export const getUserById = async (req,res)=>{
    const {id} = req.params;
    const user = await _db.User.findOne({_id:id}).lean();
    res.json(user);
}
export const createUser = async (req,res) => {
    const schema = Joi.object({
        firstName : Joi.string().required().trim(),
        lastName : Joi.string().required().trim(),
        email : Joi.string().email({minDomainSegments: 2, tlds: { allow: ['com', 'net'] }}).trim(),
        mobile : Joi.number(),
        age : Joi.number(),
        gender : Joi.string().trim(),
        password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
        confirmPassword: Joi.ref('password'),
    });
    try {
        const {firstName,lastName,email,mobile,age,gender,password,confirmPassword} = await schema.validateAsync(req.body);
        let user = await _db.User.findOne({$or:[{email},{mobile}]}).lean();
        if(user) return res.status(400).json({err:"User already exist with given email or mobile."});
        user = new _db.User({firstName,lastName,email,mobile,age,gender});
        await user.save();
        return res.status(200).json({
            err:null,
            message:"User created",
            data:{
                user_id: user._id
            }
        });
    }catch (e) {
        console.log("Error",e);
        res.status(400).json(e);
    }
}
export default {
    getUserById,
    createUser
}
