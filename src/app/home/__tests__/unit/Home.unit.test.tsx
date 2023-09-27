import { render } from 'config/tests/custom-render';
import { Home } from '../../Home';
import { getHomeHeader } from 'app/home/__tests__/unit/constans';

describe('Home Page', () => {
  test('renders header', () => {
    render(<Home />);
    expect(getHomeHeader()).toBeInTheDocument();
  });
});
