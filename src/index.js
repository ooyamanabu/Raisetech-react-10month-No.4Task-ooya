import "./styles.css";

//~分割代入~(配列編)
//従来
const list = ["a", "b"];
const item0 = list[0]; //0から始まるためaが入る
const item1 = list[1]; //bが入る
//このようにしてひとつづつ変数を指定して配列から値を取り出すのが従来のやり方
console.log(item0, item1); //a b が表示
//分割
const list1 = ["a", "b"]; //同様に定義
const [item2, item3] = list1; //宣言の際に[]で囲む
console.log(item2, item3);
//配列の入った変数をひとつづつばらけさせずまとめて書くやり方　　書く手間が省ける

//(オブジェクト編）
//従来
const userInfo = {
  name: "Griff",
  age: "51" //プロパティ名：値
}; //普通に定義
const userName = userInfo.name;
const userAge = userInfo.age;
console.log(userName, userAge); //Griff 51 表示
//分割
const { name, age } = userInfo; //変数userInfoは{}で定義したのでこちらの変数も{}で囲む　userName× name userAge× age 変数名ではなく、プロパティ名で取り出す。
console.log(name, age); //Griff 51
//配列の場合は0オリジンの順序に従って値が割り当てられるので[]内の順番通りに取り出されていたが、オブジェクトの場合はプロパティ名に割り当てられているため()内の書く順番が前後しても取り出す値は変わらない

const userJnfo = {
  name: "鬼太郎",
  age: "∞"
};
const { name: newName, age: newAge } = userJnfo; //プロパティ名を変更して扱いたい場合 :の後に別名をつけることができる(変数名が重複して取り出せないことがあるため)
console.log(newName, newAge); //鬼太郎　　∞

//デフォルト値
const userhnfo = {
  ages: "20"
}; //プロパティが設定されていない値を取り出したい場合(この場合オブジェクトにagesの”２０”しか値はない)
const { names = "ゲスト", ages } = userhnfo; //こちらで新たに(この場合namesの”ゲスト”)設定することができる
console.log(names, ages); //ゲスト　２０　（分割代入で新たに設定しないとundefind等が出てしまうため必ず入れよう）

const welcomeMessage = (username = "ゲスト") => {
  const message = `こんにちは、${username}さん`;
  console.log(message);
};
//引数を新たに設定、渡すと書き換わる
welcomeMessage("山田"); //こんにちは、山田さん
//引数が渡されなければ、最初の引数(ゲスト)が返されて文字列と合わせて表示される
welcomeMessage(); //こんにちは、ゲストさん

//〜スプレッド構文〜
//配列
const list2 = ["a", "b"];
console.log(list2); //通常通り配列が取り出される["a","b"]
console.log(...list2); //配列から中身が順番に取り出される a b

const list3 = [1, 2, 3, 4, 5];
const [num01, num02, ...sublist] = list3;
console.log(list3); //[1,2,3,4,5,]
console.log(...list3); //1 2 3 4 5
console.log(
  num01,
  num02,
  sublist
); /*この場合ひとつづつ取り出す用に指定をした変数以降にスプレッド構文を一つ書いているためそれ以降残った値が一塊の配列として取り出される
　1 2 [3,4,5]/

//配列のコピー
const list4 = [1, 2];
const list5 = [3, 4];

const list6 = [...list4];
console.log(list6); //配列を新たな変数に入れてそのままコピーできる[1,2]

const list7 = [...list4, ...list5];
console.log(list7); //別々の値が入った変数を新たな変数に入れ結合して一塊にできる　 [1,2,3,4] (スプレッド構文を使わないと[1,2][3,4]になってしまい結合できない)

//オブジェクト
const obj1 = {
  title: "t1",
  content: "c1"
};
const obj2 = { ...obj1 };
console.log(
  obj2
); /* {title: "t1", content: "c1"}  obj1をスプレッド構文にせず変数名だけで代入してもこの場合同じ結果が表示されるが、
後にobj2だけの値を書き換えたい場合スプレッド構文にしておかないとobj1の値も同じように書き変わってしまうためこの書き方をした方が良い 現時点で配列においては変数ごとに参照できるようにしておくのが吉*/

//省略する書き方
const name1 = "庄司";
const age1 = 20;

//通常記法
/*const userInfom = {
  name1 : name1, age1 : age1
};*/

//省略記法
const userInfom = {
  name1,
  age1
}; //プロパティ名と変数名が同一ならば省略して書ける。新たに別の変数に入れ直す必要がない
console.log(userInfom); // {name1:"庄司", age1: 20}

//配列　map関数
//配列の中身を処理して新しい配列を作り出す
const list8 = [1, 2, 3, 4, 5]; //まずは配列を用意

