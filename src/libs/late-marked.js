/**
 * **Note**: convert string to regexp patterns need **double** escape characters.
 * @example `\n` should be written as `\\n`
 */
const rules = [
	// basic formatting
	['\\n', '<br>'],
	['  $', '<br><br>'],
	['\\+\\+(.+)\\+\\+', '<mark>$1</mark>'],
	['\\+(.+)\\+', '<b>$1</b>'],
	['_(.+)_', '<u>$1</u>'],
	['~(.+)~', '<s>$1</s>'],
	['\\`(.+)\\`', '<code>$1</code>'],
	['//(.+)//', '<span class="hide">$1</span>'],
	['\\\\{0}\\/(.+[^<])\\/', '<i>$1</i>'],
	['\\[(.+)\\]\\((.+)\\)', '<a href="$2">$1</a>'],

	// escape character
	['\\\\(.{1})', '$1'],
];

/**
 * 
 * @param {string} text raw text to parse
 * @returns {string} parsed text with HTML tags
 */
export const parseRawText = (text) => {
	const parsedText = rules.reduce((acc, [pattern, replacement]) => {
		const regex = new RegExp(pattern, 'g');
		return acc.replace(regex, replacement);
	}, text);
	console.debug('[LateMarked]', text, '=>', parsedText);
	return parsedText;
}
