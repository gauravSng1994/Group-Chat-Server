import {EventEmitter} from 'events';
import chalk from "chalk";

export const InitialisationEmitter = new EventEmitter();

InitialisationEmitter.on('processing',(process,finished=false)=>{
    if(!finished) console.log(chalk.blue(`################ ${process} began ################`));
    else console.log(chalk.green(`################ ${process} finished ################ `));
})

export default {
    InitialisationEmitter
};
