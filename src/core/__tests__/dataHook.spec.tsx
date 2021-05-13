import { renderHook, act } from '@testing-library/react-hooks';
import 'whatwg-fetch';
import fetchMock from 'fetch-mock';
import CacheStorage from '../../__mocks__/CacheStorage';

// import { act } from 'react-test-renderer';

import GetDataHook from '../dataHook';

describe.skip('API call and cache hook', () => {
  const API_URL = 'http://nowhere.dev';

  beforeAll(() => {
    global.fetch = fetch;
    global.caches = new CacheStorage();
  });
  afterAll(() => {
    fetchMock.restore();
  });
  it('Should make a fake API call', async () => {
    let apiTest = 'http://nowhere.dev';
    fetchMock.mock(API_URL, {
      returnedData: [{
        foo: 'bar',
      }],
    });
    const { result } = renderHook(() => GetDataHook({
      url: apiTest,
    }));
    expect(result.current.isLoading).toBeTruthy();
    await act(async () => {
      apiTest = 'anotherhook';
      const data = await result.current.response?.data;
      console.log('data returned', data);
    });
  });
});
