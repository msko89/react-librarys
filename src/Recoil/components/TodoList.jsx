import React from 'react';
import { useRecoilValue } from 'recoil';
import { todoListState, filteredTodoListState } from '../todoStore';
import TodoItemCreator from './TodoItemCreator';
import TodoItem from './TodoItem';
import TodoListStats from './TodoListStats';
import TodoListFilters from './TodoListFilters';

export default function TodoList() {
  // const todoList = useRecoilValue(todoListState);
  const todoList = useRecoilValue(filteredTodoListState);

  return (
    <>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />

      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </>
  );
}
