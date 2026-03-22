import { createInterface } from "node:readline";
import { getCommands } from "./command.js";
import { convertProcessSignalToExitCode } from "node:util";

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
        const commands = getCommands();
        const command = commands[cleanedInput[0]];
        if (command) {
            command.callback(commands);
        } else {
            console.log(`Unknown command: ${cleanedInput[0]}`);
        }
        rl.prompt();
        });
}

