function unselectAll() {
  const elements = document.querySelectorAll('.SelectedBox');
  elements.forEach(e => e.classList.remove("SelectedBox"));
}

function selectTip(element) {
  unselectAll();
  element.classList.add("SelectedBox");
}

function handleSubmit() {
  alert("Thank you for your tip!");
}
