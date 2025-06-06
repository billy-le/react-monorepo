import { render } from '@testing-library/react';

import Ui from './ui';

describe('Ui', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Ui data={['1', '2']} />);
    expect(baseElement).toBeTruthy();
  });
});
