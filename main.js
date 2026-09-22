document.addEventListener("DOMContentLoaded", () => {
  const loveButton = document.getElementById("loveButton");

  if (!loveButton) return;

  loveButton.addEventListener("click", (event) => {
    event.preventDefault();
    loveButton.classList.add("is-active");

    const burst = document.createElement("div");
    burst.className = "heart-burst";
    document.body.appendChild(burst);

    for (let i = 0; i < 12; i += 1) {
      const heart = document.createElement("span");
      heart.className = "floating-heart";
      heart.textContent = "❤";
      heart.style.left = "50%";
      heart.style.top = "50%";
      heart.style.setProperty("--dx", `${(Math.random() - 0.5) * 200}px`);
      heart.style.setProperty("--dy", `${(Math.random() - 0.5) * 180 - 80}px`);
      heart.style.setProperty("--rot", `${(Math.random() - 0.5) * 180}deg`);
      burst.appendChild(heart);
    }

    window.setTimeout(() => {
      window.location.href = loveButton.getAttribute("href");
    }, 850);
  });
});

