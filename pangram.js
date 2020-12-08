/** @format */

//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = (string) => {
	const ALPHABET = "abcdefghijklmnopqrstuvwxyz".split("");
	const lowercasedString = string.toLowerCase();

	// return ALPHABET.every((letter) => lowercasedString.includes(letter))

	for (let i = 0; i < ALPHABET.length; i++) {
		if (!lowercasedString.includes(ALPHABET[i])) {
			return false;
		}
	}

	return true;
};
