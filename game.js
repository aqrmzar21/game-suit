// ==================================== THISIS GAME =========================
let body = document.body;
body.style.height = '100%'
body.style.textAlign = 'center'

const comScoreSpan = document.getElementById('com-score-value');
const userScoreSpan = document.getElementById('user-score-value');

const kertasSuit = document.querySelector('button#kertas')
const batuSuit = document.querySelector('button#batu')
const guntingSuit = document.querySelector('button#gunting')
const user = document.getElementById('user-choice-display')
const com = document.getElementById('com-choice-display')
const resultText = document.getElementById('result-text');


// const pilihan = ""
kertasSuit.addEventListener('click', function () {
  const pilihanCom = pilihanKomputer()
  const pilihanUser = kertasSuit.value
  user.style.fontSize = "100%"
  user.innerHTML = pilihanUser
  com.innerHTML = pilihanCom
  cekHasil(pilihanUser, pilihanCom)
})
batuSuit.addEventListener('click', function () {
  const pilihanCom = pilihanKomputer()
  const pilihanUser = batuSuit.value
  user.style.fontSize = "100%"
  user.innerHTML = pilihanUser
  com.innerHTML = pilihanCom
  cekHasil(pilihanUser, pilihanCom)
})
guntingSuit.addEventListener('click', function () {
  const pilihanCom = pilihanKomputer()
  const pilihanUser = guntingSuit.value
  user.style.fontSize = "100%"
  user.innerHTML = pilihanUser
  com.innerHTML = pilihanCom
  cekHasil(pilihanUser, pilihanCom)
})
// console.log(user);

// console.log(kertasSuit.value);
// let pilihan = user.value

function pilihanKomputer() {
  const pilihan = ['batu', 'kertas', 'gunting'];
  const randomIndex = Math.round(Math.random() * 2);
  console.log(randomIndex);
  com.style.fontSize = "100%"
  return pilihan[randomIndex];
}
// console.log(pilihanKomputer);


let userScore = 0;
let comScore = 0;
function cekHasil(choiceUser, choiceKomputer) {
  
  let hasil = ""
  if (choiceUser == choiceKomputer) {
    hasil = "SERI"
  } else if (choiceUser == "batu") {
    hasil = (choiceKomputer == "gunting") ? 'MENANG' : 'KALAH'
  } else if (choiceUser == "kertas") {
    hasil = (choiceKomputer == "gunting") ? 'KALAH' : 'MENANG'
  } else if (choiceUser == "gunting") {
    hasil = (choiceKomputer == "batu") ? 'KALAH' : 'MENANG'
  }
  if(hasil == "MENANG") { 
    userScore++; 
    userScoreSpan.textContent = userScore;
  }
  if(hasil == "KALAH") { 
    comScore++; 
    comScoreSpan.textContent = comScore;
  }
  resultText.innerHTML = hasil;
  
  // Batasi permainan saat skor salah satu mencapai 3
  if (userScore === 3 || comScore === 3) {
    // Tampilkan pesan akhir
    let akhir = userScore === 3 ? "Kamu Menang!" : "Komputer Menang!";
    // resultText.innerHTML = akhir;
    alert(akhir)
    
    // Nonaktifkan semua tombol
    kertasSuit.disabled = true;
    batuSuit.disabled = true;
    guntingSuit.disabled = true;
    Textlagi.setAttribute('style', 'display:inline')
    Textlagi.style.color = "#000000ff"
  }
  
}

const Textlagi = document.getElementById('tampil');
Textlagi.style.display = "none"
Textlagi.addEventListener('click', function() {
  Textlagi.style.display = "none"
  resetGame()
})

function resetGame() {
  userScore = 0;
  comScore = 0;
  userScoreSpan.textContent = '0';
  comScoreSpan.textContent = '0';
  resultText.innerHTML = 'SCORE';
  kertasSuit.disabled = false;
  batuSuit.disabled = false;
  guntingSuit.disabled = false;
}


