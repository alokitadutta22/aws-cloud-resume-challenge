// ---------- Theme toggle (persists across visits) ----------
const themeToggle = document.getElementById("themeToggle");
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
  document.body.classList.add("light");
  themeToggle.textContent = "🌙";
}

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
  const isLight = document.body.classList.contains("light");
  themeToggle.textContent = isLight ? "🌙" : "☀️";
  localStorage.setItem("theme", isLight ? "light" : "dark");
});

// ---------- Smooth scroll for nav links ----------
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    document
      .querySelector(link.getAttribute("href"))
      ?.scrollIntoView({ behavior: "smooth" });
  });
});

// ---------- View counter ----------
const views = document.getElementById("views");

async function updateViews() {
  let response = await fetch(
    "https://yan7b6fxbrdx4ocgfl6p6xsewm0vxkon.lambda-url.us-east-1.on.aws/",
  );
  let data = await response.json();
  views.innerHTML = `${data.views}`;
}

updateViews();
