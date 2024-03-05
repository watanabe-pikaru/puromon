
// ハンバーガーメニュー　-------------------------------------
const ham = document.querySelector("#js-hamburger");
const nav = document.querySelector("#js-nav");
const sp1 = document.querySelector("#js-sp1");
const sp2 = document.querySelector("#js-sp2");
const sp3 = document.querySelector("#js-sp3");


ham.addEventListener("click", function () {
    nav.classList.toggle("active");
    ham.classList.toggle("active");
    sp1.classList.toggle("active");
    sp2.classList.toggle("active");
    sp3.classList.toggle("active");
});


// モーダルウィンドウ　---------------------------------------
const buttonOpen1 = document.querySelector("#modalOpen1");
const buttonClose1 = document.querySelector(".modalClose1");
const modal1 = document.querySelector("#js-promon-modal1");

buttonOpen1.addEventListener("click",() => {
    //モーダル開く
    modal1.style.display = "block";
})

buttonClose1.addEventListener("click",() => {
    //モーダル閉じる
    modal1.style.display = "none";
})

const buttonOpen2 = document.querySelector("#modalOpen2");
const buttonClose2 = document.querySelector(".modalClose2");
const modal2 = document.querySelector("#js-promon-modal2");

buttonOpen2.addEventListener("click",() => {
    //モーダル開く
    modal2.style.display = "block";
})

buttonClose2.addEventListener("click",() => {
    //モーダル閉じる
    modal2.style.display = "none";
})

const buttonOpen3 = document.querySelector("#modalOpen3");
const buttonClose3 = document.querySelector(".modalClose3");
const modal3 = document.querySelector("#js-promon-modal3");

buttonOpen3.addEventListener("click",() => {
    //モーダル開く
    modal3.style.display = "block";
})

buttonClose3.addEventListener("click",() => {
    //モーダル閉じる
    modal3.style.display = "none";
})


// メモ帳　--------------------------------------------------

// テキストエリアとボタンの要素を取得
const memo = document.getElementById("js-memo");
const save = document.getElementById("js-save");
const load = document.getElementById("js-load");
const remove = document.getElementById("js-remove");

// セーブボタンが押されたときの挙動
save.addEventListener("click", () => {
  localStorage.setItem("js-memo", memo.value); // テキストをローカルストレージに保存
  alert("セーブしました"); // 保存完了のメッセージを表示
  document.getElementById("js-memo").value = "レポートに しっかり かきのこした！"; 
});

// つづきからボタンが押されたときの挙動
load.addEventListener("click", () => {
  memo.value = localStorage.getItem("js-memo"); // ローカルストレージからテキストを読み込み
  alert("ロードしました"); // 読み込み完了のメッセージを表示
});

// はじめからボタンが押されたときの挙動
remove.addEventListener("click", () => {
    memo.value = localStorage.removeItem("js-memo"); // ローカルストレージからテキストを削除
    alert("さくじょしました"); // 削除完了のメッセージを表示
    document.getElementById("js-memo").value = "レポートを  さくじょ しました。"; 
  });




