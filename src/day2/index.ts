import { readFile } from "../utils/readFiles";

type position = 'forward' | 'up' | 'down'
const horizontal = {
    forward: 1,
    up: 0,
    down: 0
}
const depth = {
    forward: 0,
    up: -1,
    down: 1
}


const input = readFile('src/day2/input.txt');

const calculateHorizontalAndDepth = (input: string[]) => {
    let horizontalPosition = 0
    let depthPosition = 0
    for (let i = 0; i < input.length; i++) {
        const current = input[i];
        if (!current) { continue }
        const [position, move] = current.split(' ') as [position, string];
        horizontalPosition += horizontal[position] * Number(move)
        depthPosition += depth[position] * Number(move)
    }
    return horizontalPosition * depthPosition
}


const calculate = (input: string[]) => {
    let horizontalPosition = 0
    let depthPosition = 0
    let aim = 0
    for (let i = 0; i < input.length; i++) {
        const current = input[i];
        if (!current) { continue }
        const [position, move] = current.split(' ') as [position, string];
        horizontalPosition += horizontal[position] * Number(move)
        if (horizontal[position]) {
            depthPosition += aim * Number(move)
        }
        aim += depth[position] * Number(move);
    }
    return horizontalPosition * depthPosition
}

const totalPart1 = calculateHorizontalAndDepth(input);
console.log("totalPart1", totalPart1)


const totalPart2 = calculate(input);
console.log("totalPart2", totalPart2)
