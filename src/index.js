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
