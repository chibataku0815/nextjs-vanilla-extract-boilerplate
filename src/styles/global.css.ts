import { globalStyle } from '@vanilla-extract/css';

globalStyle('*, *::before, *::after', {
  boxSizing: 'border-box',
  margin: 0,
  padding: 0,
});

globalStyle('html', {
  fontSize: '100%',
});

globalStyle('body', {
  margin: 0,
});

globalStyle('#app', {});
