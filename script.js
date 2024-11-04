function clickButton() {
  console.log("hi");
  let button = document.getElementsByTagName("button")[0];
  button.textContent =
    "Click below to pet hungy tiger - Pets: " + (parseInt(button.textContent.split(" ")[8]) + 1);
}
