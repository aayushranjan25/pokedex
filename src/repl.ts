export function cleanInput(input: string): string[] {
    const cleanedInput = input.trim().toLowerCase().split(" ");
    return cleanedInput;
}