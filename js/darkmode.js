let root = document.querySelector(":root");

document.getElementById("darkmode").onclick = function () {
  colorSwap();
};

window.addEventListener("load", function () {
  console.log(localStorage.getItem("theme"));
  if (localStorage.getItem("theme") === "dark_mode") {
    setDarkMode();
  } else {
    setLightMode();
  }
});

function getRootVal(val) {
  let rs = getComputedStyle(root);
  return rs.getPropertyValue(val);
}

function colorSwap() {
  if (getRootVal("--primary") === "black") {
    setLightMode();
  } else {
    setDarkMode();
  }
}

function setLightMode() {
  root.style.setProperty("--primary", "white");
  root.style.setProperty("--secondary", "black");
  localStorage.setItem("theme", "light_mode");
}

function setDarkMode() {
  root.style.setProperty("--primary", "black");
  root.style.setProperty("--secondary", "white");
  localStorage.setItem("theme", "dark_mode");
}
