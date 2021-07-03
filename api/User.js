
export const getUserById = async (req,res)=>{
    const {id} = req.params;
    const user = await _db.User.findOne({_id:id}).lean();
    res.json(user);
}

export default {
    getUserById
}
