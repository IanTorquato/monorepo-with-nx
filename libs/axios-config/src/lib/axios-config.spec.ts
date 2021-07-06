import { axiosConfig } from './axios-config';

describe('axiosConfig', () => {
  it('should work', () => {
    expect(axiosConfig()).toEqual('axios-config');
  });
});
