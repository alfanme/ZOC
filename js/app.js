// selectors
const option = document.querySelector('.option');
const arrowDown = document.querySelector('.arrow-down');
const tombolTambah = document.querySelectorAll('.tambah');
const itemTotal = document.querySelector('.keranjang__card-item-jumlah');
const hargaTotal = document.querySelector('.keranjang__card-total');
const hargaProduk = document.querySelectorAll('.harga');

// event listener
// menambah jumlah item pada keranjang dan total belanjaan
let keranjang = 0;
let total = 0;
let i;
// hargaProduk[i].innerHTML.replace('Rp', '') * 1;

for (i = 0; i < tombolTambah.length; i++) {
    const tombol = tombolTambah[i];
    tombol.addEventListener('click', function(event) {
        const tombolClicked = event.target;
        const harga = tombolClicked.parentElement.querySelector('.daftar__parent-wrapper-card-desc').children[1].innerHTML.replace('Rp', '') * 1;
        keranjang++;
        total = total + harga;
        itemTotal.innerHTML = keranjang;
        hargaTotal.innerHTML = total;
        // cek jika item > 0
        if (keranjang > 0) {
            console.log('here', keranjang);
            const barKeranjang = document.querySelector('.keranjang');
            barKeranjang.classList.add('show-keranjang');
        } else {
            barKeranjang.classList.remove('show-keranjang');
        }
    });
}




// functions
function goBack() {
    window.history.back();
}

function showOption() {
    option.classList.toggle('active');
    arrowDown.classList.toggle('flip');
}