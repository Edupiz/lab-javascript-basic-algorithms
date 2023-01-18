// Iteration 1: Names and Input

let hacker1 = "Isi";
let hacker2 = "Disi";

console.log("The driver's name is " + hacker1);

console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals

console.log(hacker1.length);
console.log(hacker2.length);

if(hacker1.length > hacker2.length){
  console.log("The driver has the longest name, it has" + hacker1.length + "characters.")
}
else if (hacker1.length == hacker2.length) {
  console.log("Wow, you both have equally long names, " + hacker1.length + "characters!")
} 
else {console.log("It seems that the navigator has the longest name, it has " + hacker2.length +  " characters.")}

// Iteration 3: Loops

let hacker1mod = " "

for(let i = 0; i < hacker1.length; i++){
hacker1mod = hacker1mod + " " + hacker1[i]
console.log(hacker1mod.toUpperCase())}

let hacker2reverse = "Disi";
let reversed = "";

for (let i = hacker2reverse.length - 1; i >= 0; i--) {
  reversed += hacker2reverse[i];
}
console.log(reversed);  // "reward"

/*const i = "i";
const d = "d";
if (i < d) {
  console.log(` The driver's name goes first`);
} else if (i > d) {
  console.log(`Yo, the navigator goes first definitely`);
} else {
  console.log(`What?! You both have the same name?`);
}*/

/*if (hacker1.length == hacker2.length) {
  console.log(`What?! You both have the same name?`);}
for(let i=0; i<hacker1.length; i++) {
    if(hacker1.charAt(i) > hacker2.charAt(i)) {
    console.log("The driver's name goes first");
} else if(hacker1.charAt(i) < hacker2.charAt(i)){console.log(`Yo, the navigator goes first definitely`);}}
*/
for(let i=0; i<hacker1.length; i++) {
  if (hacker1[i] !== hacker2[i]){
  if (hacker1[i] < hacker2[i]){
    console.log("The driver's name goes first");
    break;
  }else if (hacker1[i] > hacker2[i]){console.log(`Yo, the navigator goes first definitely`);
break;} 
  }else if (hacker1[i] === hacker2[i]){
    console.log(`What?! You both have the same name?`);
    break;
  }}

//Bonus 1

let longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel venenatis leo. Quisque ut felis eu felis blandit hendrerit. Donec ac libero et lorem consequat tincidunt vel ac purus. Proin placerat lectus et velit hendrerit, eu gravida mauris porta. Curabitur nec egestas ipsum. Donec enim dui, elementum quis ultrices eget, accumsan id erat. Nunc tincidunt efficitur est. Vivamus vitae neque nulla. Sed sed purus felis. Maecenas tristique urna ut risus ullamcorper, at interdum est placerat. Phasellus dignissim ante a lorem consectetur ultrices. Nullam mauris risus, accumsan sit amet maximus tristique, rhoncus non mauris. Morbi ac dapibus dui. Maecenas quis volutpat nibh. Morbi sagittis purus eu dui maximus, id ullamcorper lacus egestas.

Cras condimentum sapien quis dolor dignissim porta. Nam dictum vestibulum finibus. Maecenas mi urna, rutrum eu efficitur eu, commodo sed augue. Phasellus dui sem, fringilla sit amet quam id, sagittis ornare lacus. Phasellus pulvinar libero leo, sed pellentesque elit porta eu. Vivamus non fringilla dui. In ornare quis risus sit amet pharetra. Phasellus ornare nisi sit amet diam dictum sodales. Proin faucibus nisi sit amet efficitur hendrerit. Praesent venenatis vestibulum tortor eget imperdiet. Duis euismod nec urna sit amet eleifend.

Donec consequat felis metus, eget finibus dolor suscipit fermentum. Nullam eleifend eu sapien in pellentesque. Vivamus ac semper mi. Nam blandit interdum nulla, sed varius sapien dapibus non. Nunc et magna quis arcu imperdiet eleifend eget vitae diam. Vivamus ligula eros, laoreet eget elit eu, consectetur semper ex. Phasellus viverra convallis sapien, ut malesuada diam fermentum vel. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus finibus urna nec sapien tristique vestibulum. Pellentesque vitae quam sodales, cursus tortor in, ornare ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean et orci ornare, semper metus eget, vestibulum libero. Mauris nec ante sit amet enim tristique scelerisque sed vitae sem. Aliquam erat volutpat. Cras dapibus, lectus vel vulputate aliquet, orci tortor tempus nunc, ut lobortis libero metus vel ipsum.`

let numberOfWords = longText.split(' ').length;

console.log(numberOfWords);

let numberOfEt = longText.split('et').length;

console.log(numberOfEt);

//Bonus 2

let phraseToCheck = "put it up";

let palindromeChecker = string.length;

    for (let i = 0; i < palindromeChecker / 2; i++) {

        if (string[i] !== phraseToCheck[palindromeChecker - 1 - i]) {
          console.log('It is not a palindrome');
        break;}
     else console.log('It is a palindrome');
    break;}
