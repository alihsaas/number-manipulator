export class NumAbbr {
	/**
	 * Constructor Parameters
	 * @param decimalPlace The number of digits in decimal part of the outputed number
	 * @param suffix A table of suffixes that will be added to the end of the outputed number according to their place in the table.
	 */
	constructor(decimalPlace?: number, suffix?: string[])

	/**
	 * Converts the inputed number to a abbreviated string
	 * @param value The number to be abbreviated 
	 */
	abbreviate(value: number): string;

	/**
	 * Converts the inputed string with suffix included in the suffix table to a number 
	 * @param value The string to be deabbreviated
	 */
	deabbreviate(value: string): number;
}

/**
 * Converts the inputed number to a comma sperated number
 * @param value The number to comma seperate
 */
export declare const formatNum: (value: number) => string;

/**
 * Coverts the inputed number in Bytes to KB, GB...etc
 * @example
 * AbbreviateBytes(1024) --> 1 KB
 * AbbreviateBytes('1024') ---> 1 KB
 * AbbreviateBytes(1234) --> 1.21 KB
 * AbbreviateBytes(1234, 3) --> 1.205 KB
 * @param value The number to be abbreviated
 * @param decimalPlace The number of digits in decimal part of the outputed number
 */
export declare const abbreviateBytes: (value: number, decimalPlace?: number) => string;