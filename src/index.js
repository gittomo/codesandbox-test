import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  const div = document.createElement("div");
  // div.className = "list-row";

  div.className = "list-row";
  //liタグ生成
  const li = document.createElement("li");
  li.innerText = inputText;

  div.appendChild(li);
  document.getElementById("incomplete-list").appendChild(div);
  console.log(div);

  // const completeButton = document.createElement("button");
  // completeButton.innerText = "完了";

  // const deleteButton = document.createElement("button");
  // deleteButton.innerText = "削除";

  // div.appendChild(li);

  // div.appendChild(completeButton);
  // div.appendChild(deleteButton);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
