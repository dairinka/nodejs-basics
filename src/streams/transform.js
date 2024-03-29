import { pipeline } from 'node:stream/promises';
import { stdin, stdout } from "node:process";
import {createWriteStream} from "node:fs"
import { Transform } from 'node:stream';

const transform = async () => {
    const reverse = new Transform({
        transform(chank, encoding, callback){
            callback(null, String(chank).split('').reverse().join('').replace(/(\w)$/, `$1\n` ));
        }
    })
    console.log('>> Hi there! You are in a magic file.');
    console.log('Everything you write will appear in reverse order.');
    console.log('Try now. For exit, please press Ctrl + C<<');

    process.on('SIGINT', () => {
        console.log('Nice try')
        process.exit(0);
    })

    try{
        await pipeline(
            stdin,
            reverse,
            stdout
        )
    } catch {
        throw Error('Something went wrong. Contact to developer ;)')
    }
};

await transform();