import { rename as rn, access }  from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const rename = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const srcFolder = join(__dirname, 'files/');
    const newFile = join(srcFolder, 'properFilename.md');
    const oldFile = join(srcFolder, 'wrongFilename.txt');

    try{
        await access(oldFile);
    } catch {
        throw Error('FS operation failed');
    }

    try{
        await access(newFile);
        throw Error('exist');
    } catch(err) {
        if(err.message === 'exist') throw Error('FS operation failed');
        
    }

    try{
        await rn(oldFile, newFile);
        console.log('File was successfuly renamed');
    } catch {
        throw Error('FS operation failed');
    }
};

await rename();