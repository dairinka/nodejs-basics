import { pipeline } from 'node:stream/promises';
import { stdout } from "node:process";
import { createReadStream } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { Transform } from 'node:stream';

const read = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const fileToRead = join(__dirname, 'files/fileToRead.txt');
   
   const addLineBreak = new Transform({
        transform(chank, encoding, callback){
            callback(null, String(chank).replace(/(\w)$/, `$1\n` ));
        }
    })
    try {
        await pipeline(createReadStream(fileToRead), addLineBreak, stdout);
     } catch {
        throw Error("Oops! Something went wrong. Please contact to developer :)");
    }
    
};

await read();