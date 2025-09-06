



var main = document.getElementById("main");
let arr = ["https://i.pinimg.com/736x/4b/a4/a5/4ba4a57d8839727a17431587b6a5b6f4.jpg",
           "https://i.pinimg.com/736x/9c/e2/b4/9ce2b49df4cb22e74a20d43868e4c241.jpg",
           "https://i.pinimg.com/736x/c1/8e/89/c18e89fdba5f50bad220f2c5fdff58da.jpg",
           "https://i.pinimg.com/736x/84/3b/3b/843b3be288bce5df6a17e20e13fca251.jpg",
           "https://i.pinimg.com/1200x/6b/4a/92/6b4a9235e9d166eec695322023d17e90.jpg",
           "https://i.pinimg.com/1200x/d5/f3/6e/d5f36ea5b60cda3882845711a8d5755e.jpg",
           "https://i.pinimg.com/736x/24/c6/a6/24c6a612c5adec0b88db03995a8b7d07.jpg"]

let s = "";
for (let i = 1; i <= 52; i++) {
    let r = Math.floor(Math.random() * arr.length);
    s += `<div class="card"><img src=${arr[r]}></div>`; 
}
main.innerHTML = s;