const PasswordLengthRange = document.getElementById("PasswordLengthRange")
const PasswordLengthNumber = document.getElementById("PasswordLengthNumber")
const passwordGeneratorForm = document.getElementById("passwordGeneratorForm")
const passwordDisplay = document.getElementById("passwordDisplay")

const includeUppercaseElements = document.getElementById("includeUppercase")
const includeNumbersElements = document.getElementById("includeNumbers")
const includeSymbolsElements = document.getElementById("includeSymbols")

const NUMBERS_CHARACTER_CODES = generateArrays(48,57)
const SMALL_LETERS_CHAR_CODES = generateArrays(97,122)
const CAPITAL_LETERS_CHAR_CODES = generateArrays(65,90)
const SPECIAL_CHARACTERS_CHAR_CODES = generateArrays(33,47).concat(generateArrays(58,64)).concat(
    generateArrays(91,96)
).concat(generateArrays(123,126))

PasswordLengthRange.addEventListener("input",linkTogether)
PasswordLengthNumber.addEventListener("input",linkTogether)

passwordGeneratorForm.addEventListener("submit",(e) =>{
    e.preventDefault();
    const characterAmount = PasswordLengthNumber.value
    const includeNumbers = includeNumbersElements.checked
    const includeSymbols = includeSymbolsElements.checked
    const includeUppercase =  includeUppercaseElements.checked
    
    const password = generatePassword(characterAmount,includeNumbers,includeSymbols,includeUppercase) 
    passwordDisplay.innerText = password
})


function linkTogether(e){
    const value = e.target.value
    PasswordLengthRange.value = value
    PasswordLengthNumber.value = value
}

function generateArrays(low,high){
    let array = []
    for(let i=low; i<=high; i++){
        array.push(i)
    }
    return array
}

function generatePassword(passwordLength,includeNumbers,includeSymbols,includeUppercase){
    let charcodes  = SMALL_LETERS_CHAR_CODES
    if(includeNumbers) charcodes = charcodes.concat(NUMBERS_CHARACTER_CODES)
    if(includeSymbols) charcodes = charcodes.concat(SPECIAL_CHARACTERS_CHAR_CODES)
    if(includeUppercase) charcodes = charcodes.concat(CAPITAL_LETERS_CHAR_CODES)

    const passwords = []
    for(let i=0; i<=passwordLength; i++){
        const randomCharcodes = charcodes[Math.floor(Math.random()*charcodes.length)]
        passwords.push(String.fromCharCode(randomCharcodes))

    }
    return passwords.join("")
    
}
