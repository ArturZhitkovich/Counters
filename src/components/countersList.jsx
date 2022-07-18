import React, {useState} from "react";
import Counter from "./counter";

const CounterList = () => {
  const initialState = [
    {id:0, value:0, name: "Ненужная вещь"},
    {id:1, value:4, name: "Ложка"},
    {id:2, value:0, name: "Вилка"},
    {id:3, value:4, name: "Тарелка"},
    {id:4, value:0, name: "Набор минималиста"},
  ];

  const [counters, setCounters] = useState(initialState);
  
  const handleDelete = (id) => {
    const newCounters = counters.filter(counter => counter.id !== id);
    
    setCounters(newCounters);
  }
  
  const handleReset = () => {
    setCounters(initialState);
  }

  const handleIncrement = (id) =>{
    const updatedState = [...counters];
    
    updatedState[id].value += 1;
    
    setCounters(updatedState);
  }

  const handleDecrement = (id) =>{
    const updatedState = [...counters];
    
    if (updatedState[id].value > 0) {
      updatedState[id].value -=1;
      setCounters(updatedState);
    }
  }

  return (
    <>
      {counters.map(counter => (
        <Counter
          key={counter.id}
          {...counter} 
          onDelete={handleDelete}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
        />
      ))}
      <button className="btn btn-primary btn-sm m-2" onClick={handleReset}>Сброс</button>
    </>
  )
}

export default CounterList;
