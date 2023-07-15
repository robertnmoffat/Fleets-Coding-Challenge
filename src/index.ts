
/**
 * A method which parses a passed string for the first non-repeating character and returns it
 * @param s String to be parsed for non-duplicate characters
 * @returns The first non-duplicate character in the passed string. If their are none, a blank char is returned
 */
function firstNonRepeated(s: string): string {
    //Last repeated char
    let repeated: string = '';

    if (s.length == 1) return s; //If input is only one char long, return that char

    for (let i: number = 0; i < s.length; i++) {
        if (i == s.length - 1) { //If last letter
            if (repeated != s[i])
                return s[i]; //If last letter has not been repeated return it
            return ''; //Else return empty char
        }

        if (s[i] == s[i + 1])
            repeated = s[i]; //If next letter is the same as current letter, set repeated to the current letter
        else if (repeated != s[i])
            return s[i]; //If next letter is not the same as the current letter, and the previous letter is not the same, return the current letter

    }

    return '';
}