const list9 = list8.map((item, index) => {
  //map()というように　かっこの中に関数処理を書いていく, itemにmap関数の仕様で順番に値が入る
  console.log(`要素：${item}`, `index:${index}`);
  return item * 2;
}); //引数の()内にアロー関数の処理が書いてある
console.log(list9); //()で呼び出すので、map関数の処理を代入した新たな変数名を書く
/*要素：1 index:0 
  要素：2 index:1 
  要素：3 index:2 
  要素：4 index:3 
  要素：5 index:4 
(5) [2, 4, 6, 8, 10]*/

//filter
//条件の一致したものだけを取り出す
const list10 = [10, 50, -40, 85, 100, 70];
const list11 = list10.filter((item, index) => {
  console.log(`要素：${item}`, `index:${index}`);
  return (
    item >= 60
  ); /*itemの中にある60以上の値(true判定されたもの）を返す 
  条件(この場合return)を書かないと 中身の要素の羅列だけで[]内は空のものしか返ってこない*/
});
console.log(list11);
/*要素：10 index:0 
  要素：50 index:1 
  要素：-40 index:2 
  要素：85 index:3 
  要素：100 index:4 
  要素：70 index:5
(3) [85, 100, 70,]*/

//Null合体演算子
//左側がnullかundefinedだったら右側の値が返され、それ以外ならばその時点で左側の値が返される
let defaultMessage = "エラー無し";
let errorMessage = null;

let message = errorMessage ?? defaultMessage; //左null
console.log(message); //エラー無し

errorMessage = undefined;
message = errorMessage ?? defaultMessage; //左undefined
console.log(message); //エラー無し

errorMessage = "";
message = errorMessage ?? defaultMessage; //左false 空文字
console.log(message); //""

const emptyStr = "";
const zero = 0;
const emptyArr = [];
const nullVal = null;
const undefinedVal = undefined;

emptyStr ?? console.log("A"); //
emptyStr || console.log("B"); //false []空文字
zero ?? console.log("C"); //
zero || console.log("D"); //false ０　値がゼロ
emptyArr ?? console.log("E"); //
emptyArr || console.log("F"); //
nullVal ?? console.log("G"); // null
nullVal || console.log("H"); //null
undefinedVal ?? console.log("I"); //undefined
undefinedVal || console.log("J"); //undefined
//B D G H I J

//クラス構文
/*情報を表示するまでに必要な処理を、ひとまとめにしてあるようなイメージ
reactを使用する際には使わなくても同じことができたりするが、メソッドは理解しておこう*/
class User {
  //クラス名は頭文字大文字推奨
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`こんにちは!${this.name}です〜`);
  }
}
const user = new User("エリー", 38);
console.log(user.name); //エリー
user.greet(); //こんにちは！エリーです〜

//JavaScriptによるDOMアクセス(javascriptからhtmlの中身を取得する)
const title = document.getElementById("title"); //idはひとつのタグごとに名前をつける　(element)
const contents = document.getElementsByClassName("content"); //classは中身が複数ある場合もある　(elements 複数形）
console.log("タイトル要素", title);
console.log("コンテンツ要素", contents);

//タイトル要素
//<h2 id="title">フロントエンドコース</h2>

//コンテンツ要素
/*HTMLCollection {0: HTMLDivElement, 1: HTMLDivElement, length: 2, item: ƒ item(), namedItem: ƒ namedItem()…}
0: 
<div class="content">…</div>
1: 
<div class="content">…</div>
length: 2
item: ƒ item() {}
namedItem: ƒ namedItem() {}
<constructor>: "HTMLCollection"*/

/* その他にも、getElementsByTagName,querySelector,querySelectorAll etc...がある
DOM要素内のHTMLマークアップへのアクセス　　div.innnerHTML
親要素へのアクセス　　　　div.parentNode
子要素へのアクセス　　　div.children
etc... */

const conten = document.createElement("div"); //divタグ生成
conten.innerHTML = "<p>SPAとは</p>"; //そのdivタグの中にpタグを生成
const contenu = document.getElementById("contents"); //HTMLのdivタグ id名contentsの中に
contenu.appendChild(conten); //contenのpタグが新たに挿入生成される
//HTMLにdivタグ、その中にpタグが作られ"SPAとは"がHTMLに新たに生成され表示される:

//DOMの削除(↑上記でcontentsタグの中身を取得した変数contenuを削除)
//contenu.remove();

//Javascriptとイベント
const button = document.getElementById("myButton");
button.addEventListener("click", () => {
  //第1引数にイベント（"click")
  alert("クリックされました"); //第2引数にイベントハンドラー（関数　中身の処理）
}); //ここでは使用してないが第3引数（useCapture)も設定可

/*ボタン発生イベント（htmlに書かれたボタンタグを使ってイベントを起こす）
ボタンをクリックした際にポップアップでアラートが出てくるイベント*/

const input = document.getElementById("inputId");
document.addEventListener("change", (event) => {
  console.log(event.target.value);
}); //入力された値がconsoleに表示される

//changeイベント（今回はテキストボックスに入力した値が変更した場合）
