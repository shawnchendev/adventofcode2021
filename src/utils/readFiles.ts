import { readFileSync } from 'fs';


export const readFile = (path: string): string[] => {
    const contents = readFileSync(path, 'utf-8');
    const arr = contents.split(/\r?\n/);
    return arr
}
