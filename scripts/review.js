document.addEventListener("DOMContentLoaded", () => {
  const count = localStorage.getItem("reviewCount") || 0;
  const newCount = parseInt(count) + 1;
  localStorage.setItem("reviewCount", newCount);
  document.getElementById("reviewCount").textContent = newCount;
});
