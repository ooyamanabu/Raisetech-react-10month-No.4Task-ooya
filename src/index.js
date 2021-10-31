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
const { name, age } = userInfo; //{}で囲む　userName× name userAge× age 変数名ではなく、プロパティ名で取り出す。
console.log(name, age); //Griff 51
