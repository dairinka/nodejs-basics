import { writeFile } from 'node:fs/promises';
const create = async () => {
    const data = "I am fresh and young";
    const file = "fresh.txt";
    writeFile(file, data, {flag: 'wx'})
    .then(() => console.log(` => file ${file} was created`))
    .catch(() => console.log('FS operation failed'))
};

await create();