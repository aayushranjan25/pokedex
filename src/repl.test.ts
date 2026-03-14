import { cleanInput } from "./repl";
import { describe, expect, test } from "vitest";

describe.each([
    {
        input: "  Hello World  ",
        expected: ["hello", "world"],
    },
    {
        input: " ",
        expected: [],
    },
    {
        input: "We aree the the!!! *** crazy ones",
        expected: ["we", "aree", "the", "the!!!", "***", "crazy", "ones"],
    },

])("cleanInput($input)", (({ input, expected }) => {
    test(`Expected: ${expected}`,() => {
        const result = cleanInput(input);
        expect(result).toHaveLength(expected.length);
        for (const i in expected) {
            expect(result[i]).toBe(expected[i]);
        }
    });
}));