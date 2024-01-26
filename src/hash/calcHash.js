import { createHash } from 'node:crypto';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { readFile } from 'node:fs/promises';

const calculateHash = async () => {

    const __dirname = dirname(fileURLToPath(import.meta.url));
    const fileToHash = join(__dirname, 'files/fileToCalculateHashFor.txt');
    try{
       const text = await readFile(fileToHash);
       const hash = createHash('sha256').update(text).digest('hex');
       console.log(hash);
    } catch {
        throw Error("Can't read file");
    }
  
};

await calculateHash();