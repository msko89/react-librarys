import { rest } from 'msw';

const todos = [
  {
    id: '1',
    title: 'title1',
  },
  {
    id: '2',
    title: 'title2',
  },
  {
    id: '3',
    title: 'title3',
  },
  {
    id: '4',
    title: 'title4',
  },
  {
    id: '5',
    title: 'title5',
  },
];

export const handlers = [
  rest.post('/api/todos', (req, res, ctx) => {
    const { todo } = req.body;
    todos.push(todo);
    return res(ctx.json(true));
  }),
  rest.get('/api/todos', (req, res, ctx) => {
    return res(ctx.json(todos));
  }),
  rest.get('/api/user/:userId', (req, res, ctx) => {
    const { userId } = req.params;
    return res(
      ctx.json({
        name: `ko ${userId}`,
      })
    );
  }),
  rest.get('/login', (req, res, ctx) => {
    return res(
      ctx.json({
        id: 'f79e82e8-c34a-4dc7-a49e-9fadc0979fda',
        firstName: 'John',
        lastName: 'Maverick',
      })
    );
  }),
  rest.put('/counter/increment', (req, res, ctx) => {
    const { value } = req.body;
    return res(
      ctx.json({
        value: value + 2,
      })
    );
  }),
];
