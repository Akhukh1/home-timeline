test('test vflidate coords ", "', () => {
  const regex = /^\[?[0-9]{2}\.[0-9]{5}\,\ ?(\-|[0-9])[0-9]\.[0-9]{5}\]?$/;
  const str = '33.33333, 54.55555';
  const result = regex.test(str);
  expect(result).toEqual(true);
});

test('test vflidate coords ","', () => {
  const regex = /^\[?[0-9]{2}\.[0-9]{5}\,\ ?(\-|[0-9])[0-9]\.[0-9]{5}\]?$/;
  const str = '33.33333,54.55555';
  const result = regex.test(str);
  expect(result).toEqual(true);
});

test('test vflidate coords "[]"', () => {
  const regex = /^\[?[0-9]{2}\.[0-9]{5}\,\ ?(\-|[0-9])[0-9]\.[0-9]{5}\]?$/;
  const str = '[33.33333,54.55555]';
  const result = regex.test(str);
  expect(result).toEqual(true);
});

test('test vflidate coords "[1.222]"', () => {
  const regex = /^\[?[0-9]{2}\.[0-9]{5}\,\ ?(\-|[0-9])[0-9]\.[0-9]{5}\]?$/;
  const str = '[3.33333,54.55555]';
  const result = regex.test(str);
  expect(result).toEqual(false);
});

test('test vflidate coords "[]"', () => {
  const regex = /^\[?[0-9]{2}\.[0-9]{5}\,\ ?(\-|[0-9])[0-9]\.[0-9]{5}\]?$/;
  const str = '[]';
  const result = regex.test(str);
  expect(result).toEqual(false);
});