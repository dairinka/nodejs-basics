import { env } from "node:process";
const parseEnv = () => {
    const rssVars = Object.entries(env).filter(([key, _]) => key.startsWith("RSS"))
    const rssVarsString = rssVars.map(([key, value]) => `${key}=${value}`).join('; ');
    console.log(rssVarsString);
};

parseEnv();