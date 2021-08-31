import "./Items.css";
import Date from './Date'
import Card from "../Card/Card";
// import React,{ useState } from "react";

// const clicked = () => {console.log('clicked!')}

function Items(props) {
  // const [title, setTitle] = useState(props.title);
  // //const a = useState(props.title);

  // const clickHandler = () => {
  //   setTitle('asdasd');
  //   console.log(title);

  //   // console.log('the useState:',a);
  // };

  return (
    <Card className="expense-item">
      {/* //<div>{props.date.toISOString()}</div> */}
      <Date date ={props.date}/>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      {/* 使用 */}
      {/* <button onClick = {clickHandler}>Click</button> */}
    </Card>
  );
}

// function Items(props) {
//   return (
//     <div>
//       <div className="expense-item">{props.title}</div>
//       <div className="expense-item">{props.amount}</div>
//       <div className="expense-item">{props.date.toISOString()}</div>
//     </div>
//   );
// }

export default Items;

