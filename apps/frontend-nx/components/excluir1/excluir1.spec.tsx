import { render } from '@testing-library/react';

import {Excluir1} from './excluir1';

describe('Excluir1', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Excluir1 />);
    expect(baseElement).toBeTruthy();
  });
});
