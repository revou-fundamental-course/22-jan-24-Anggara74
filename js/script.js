// INPUT FORM
const inputName = document.getElementById('input-name');
const inputEmail = document.getElementById('input-email');

const button = document.getElementById('tombol-kirim');

button.addEventListener('click', function() {
    let nama = inputName.value;
    let email = inputEmail.value;

    if (!nama) {
        const nameError = document.getElementById('name-error');
        nameError.classList.add('error-message');

        nameError.innerText = "Nama harus diisi!"
    }

    if (!email) {
        const emailError = document.getElementById('email-error');
        emailError.classList.add('error-message');

        emailError.innerText = 'Email harus diisi!';
    }
})

// AUTO SLIDE IMAGE
var firstIndex=0;
function automaticSlide() {
    setTimeout(automaticSlide, 2000);
    var pics;
    const img=document.querySelectorAll('img');
    for(pics=0; pics<img.length;pics++) {
        img[pics].style.display="none";
    }
    firstIndex++;
    if(firstIndex > img.length) {
        firstIndex =1;
    }
    img[firstIndex -1].style.display="block";
}
automaticSlide();