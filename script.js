// Elements
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".yes-btn");

const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");

// Open Letter
envelope.addEventListener("click", () => {
    envelope.style.display = "none";
    letter.style.display = "flex";

    setTimeout(() => {
        document.querySelector(".letter-window").classList.add("open");
    }, 50);
});

// YES grows in place when NO is clicked
let yesScale = 1;

noBtn.addEventListener("click", () => {
    yesScale = Math.min(yesScale + 0.3, 3);
    yesBtn.style.transform = `scale(${yesScale})`;
});

// YES Clicked
yesBtn.addEventListener("click", () => {

    title.textContent = "I knew it! 💖";
    catImg.src = "cat_dance.gif";

    document.querySelector(".letter-window").classList.add("final");

    buttons.style.display = "none";
    finalText.style.display = "block";
});
