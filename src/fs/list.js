import { readdir }  from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const list = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const srcFolder = join(__dirname, 'files/');
    
    try {
        const files = await readdir(srcFolder);
        console.log('Here we go');
        console.log(files);
    } catch {
        throw Error('FS operation failed');
    }
};

await list();