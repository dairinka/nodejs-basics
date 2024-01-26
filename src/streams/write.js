import { pipeline } from 'node:stream/promises';
import { stdin } from "node:process";
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import {createWriteStream} from "node:fs"
const write = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const fileToWrite = join(__dirname, 'files/fileToWrite.txt');
    console.log('>>> Hi! Now you can wtite some text below. \nAfter you finish, please press Ctrl + C. \nSee your result in streams/files/fileToWrite.txt <<<')
    await pipeline(stdin, createWriteStream(fileToWrite));
};

await write();