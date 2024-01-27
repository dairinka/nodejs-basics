import { createReadStream, createWriteStream } from 'node:fs';
import { join, dirname } from 'node:path';
import { pipeline } from 'node:stream/promises';
import { fileURLToPath } from 'node:url';
import { createGunzip } from 'node:zlib';
import { rm } from 'node:fs/promises';

const decompress = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const fileToDecompress = join(__dirname, 'files/fileToCompress.txt');
    const archive = join(__dirname, 'files/archive.gz');
    try {
       await rm(fileToDecompress);
        console.log('I have removed fileToCompress.txt first, because how do you know if this function can decompress the archive or not');
    } catch {}

    try {
        await pipeline(createReadStream(archive), createGunzip(), createWriteStream(fileToDecompress));
        console.log('File was decompressed');
    } catch {
        throw Error("Something went wrong. Please, contact to developer ;)")
    }
};

await decompress();