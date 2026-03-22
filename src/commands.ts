import { exitCommand } from "./command_exit.js";
import { helpCommand } from "./command_help.js";
import { CLICommand } from "./state.js";
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
    },
    aayush: {
      name: "aayush",
      description: "Aayush is the owner of this pokedex",
      callback: (state) => {
        console.log("Aayush is the owner of this pokedex");
      },
    }
  };
}

