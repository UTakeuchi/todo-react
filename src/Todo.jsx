import { useState } from 'react';
import './Todo.css';
// import { InputTodo } from './components/InputTodo';
// import { IncompleteTodos } from './components/IncompleteTodo';
// import { CompleteTodos } from './components/CompleteTodo';

export const Todo = () => {
  const [todoText, setTodoText] = useState('');
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);

  const onChangeTodoText = (event) => setTodoText(event.target.value);
  const onClickAdd = () => {
    if (todoText === '') return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText('');
  };
  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };
  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);

    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };
  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);

    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };

  return (
    <>
      {/* <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
      /> */}
      <div className="input-area">
        <input
          placeholder="TODOを入力"
          value={todoText}
          onChange={onChangeTodoText}
        />
        <button onClick={onClickAdd}>追加</button>
      </div>
      {/* <IncompleteTodos
        todos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      /> */}
      <div className="incomplete-area">
        <p className="title">未完了のTodo</p>
        <ul>
          {incompleteTodos.map((todo, index) => (
            <li key={todo}>
              <div className="list-row">
                <p className="todo-item">{todo}</p>
                <button onClick={() => onClickComplete(index)}>完了</button>
                <button onClick={() => onClickDelete(index)}>削除</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {/* <CompleteTodos todos={CompleteTodos} onClickBack={onClickBack} /> */}
      <div className="complete-area">
        <p className="title">完了のTodo</p>
        <ul>
          {CompleteTodos.map((todo, index) => (
            <li key={todo}>
              <div className="list-row">
                <p className="todo-item">{todo}</p>
                <button onClick={() => onClickBack(index)}>戻す</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
