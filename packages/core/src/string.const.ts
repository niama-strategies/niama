export const DEBURRED_LETTERS = {
  ...{À: 'A', Á: 'A', Â: 'A', Ã: 'A', Ä: 'A', Å: 'A', à: 'a', á: 'a', â: 'a', ã: 'a', ä: 'a', å: 'a'},
  ...{Ç: 'C', ç: 'c'},
  ...{Ð: 'D', ð: 'd'},
  ...{È: 'E', É: 'E', Ê: 'E', Ë: 'E', è: 'e', é: 'e', ê: 'e', ë: 'e'},
  ...{Ì: 'I', Í: 'I', Î: 'I', Ï: 'I', ì: 'i', í: 'i', î: 'i', ï: 'i'},
  ...{Ñ: 'N', ñ: 'n'},
  ...{Ò: 'O', Ó: 'O', Ô: 'O', Õ: 'O', Ö: 'O', Ø: 'O', ò: 'o', ó: 'o', ô: 'o', õ: 'o', ö: 'o', ø: 'o'},
  ...{Ù: 'U', Ú: 'U', Û: 'U', Ü: 'U', ù: 'u', ú: 'u', û: 'u', ü: 'u'},
  ...{Ý: 'Y', ý: 'y', ÿ: 'y'},
  ...{Æ: 'Ae', æ: 'ae'},
  ...{Þ: 'Th', þ: 'th'},
  ß: 'ss',
  ...{Ā: 'A', Ă: 'A', Ą: 'A', ā: 'a', ă: 'a', ą: 'a'},
  ...{Ć: 'C', Ĉ: 'C', Ċ: 'C', Č: 'C', ć: 'c', ĉ: 'c', ċ: 'c', č: 'c'},
  ...{Ď: 'D', Đ: 'D', ď: 'd', đ: 'd'},
  ...{Ē: 'E', Ĕ: 'E', Ė: 'E', Ę: 'E', Ě: 'E', ē: 'e', ĕ: 'e', ė: 'e', ę: 'e', ě: 'e'},
  ...{Ĝ: 'G', Ğ: 'G', Ġ: 'G', Ģ: 'G', ĝ: 'g', ğ: 'g', ġ: 'g', ģ: 'g'},
  ...{Ĥ: 'H', Ħ: 'H', ĥ: 'h', ħ: 'h'},
  ...{Ĩ: 'I', Ī: 'I', Ĭ: 'I', Į: 'I', İ: 'I', ĩ: 'i', ī: 'i', ĭ: 'i', į: 'i', ı: 'i'},
  ...{Ĵ: 'J', ĵ: 'j'},
  ...{Ķ: 'K', ķ: 'k', ĸ: 'k'},
  ...{Ĺ: 'L', Ļ: 'L', Ľ: 'L', Ŀ: 'L', Ł: 'L', ĺ: 'l', ļ: 'l', ľ: 'l', ŀ: 'l', ł: 'l'},
  ...{Ń: 'N', Ņ: 'N', Ň: 'N', Ŋ: 'N', ń: 'n', ņ: 'n', ň: 'n', ŋ: 'n'},
  ...{Ō: 'O', Ŏ: 'O', Ő: 'O', ō: 'o', ŏ: 'o', ő: 'o'},
  ...{Ŕ: 'R', Ŗ: 'R', Ř: 'R', ŕ: 'r', ŗ: 'r', ř: 'r'},
  ...{Ś: 'S', Ŝ: 'S', Ş: 'S', Š: 'S', ś: 's', ŝ: 's', ş: 's', š: 's'},
  ...{Ţ: 'T', Ť: 'T', Ŧ: 'T', ţ: 't', ť: 't', ŧ: 't'},
  ...{Ũ: 'U', Ū: 'U', Ŭ: 'U', Ů: 'U', Ű: 'U', Ų: 'U', ũ: 'u', ū: 'u', ŭ: 'u', ů: 'u', ű: 'u', ų: 'u'},
  ...{Ŵ: 'W', ŵ: 'w'},
  ...{Ŷ: 'Y', ŷ: 'y', Ÿ: 'Y'},
  ...{Ź: 'Z', Ż: 'Z', Ž: 'Z', ź: 'z', ż: 'z', ž: 'z'},
  ...{Ĳ: 'IJ', ĳ: 'ij'},
  ...{Œ: 'Oe', œ: 'oe'},
  ŉ: "'n",
  ſ: 's',
};

