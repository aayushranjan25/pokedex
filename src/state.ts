import { createInterface, type Interface } from "readline";
import { getCommands } from "./commands.js";
export type CLICommand = {
    name: string;
    description: string;
    callback: (state: State) => void;
}
export type State = {
    readline: Interface;
    commands: Record<string, CLICommand>; 
};
export function initState(): State {
    const r1 = createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: "Pokedex >",
    });
    return {
        readline: r1,
        commands: getCommands(),
    };
}

