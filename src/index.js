import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  const div = document.createElement("div");
  // div.className = "list-row";
  console.log(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
