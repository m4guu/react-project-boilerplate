import { screen } from 'config/tests/custom-render';

// PAGE ELEMENTS
export function getHomeHeader() {
  return screen.getByRole('heading', {
    name: /home/i,
  });
}
