document.addEventListener("click", (event) => {
  console.log("click");
});

document.addEventListener("mousemove", (event) => {
  console.log("mousemove", event.clientX, event.clientY);
});

document.addEventListener("keydown", (event) => {
  console.log("keydown", event.key);
});

document.addEventListener("keyup", (event) => {
  console.log("keyup", event.key);
});
