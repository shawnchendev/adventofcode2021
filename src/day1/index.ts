import { readFile } from '../utils/readFiles';

interface Current {
    total: number
    prev: number
}

const findTotalIncrease = (input: number[]) => {
    return input.reduce((acc, curr) => {
        if (Number(curr) > acc.prev) {
            return {
                ...acc,
                total: acc.total + 1,
                prev: Number(curr)
            }
        }
        return {
            ...acc,
            prev: Number(curr)
        }
    }, { total: -1, prev: Number.NEGATIVE_INFINITY } as Current);
}

const slidingWindowForThree = (input: number[]) => {
    let slidingWindowInput = [];
    for (let i = 0; i < input.length - 2; i++) {
        slidingWindowInput.push(input.slice(i, i + 3).reduce((a, b) => a + b))
    }
    return slidingWindowInput;
}

const input = readFile('src/day1/input.txt');
const numberInput = input.map(Number)
const totalIncrease = findTotalIncrease(numberInput);

const newInput = slidingWindowForThree(numberInput);
const totalIncrease2 = findTotalIncrease(newInput);
console.log(totalIncrease.total)
console.log(totalIncrease2.total)
