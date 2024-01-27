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
    } catch(err) {
        if(err.message === 'exist') {
            console.log('>> You know file archive.gz already exist. <<')
            console.log('>> And I decide to tell you about it. <<')
            console.log('>> I know it wasn\'t in a task, but I think it\'s correct <<')
            console.log('>> And now will be error <<')
            throw new Error('>> File archive.gz already exist. Please, delete it and try again <<');
        }
    }

    try {
        await pipeline(createReadStream(fileToCompress), createGzip(), createWriteStream(archive));
        console.log('File was successfully compressed!')
    } catch {
        throw Error("Something went wrong. Please, contact to developer ;)")
    }
};

await compress();