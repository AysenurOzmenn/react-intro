import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import { useState } from 'react';
import WorkShop from './Workshop';

//JSX => Javascript + Html => isim karışıklığı
function App() {

  //değiştiğinde UI'i update edecek değişken
  //useState => react fonksiyon (react hooks)
  let totalCount = 0;
  const [total, setTotal] = useState(0);

  const increase = () => {
    setTotal(total + 1);
  }
  const decrease = () => {
    setTotal(total - 1);
  }
  //useState
  //useEffect

  //inputtan değer okumak
  //listeyi jsx'de iterate etmek

  const[date,setDate] = useState(new Date());
  const[number, setNumber] = useState(10);

  const exampleFunction = (arg1) => {
    console.log(arg1)
    console.log("ex func çalıştı...")
  }

  return (
    <>
      {/*<p>Toplam Tıklanma Sayısı: {total}</p>
   <button onClick={increase}>+</button>
   <button onClick={decrease}>-</button>
  */}
      <WorkShop number={number} date={date} />
    </>
  );
}

export default App;
