const areaResponse = document.querySelector('.areaResponse')
const btnEncrypt = document.querySelector('#btnEncrypt');
const btnDecrypt = document.querySelector('#btnDecrypt');
const btnCopy = document.querySelector('#btnCopy')
const txtResponse = document.querySelector('.txtResponse');
const txtArea = document.querySelector('.txtArea');

btnEncrypt.addEventListener('click', encrypt)

function encrypt() {
    if( txtArea.value.length > 0) {
        const txtEncypt = txtArea.value;
        const response = txtEncypt.replaceAll('e', 'enter')
                                .replaceAll('i', 'imes')
                                .replaceAll('a','ai')
                                .replaceAll('o','ober')
                                .replaceAll('u','ufat');
        txtResponse.innerHTML = response;
        areaResponse.classList.add('response');
        return response;
    }
}
