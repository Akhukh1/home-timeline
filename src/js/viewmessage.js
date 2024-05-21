import GeoBefinition from '../js/geobefinition';

export default class ViewMessage {
  renderMessage(messeageValue, coordsStr) {
    const root = document.getElementById('root');
    const div = document.createElement('div');
    const messContainer = [...document.querySelectorAll('.mess-container')];
    div.classList.add('mess-container');

    if (messContainer.length === 0) {
      const container = root.insertBefore(div, document.querySelector('.form-cotauner'));
      this.messageContent(container, messeageValue, coordsStr);
    } else {
      const container = root.insertBefore(div, messContainer[0]);
      this.messageContent(container, messeageValue, coordsStr);
    }
  }

  messageContent(container, messeageValue, coordsStr) {
    const now = new Date();
    const ms = Date.parse(now);
    const dateStr = new Date(ms).toLocaleString();

    let div = document.createElement('div')
    const data = container.appendChild(div);
    data.classList.add('data');
    data.textContent = dateStr;

    div = document.createElement('div');
    const text = container.appendChild(div);
    text.classList.add('text');
    text.textContent = messeageValue;

    div = document.createElement('div');
    const coords = container.appendChild(div);
    coords.classList.add('coords');
    coords.textContent = coordsStr;
  }
}