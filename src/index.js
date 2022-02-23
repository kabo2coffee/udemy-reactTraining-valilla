import "./styles.css";

const onClickAdd = () => {
  //テキストボックスの値を取得
  const inputText = document.getElementById("add_text").value;
  document.getElementById("add_text").value = "";

  //dev作成
  const div = document.createElement("div");
  div.className = "list_low";

  //li作成
  const li = document.createElement("li");
  li.innerText = inputText;

  //完了、削除ボタンを作成
  const completeButton = document.createElement("button");
  const deleteButton = document.createElement("button");
  completeButton.innerText = "完了";
  deleteButton.innerText = "削除";
  completeButton.addEventListener("click", () => {
    alert();
  });
  deleteButton.addEventListener("click", () => {
    alert();
  });

  //divタグの子に各要素を設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  //未完了のリストにdivを追加
  document.getElementById("incomplete_list").appendChild(div);
};

document
  .getElementById("add_button")
  .addEventListener("click", () => onClickAdd());
