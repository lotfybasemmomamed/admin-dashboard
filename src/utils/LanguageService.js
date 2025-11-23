export function setLanguage(val = "EN") {
  localStorage.setItem("lang", val);
}

export function getLanguage() {
  return localStorage.getItem("lang") || "EN";
}
