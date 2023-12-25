import { useState } from "react";

function WorkShop(props) {
    //Listeyi oluştur
    //Ekleme fonksiyonu
    //Çıkarma fonksiyonu
    //Diğer İşlemler..

    console.log(props)

    const [activity, setActivity] = useState("");
    const [todoList, setTodoList] = useState(["Aktivite 1", "Aktivite 2"]);

    const add = () => {
        //validation
        setTodoList([...todoList, activity]);
    }

    const remove = () => {
        let newList = todoList.filter(todo => todo !== activity);
        setTodoList(newList);
    }


    //Two way Data Binding
    return <div className='center'>
        <input value = {activity} onChange={(event) => {setActivity(event.target.value)}} type='text' />
        <button onClick={() => { add();}} type='button'>Ekle</button>
        <ul>
            {todoList.map(todo => <li key={todo}>{todo} <button onClick={() => {remove(todo);}}>X</button></li>)}
        </ul>

        <button onClick={ () => {props.func("deneme");}}>App.js'deki fonks çalıştır</button>
    </div >
}

export default WorkShop;