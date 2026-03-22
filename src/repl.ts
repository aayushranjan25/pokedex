import { State } from "./state.js";
export function cleanInput(input: string): string[] {
    const cleanedInput = input.trim().toLowerCase().split(" ").filter((word) => word !== "");
    return cleanedInput;
}
export function startREPL(state: State) {
    const rl = state.readline;
    rl.prompt();
    rl.on("line",(input: string) => {
        const cleanedInput = cleanInput(input);
        if(cleanedInput.length === 0) {
            rl.prompt();
            return;
        }
        const commands = state.commands;
        const command = commands[cleanedInput[0]];
        if (command) {
            command.callback(state);
        } else {
            console.log(`Unknown command: ${cleanedInput[0]}`);
        }
        rl.prompt();
        });
}

