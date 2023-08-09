export default function Item({item, onDeleteItem, onToggleItem}){
    return (
      <li>
        <input 
          type='checkbox' 
          value={item.packed}
          onChange={() => onToggleItem(item.id)}
        />
        <span style={item.packed ? {textDecoration: 'line-through'} : {}}>
          {item.quantity} {item.description}
        </span>
        <div className="delete-container" onClick={()=>onDeleteItem(item.id)}>
          <i class="uil uil-trash-alt delete-icon"></i>
        </div>
      </li>
    )
}