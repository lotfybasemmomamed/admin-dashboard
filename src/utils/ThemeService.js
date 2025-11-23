export function setThemeMode(val = "light") {
  localStorage.setItem("mode", val);
}

export function getThemeMode() {
  return localStorage.getItem("mode") || "light";
}
