import { readFile }  from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const read = async () => {
   const __dirname = dirname(fileURLToPath(import.meta.url));
   const srcFolder = join(__dirname, 'files/');
   const fileToRead = join(srcFolder, 'fileToRead.txt');

   try {
    const text = await readFile(fileToRead, {encoding: 'utf-8'});
    console.log("Maybe it's something special:");
    console.log(text);
   } catch {
    throw Error('FS operation failed');
   }
};

await read();