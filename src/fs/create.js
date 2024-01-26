import { writeFile } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const create = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const file = join(__dirname, "fresh.txt");
    const data = "I am fresh and young";

    try{
        await writeFile(file, data, {flag: 'wx'})
        console.log(` => File was created`);
    }catch{
        throw new Error('FS operation failed');
    }
};

await create();
