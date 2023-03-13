let encryptBtn = document.getElementById('encrypt-btn');
let eInput = document.getElementById('encryptedInput');
let pInput = document.getElementById("input1");
let inputs = [eInput, pInput];
let copyBtn = document.getElementById('copy-btn');


inputs.forEach( input => {
    input.oninput = () => {
        input.value = input.value.toUpperCase()
    }
});

function encrypt(){
    let pInput = document.getElementById('input1').value;
    let solved  = '';
    let shiftInput = parseInt(document.getElementById('shiftInput').value);

    for( var i = 0; i < pInput.length; i++){
        let ascii_num = pInput[i].charCodeAt();
        let sum = ascii_num + shiftInput;
        sum > 65 && sum < 99 ? solved += String.fromCharCode(sum) : sum > 90 ? solved += String.fromCharCode(65+ (sum & 91)) : solved += pInput[i];
    }
    eInput.value = solved;
}



function copy(){
    eInput.select();
    eInput.setSelectionRange(0,99999);
    document.execCommand('copy');
}

copyBtn.addEventListener('click', copy);
encryptBtn.addEventListener('click', encrypt);