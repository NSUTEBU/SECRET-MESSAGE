const strInput = document.querySelector("#strText");
const warningAlert = document.querySelector("#warning");
const normalRect = document.querySelector("#normalrect");
const btnSubmit = document.querySelector("#encode");
const encoded = document.querySelector("#encodedArea");
const encodedRect = document.querySelector("#encodedRect");

function encode() {

uncodedStr = strInput.value.match(/[A-Za-z0-9]*/g).join("").toLowerCase();

let colSize = Math.ceil(Math.sqrt(uncodedStr.length));

let textCol = uncodedStr.match(new RegExp(`.{1,${colSize}}`, "g"));
let textRow = String(textCol).replace(/,/g, '\n');
normalRect.textContent = textRow;

let cipherText = "";
let cipherSegment = "";
const strChunks = textCol;
const len = strChunks.length * strChunks[0].length

for (let j = 0; j < len; j++) {
    cipherText += strChunks[j % strChunks.length].charAt(j / strChunks.length)
}

let encodedRow = Math.floor(Math.sqrt(uncodedStr.length));
let rowText = cipherText.match(new RegExp(`.{1,${encodedRow}}`, "g"));

textSegment = String(rowText).replace(/,/g, ' ');

encodedRect.textContent = textSegment;

cipherSegment = String(cipherText).replace(/,/g, '\n');

encoded.textContent = cipherSegment;
}       

btnSubmit.addEventListener("click", encode);