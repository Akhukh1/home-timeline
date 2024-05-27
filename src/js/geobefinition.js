import ViewMessage from '../js/viewmessage';
import validator from './validators';

export default class GeoBefinition {
  befinition(messeageValue) {
    const callbakErr = () => {
      this.geoInput();
    }
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
         (data) => {
          const { latitude, longitude } = data.coords;

          const str = '[' + latitude.toFixed(5) + ', ' + longitude.toFixed(5) + '] ';
          
          const messeage = new ViewMessage();
          messeage.renderMessage(messeageValue, str);

        },
        () => {
          this.geoInput(messeageValue);
        }
      );
    }

  }

  geoInput(err, messeageValue) {
    let div = document.createElement('div');
    const popUp = document.body.appendChild(div);
    popUp.classList.add('popup');

    const form = document.createElement('form');
    const popUpForm = popUp.appendChild(form);
    popUpForm.setAttribute('novalidate', '');
    popUpForm.classList.add('popup-input');

    div = document.createElement('div');
    let formText = popUpForm.appendChild(div);
    formText.classList.add('form-text');
    formText.textContent = 'Что то пощло не так';

    div = document.createElement('div');
    formText = popUpForm.appendChild(div);
    formText.classList.add('form-text');
    formText.textContent = 'К сожалению, нам не удалось определить ваше местоположение, пожалуйста, дайте рахрешение на использование геолокации, либо введите координаты вручную.';

    div = document.createElement('div');
    formText = popUpForm.appendChild(div);
    formText.classList.add('form-text');
    formText.textContent = 'Широта и долгота через запятую';

    const input = document.createElement('input');
    const formInput = popUpForm.appendChild(input);
    formInput.setAttribute('name', 'coords');

    formInput.required = true;
    formInput.classList.add('form-input');

    const formButtonsContainer = document.createElement('div');
    const formButtons = popUpForm.appendChild(formButtonsContainer);
    formButtons.classList.add('form-buttons');

    let button = document.createElement('button');
    const formCancel = formButtons.appendChild(button);
    formCancel.setAttribute('type', 'button');
    formCancel.textContent = 'Отмена';
    formCancel.classList.add('cancel-btn');

    button = document.createElement('button');
    const formSubmit = formButtons.appendChild(button);
    formSubmit.setAttribute('type', 'submit');
    formSubmit.textContent = 'ОК';
    formSubmit.classList.add('submit-btn');

    const errors = {
      coords: {
        valueMissing: 'Введите координаты',
        patternMismatch: 'Введите координаты в нужном формате',
      },
    };

    formCancel.addEventListener('click', (e) => {
      e.preventDefault();
      popUp.remove();
    });

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const invalid = validator(formInput.value, formInput);
      if (invalid) {
        form.reportValidity();
      } else {
        const messeage = new ViewMessage();
        messeage.renderMessage(messeageValue, formInput.value);
        popUp.remove();
      }

    });
  }

}
