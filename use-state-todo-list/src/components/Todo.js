import { useState } from "react";

const Todo = () => {
  const [list, setList] = useState([]);
  const [item, setItem] = useState("");

  const changeHandler = (e) => {
    setItem(e.target.value);
  };

  const addListHander = () => {
    list.push(item);
    setList([...list]);
  };
  const removeHandler = (index) => {
    list.splice(index, 1);
    setList([...list]);
  };

  return (
    <div>
      <table>
        <tbody>
          {list.map((element, index) => {
            return (
              <tr>
                <td>{element}</td>
                <td>
                  <button onClick={() => removeHandler(index)}>Remove</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <input type="text" onChange={changeHandler} />
      <button onClick={addListHander} type="submit">
        Add
      </button>
    </div>
  );
};

export default Todo;
