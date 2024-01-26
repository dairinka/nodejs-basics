import { rm }  from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const remove = async () => {
   const __dirname = dirname(fileURLToPath(import.meta.url));
   const srcFolder = join(__dirname, 'files/');
   const fileToDelete = join(srcFolder, 'fileToRemove.txt');

   try{
    await rm(fileToDelete);
    console.log('File was successfuly removed');
   } catch {
     throw Error('FS operation failed');
   }

};

await remove();