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

  //完了ボタン
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    //押下された完了ボタンの親タグを未完了リストから削除
    deleteFromIncompleteList(completeButton.parentNode);

    //完了リストに追加するdom生成
    const addTarget = completeButton.parentNode;
    const text = addTarget.firstElementChild.innerText;
    //追加するdivタグを初期化
    addTarget.textContent = null;
    //要素を詰める
    const li = document.createElement("li");
    li.innerText = text;
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);
    //完了エリアに追加する
    document.getElementById("comlete_list").appendChild(addTarget);
  });

  //削除ボタン
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //押下された削除ボタンの親タグを未完了リストから削除
    deleteFromIncompleteList(deleteButton.parentNode);
  });

  //divタグの子に各要素を設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  //未完了のリストにdivを追加
  document.getElementById("incomplete_list").appendChild(div);
};

//未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete_list").removeChild(target);
};

document
  .getElementById("add_button")
  .addEventListener("click", () => onClickAdd());
