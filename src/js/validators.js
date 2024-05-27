export default function validator(value, formInput) {
  if (/^[0-9]{2}.[0-9]{5},\ ?(-|[0-9])[0-9].[0-9]{5}$/.test(value) ||
    /^\[[0-9]{2}.[0-9]{5},\ ?(-|[0-9])[0-9].[0-9]{5}\]$/.test(value)) {
    return false;
  } else if (value === '') {
    formInput.setCustomValidity('Введите координаты');
    return true;
  } else {
    formInput.setCustomValidity('Введите координаты в нужном формате');
    return true;
  }
}