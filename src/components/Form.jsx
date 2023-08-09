import { useState } from "react";

export default function Form({onAddItems}){

    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState("");

    function handleSubmit(e){
      e.preventDefault();
      if(!description) return;
      if(quantity <= 0){
        alert("Please enter appropriate quantity!");
        setDescription("");
        setQuantity("");
      }
      else {
        const newItem = { 
          description, 
          quantity, 
          packed: false, 
          id: Date.now()
        };
        console.log(typeof Number("-1"));
        onAddItems(newItem);
        setDescription("");
        setQuantity("");
      }
    }
  
    return (
      <form className='add-form' onSubmit={handleSubmit}>
        <h3>What do you need for your 😍 trip ?</h3>
        <input 
          type='text' 
          placeholder='Quantity' 
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          style={{width: "150px"}}
        />
        <input 
          type='text' 
          placeholder='Item...' 
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button>ADD</button>
      </form>
    );
}