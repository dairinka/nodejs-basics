import { argv } from 'node:process';

const parseArgs = () => {
    const userArgs = argv.slice(2);
    const resultArr = [];
    userArgs.forEach((el, ind, arr) => {
        if(el.startsWith('--')) {
            resultArr.push(`${el.slice(2)} is ${arr[ind + 1]}`);
        }
    })
    console.log(resultArr.join(", "));
};

parseArgs();