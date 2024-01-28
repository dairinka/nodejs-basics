import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { fork } from 'node:child_process';

const spawnChildProcess = async (args) => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const childProcessFile = join(__dirname, "files", "script.js");
    console.log(">> Hi there. I just remind: you need write some stuff in console, when you get bored just write CLOSE <<")
    console.log(">> Thank you for check my work <<\n")
    const childProc = fork(childProcessFile, args, { stdio: [0, 1, 2, 'ipc'] })
};

spawnChildProcess(['someArgument1', 'someArgument2']);
