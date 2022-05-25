let name = '';
const namePrefix = 'Nao';
const nameSuffix = 'i';
const vowels = ['a', 'e', 'i', 'o', 'u'];
const consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];
name = namePrefix + consonants[Math.floor(Math.random() * consonants.length)] + vowels[Math.floor(Math.random() * vowels.length)] + consonants[Math.floor(Math.random() * consonants.length)] + nameSuffix;
console.log(name);