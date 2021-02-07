import { createApi } from 'unsplash-js';

export default unsplash = createApi({
    accessKey: 'MY_ACCESS_KEY',
    // `fetch` options to be sent with every request
    headers: { 'X-Custom-Header': 'foo' },
  });