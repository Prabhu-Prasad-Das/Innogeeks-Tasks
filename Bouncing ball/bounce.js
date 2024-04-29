const toggleBtn = document.getElementById("toggleBtn");
const ball = document.getElementById("ball");

let isJumping = false;

toggleBtn.addEventListener("click", function () {
  if (!isJumping) {
    ball.classList.add("jumping");
    isJumping = true;
  } else {
    ball.classList.remove("jumping");
    isJumping = false;
  }
});
