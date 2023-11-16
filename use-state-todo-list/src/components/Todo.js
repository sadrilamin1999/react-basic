import { useRef } from "react";
import { useState } from "react";

const Todo = () => {
  const [list, setList] = useState([]);
  const [item, setItem] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    list.push(item);
    setList([...list]);
    setItem("");
  };

  const deleteHandler = (index) => {
    list.splice(index, 1);
    setList([...list]);
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          value={item}
          onChange={(e) => setItem(e.currentTarget.value)}
          type="text"
          placeholder="item"
        />
        <button type="submit">Add Item</button>
      </form>

      <table>
        <tbody>
          {list.map((element, index) => (
            <tr>
              <td>{element}</td>
              <button onClick={() => deleteHandler(index)}>Delete</button>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Todo;
