import { mkdir, readdir, copyFile }  from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
const copy = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const srcFolder = join(__dirname, 'files/');
    const projectFolder = join(__dirname, 'files_copy');
    try{
        await mkdir(projectFolder);
        const files = await readdir(srcFolder);
        files.map((file) => copyFile(join(srcFolder, file), join(projectFolder, file)));
        console.log('Files were successfully coppied')
    } catch {
        throw new Error('FS operation failed')
    }
    
};

await copy();
