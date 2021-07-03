import {MALE, FEMALE, OTHER} from "../../constants/user";
import MongoDb from "../common";
class User extends MongoDb{
    constructor() {
        super();
        this.name = "User";
    }
    getName(){
        return this.name;
    }
    getSchema(){
        return {
            firstName: { type:String, required:true},
            lastName: { type:String },
            age: { type: Number },
            gender: { type: String, enum:[MALE,FEMALE,OTHER]},
            email: { type:String },
            mobile: { type:Number, required: true},
        }
    }
    register() {
        return super.register(this.name, this.getSchema());
    }
}

export default User;
