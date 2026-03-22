import { State } from "./state.js";
export function helpCommand(state: State):void{
   const commands = state.commands; 
   console.log("Welcome to the Pokedex!");
   for (const commandName in commands) {
    const command = commands[commandName];
    console.log(`${command.name}: ${command.description}`);
   }
}
  