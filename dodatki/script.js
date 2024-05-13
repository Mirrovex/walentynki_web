let noBtnClickCount = 0;
let originalYesBtnPosition;

document.getElementById("yesBtn").addEventListener("click", function() {
  window.location.href = "./dodatki/yes.html";
});

document.getElementById("noBtn").addEventListener("click", function() {
  const messages = ["Na pewno?", "Czy jesteś pewna?", "Przemyśl to jeszcze raz", "Zastanów się nad tym", "No proszę", "Niemiło", "Ale.. ale ja cię kocham", "Oj no nie drocz się"];
  const randomIndex = Math.floor(Math.random() * messages.length);
  document.querySelector("h1").textContent = messages[randomIndex];
  
  noBtnClickCount++;
  
  if (noBtnClickCount >= 10) {
    originalYesBtnPosition = document.getElementById("yesBtn").style;
    console.log(originalYesBtnPosition)
    document.getElementById("yesBtn").style.position = originalYesBtnPosition;

    const container = document.querySelector(".container");
    const containerRect = container.getBoundingClientRect();
    const buttonRect = document.getElementById("noBtn").getBoundingClientRect();
    
    const maxX = containerRect.width - buttonRect.width;
    const maxY = containerRect.height - buttonRect.height;
    
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    
    document.getElementById("noBtn").style.position = "absolute";
    document.getElementById("noBtn").style.left = randomX + "px";
    document.getElementById("noBtn").style.top = randomY + "px";
  }
});
