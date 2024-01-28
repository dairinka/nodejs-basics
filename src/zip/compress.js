import { createReadStream, createWriteStream } from 'node:fs';
import { join, dirname } from 'node:path';
import { pipeline } from 'node:stream/promises';
import { fileURLToPath } from 'node:url';
import { createGzip } from 'node:zlib';
import { access } from 'node:fs/promises';

const compress = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const fileToCompress = join(__dirname, 'files/fileToCompress.txt');
    const archive = join(__dirname, 'files/archive.gz');

    try {
        await access(archive);
        throw Error('exist');
    } catch (err) {
        if (err.message === 'exist') {
            console.log('>> You know file archive.gz already exist. <<');
            console.log('>> It might be better if you delete archive.gz first. <<');
            console.log('>> But I still archived it for you.<<');
        }
    }
    
    try {
         await access(fileToCompress);
    } catch {
        throw new Error('fileToCompress.txt doesn\'t exist. Please, put correct file in the system' ) 
    }

    try {
        await pipeline(createReadStream(fileToCompress), createGzip(), createWriteStream(archive));
        console.log('File was successfully compressed!')
    } catch {
        throw Error("Something went wrong")
    }
};

await compress();