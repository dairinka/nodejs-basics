import { cpus } from "node:os"
import { Worker } from 'node:worker_threads';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const performCalculations = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const workerFile = join(__dirname, 'worker.js');

    const cores = cpus();
    const workerResults = [];

    const createWorker = (n) => {
        return new Promise((res, rej) => {
            const worker = new Worker(workerFile);
            worker.postMessage(n + 10);
            worker.on("message", res);
            worker.on("error", rej)
        });

    }

    for (let i = 0; i < cores.length; i++) {
        const workerResult = {
            'status': '',
            'data': 0
        };

        try {
            workerResult.data = await createWorker(i);
            workerResult.status = 'resolved';
        } catch {
            workerResult.data = null;
            workerResult.status = 'error';
        }

        workerResults.push(workerResult);
    }
    console.log(workerResults);
    process.exit(0);
};

await performCalculations();