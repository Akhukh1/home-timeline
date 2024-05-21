import ViewMessage from '../js/viewmessage'

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
        (err) => {
          this.geoInput(err, messeageValue);
        }
      );
    }

  }

  geoInput(err, messeageValue) {
    // console.log('error');
    // console.log(err);

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
    formInput.setAttribute('pattern', '^[0-9]{2}.[0-9]{5},\ ?(-|[0-9])[0-9].[0-9]{5}');
    // formInput.setAttribute('pattern', '^\[?[0-9]{2}\.[0-9]{5}\,\ ?(\-|[0-9])[0-9]\.[0-9]{5}\]?$');
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

    console.log(Object.keys(ValidityState.prototype))

    const errors = {
      coords: {
        valueMissing: 'Введите координаты',
        patternMismatch: 'Введите координаты в нужном формате',
      },
    };




    // Object.keys(ValidityState.prototype)


    formCancel.addEventListener('click', (e) => {
      e.preventDefault();
      popUp.remove();
    });

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const elements = form.elements;

      const invalid = [...elements].some((el) => {
        return Object.keys(ValidityState.prototype).some((key) => {
          if (!el.name) return;
          if (key === 'valid') return;
          if (el.validity[key]) {
            console.log(errors[el.name][key]);
            el.setCustomValidity(errors[el.name][key]);
            return true;
          }
        });
      });

      console.log('invalid')
      console.log(invalid)

      if (invalid) {

        form.reportValidity();
      }

    //   if(form.checkValidity()) {
    //     form.reportValidity();
    //   } else {
    //     const messeage = new ViewMessage();
    //     messeage.renderMessage(messeageValue, formInput.value);
    //     popUp.remove();
    //  }

      const messeage = new ViewMessage();
      messeage.renderMessage(messeageValue, formInput.value);
      popUp.remove();


    });
  }

}
