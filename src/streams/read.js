import { pipeline } from 'node:stream/promises';
import { stdout } from "node:process";
import { createReadStream } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const read = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const fileToRead = join(__dirname, 'files/fileToRead.txt');
   
    try {
        await pipeline(createReadStream(fileToRead), stdout);
     } catch {
        throw Error("Something went wrong");
    }
    
};

await read();