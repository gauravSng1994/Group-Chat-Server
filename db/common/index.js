import mongoose from "mongoose";
import chalk from "chalk";
class MongoDb {

    register(name,schema){
        console.log(chalk.yellow("SUCCESS MODEL REGISTRATION : "), chalk.green(`${name}`));
        return mongoose.model(name,schema);
    }
}
export default MongoDb;
