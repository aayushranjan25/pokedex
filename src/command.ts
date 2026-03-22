import { exitCommand } from "./command_exit.js";
import { helpCommand } from "./command_help.js";
export type CLICommand = {
    name: string;
    description: string;
    callback: (commands: Record<string, CLICommand>) => void;
}

export function getCommands(): Record<string, CLICommand> {
  return {
    exit: {
      name: "exit",
      description: "Exits the pokedex",
      callback: exitCommand,
    },
    help: {
      name: "help",
      description: "Lists all available commands",
      callback: helpCommand,
    }
  };
}

