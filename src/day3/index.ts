import { readFile } from "../utils/readFiles";

const input = readFile('src/day3/input.txt');

const findRate = (input: string[]) => {
    const rate = input.reduce((acc, curr) => {
        for (let j = 0; j < curr.length; j++) {
            acc[j] = acc[j] ?? 0
            acc[j] += Number(curr[j])
        }
        return acc;
    }, [] as number[]);

    const halfInputLength = input.length / 2
    const gamma = rate.map((current) => { return current >= halfInputLength ? 1 : 0 }).join('')
    const epsilon = rate.map((current) => { return current < halfInputLength ? 1 : 0 }).join('')
    return { gamma: gamma, epsilon: epsilon }
}

const { gamma, epsilon } = findRate(input)
const a = parseInt(gamma, 2)
const b = parseInt(epsilon, 2)
console.log(a * b)



const findOxygenRate = (input: string[]) => {
    let oxygenRate: string[] = [...input];
    const itemLength = input[0]?.length as number
    for (let i = 0; i < itemLength; i++) {
        if (oxygenRate.length === 1) { break }
        const { gamma } = findRate(oxygenRate);
        let current = gamma[i];
        oxygenRate = oxygenRate.filter(item => {
            return item[i] === current
        })
    }

    let CO2Scrubber: string[] = [...input];
    for (let i = 0; i < itemLength; i++) {
        if (CO2Scrubber.length === 1) { break }
        const { epsilon } = findRate(CO2Scrubber);
        let current = epsilon[i];
        CO2Scrubber = CO2Scrubber.filter(item => {
            return item[i] === current
        })
    }

    return { oxygenRate: oxygenRate.join(''), CO2Scrubber: CO2Scrubber.join('') }
}

const { oxygenRate, CO2Scrubber } = findOxygenRate(input);
console.log(parseInt(oxygenRate, 2) * parseInt(CO2Scrubber, 2))