const rsAstralRange = '\\ud800-\\udfff';
const rsComboMarksRange = '\\u0300-\\u036f';
const reComboHalfMarksRange = '\\ufe20-\\ufe2f';
const rsComboSymbolsRange = '\\u20d0-\\u20ff';
const rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange;
const rsDingbatRange = '\\u2700-\\u27bf';
const rsLowerRange = 'a-z\\xdf-\\xf6\\xf8-\\xff';
const rsMathOpRange = '\\xac\\xb1\\xd7\\xf7';
const rsNonCharRange = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf';
const rsPunctuationRange = '\\u2000-\\u206f';
const rsSpaceRange =
  ' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000';
const rsUpperRange = 'A-Z\\xc0-\\xd6\\xd8-\\xde';
const rsVarRange = '\\ufe0e\\ufe0f';
const rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;

const rsApos = "['\u2019]";
const rsBreak = '[' + rsBreakRange + ']';
const rsCombo = '[' + rsComboRange + ']';
const rsDigits = '\\d+';
const rsDingbat = '[' + rsDingbatRange + ']';
const rsLower = '[' + rsLowerRange + ']';
const rsMisc = '[^' + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + ']';
const rsFitz = '\\ud83c[\\udffb-\\udfff]';
const rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')';
const rsNonAstral = '[^' + rsAstralRange + ']';
const rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}';
const rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]';
const rsUpper = '[' + rsUpperRange + ']';
const rsZWJ = '\\u200d';

const rsMiscLower = '(?:' + rsLower + '|' + rsMisc + ')';
const rsMiscUpper = '(?:' + rsUpper + '|' + rsMisc + ')';
const rsOptContrLower = '(?:' + rsApos + '(?:d|ll|m|re|s|t|ve))?';
const rsOptContrUpper = '(?:' + rsApos + '(?:D|LL|M|RE|S|T|VE))?';
const reOptMod = rsModifier + '?';
const rsOptVar = '[' + rsVarRange + ']?';
const rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*';
const rsOrdLower = '\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])';
const rsOrdUpper = '\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])';
const rsSeq = rsOptVar + reOptMod + rsOptJoin;
const rsEmoji = '(?:' + [rsDingbat, rsRegional, rsSurrPair].join('|') + ')' + rsSeq;

export const APOS = new RegExp(rsApos, 'g');
export const COMBO_MARK = new RegExp(rsCombo, 'g');
export const ASCII_WORD = /[^\u0000-\u002F\u003A-\u0040\u005B-\u0060\u007B-\u007F]+/g;
export const LATIN = /[\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u017F]/g;

export const HAS_UNICODE_WORD = /[a-z][A-Z]|[A-Z]{2}[a-z]|\d[A-Za-z]|[A-Za-z]\d|[^\d A-Za-z]/;
export const UNICODE_WORD = new RegExp(
  [
    rsUpper + '?' + rsLower + '+' + rsOptContrLower + '(?=' + [rsBreak, rsUpper, '$'].join('|') + ')',
    rsMiscUpper + '+' + rsOptContrUpper + '(?=' + [rsBreak, rsUpper + rsMiscLower, '$'].join('|') + ')',
    rsUpper + '?' + rsMiscLower + '+' + rsOptContrLower,
    rsUpper + '+' + rsOptContrUpper,
    ...[rsOrdUpper, rsOrdLower, rsDigits, rsEmoji],
  ].join('|'),
  'g'
);
