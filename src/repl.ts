import { createInterface } from "node:readline";
import { workerData } from "node:worker_threads";

export function cleanInput(input: string): string[] {
    const cleanedInput = input.trim().toLowerCase().split(" ").filter((word) => word !== "");
    return cleanedInput;
}
export function startREPL() {
    const rl = createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: "Pokedex >",
        });

    rl.prompt();
    rl.on("line",(input: string) => {
        const cleanedInput = cleanInput(input);
        if(cleanedInput.length === 0) {
            rl.prompt();
            return;
        }
        console.log(`Your command was: ${cleanedInput[0]}`);            
        rl.prompt();
        });
}

