import { rest } from 'msw';

export const handlers = [
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
