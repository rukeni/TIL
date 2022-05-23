import { render, screen } from '@testing-library/react';
import { rest } from 'msw';
import { server } from '../../../mocks/server';
import OrderEntry from '../OrderEntry';

test('handles error for scoops and toppings routes', async () => {
  server.resetHandlers(
    rest.get('http://localhost:3030/scoops', (req, res, ctx) => {
      res(ctx.status(500))
    }),
    rest.get('http://localhost:3030/toppings', (req, res, ctx) => {
      res(ctx.status(500))
    }),
  );

  render(<OrderEntry />)

  const alerts = await screen.finAllByRole('alert', {name: 'An unexpected error occured. Please try again later.'});

  expect(alerts).toHaveLength(2);
})

test('not a real test', () => {

})
