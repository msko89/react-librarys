import React from 'react';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { getTodos, postTodo } from '../my-api';

export default function Todos() {
  const queryClient = useQueryClient();

  // Queries
  const query = useQuery('todos', getTodos);

  // Mutations
  const mutation = useMutation(postTodo, {
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries('todos');
    },
  });

  if (query.isLoading) return 'Loading...';
  if (query.error) return 'Error...';

  return (
    <div>
      <ul>
        {query.data.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>

      <button
        onClick={() => {
          mutation.mutate({
            id: Date.now(),
            title: 'Do Laundry',
          });
        }}
      >
        Add Todo
      </button>
    </div>
  );
}
