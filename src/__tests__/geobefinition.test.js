/**
 * @jest-environment jsdom
 */

import validator from '../js/validators';

test('test vflidate coords ", "', () => {
  const form = document.createElement('form');
  const popUpForm = document.body.appendChild(form);

  const input = document.createElement('input');
  const formInput = form.appendChild(input);

  const result = validator('33.33333, 54.55555', formInput);
  expect(result).toEqual(false);
});

test('test vflidate coords ","', () => {
  const form = document.createElement('form');
  const popUpForm = document.body.appendChild(form);

  const input = document.createElement('input');
  const formInput = form.appendChild(input);

  const result = validator('33.33333,54.55555', formInput);
  expect(result).toEqual(false);
});

test('test vflidate coords "[]"', () => {
  const form = document.createElement('form');
  const popUpForm = document.body.appendChild(form);

  const input = document.createElement('input');
  const formInput = form.appendChild(input);

  const result = validator('[33.33333,54.55555]', formInput);
  expect(result).toEqual(false);
});

test('test vflidate coords "[, ]"', () => {
  const form = document.createElement('form');
  const popUpForm = document.body.appendChild(form);

  const input = document.createElement('input');
  const formInput = form.appendChild(input);

  const result = validator('[33.33333, 54.55555]', formInput);
  expect(result).toEqual(false);
});

test('test vflidate coords "[, -1]"', () => {
  const form = document.createElement('form');
  const popUpForm = document.body.appendChild(form);

  const input = document.createElement('input');
  const formInput = form.appendChild(input);

  const result = validator('[33.33333, -4.55555]', formInput);
  expect(result).toEqual(false);
});

test('test vflidate coords "[,-1]"', () => {
  const form = document.createElement('form');
  const popUpForm = document.body.appendChild(form);

  const input = document.createElement('input');
  const formInput = form.appendChild(input);

  const result = validator('[33.33333,-4.55555]', formInput);
  expect(result).toEqual(false);
});

test('test vflidate coords "[1.22222]"', () => {
  const form = document.createElement('form');
  const popUpForm = document.body.appendChild(form);

  const input = document.createElement('input');
  const formInput = form.appendChild(input);

  const result = validator('[3.33333,54.55555]', formInput);
  expect(result).toEqual(true);
});

test('test vflidate coords "[11.22222, 1.22222]"', () => {
  const form = document.createElement('form');
  const popUpForm = document.body.appendChild(form);

  const input = document.createElement('input');
  const formInput = form.appendChild(input);

  const result = validator('[33.33333,4.55555]', formInput);
  expect(result).toEqual(true);
});

test('test vflidate coords "1.22222"', () => {
  const form = document.createElement('form');
  const popUpForm = document.body.appendChild(form);

  const input = document.createElement('input');
  const formInput = form.appendChild(input);

  const result = validator('3.33333,54.55555', formInput);
  expect(result).toEqual(true);
});

test('test vflidate coords "11.22222, 1.22222"', () => {
  const form = document.createElement('form');
  const popUpForm = document.body.appendChild(form);

  const input = document.createElement('input');
  const formInput = form.appendChild(input);

  const result = validator('33.33333,4.55555', formInput);
  expect(result).toEqual(true);
});

