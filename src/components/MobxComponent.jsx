import React from 'react';
import { todoStore } from '../app/TodoStore';
import { observableTodoStore } from '../app/ObservableTodoStore';

const handleClick = () => {
  todoStore.addTodo('read MobX tutorial');
  console.log(todoStore.report());

  todoStore.addTodo('try MobX');
  console.log(todoStore.report());

  todoStore.todos[0].completed = true;
  console.log(todoStore.report());

  todoStore.todos[1].task = 'try MobX in own project';
  console.log(todoStore.report());

  todoStore.todos[0].task = 'grok MobX tutorial';
  console.log(todoStore.report());
};

const handleClickObservable = () => {
  observableTodoStore.addTodo('read MobX tutorial');
  observableTodoStore.addTodo('try MobX');
  observableTodoStore.todos[0].completed = true;
  observableTodoStore.todos[1].task = 'try MobX in own project';
  observableTodoStore.todos[0].task = 'grok MobX tutorial';
};

export default function MobxComponent() {
  return (
    <div>
      <button onClick={handleClick}>Run code</button>
      <button onClick={handleClickObservable}>Run code(Observable)</button>
    </div>
  );
}
