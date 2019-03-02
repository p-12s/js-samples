const ws = new WebSocket('ws://localhost:8080');

const form = document.querySelector('#send');
const message = document.querySelector('#message');

form.addEventListener('submit', e => {
  e.preventDefault();
  ws.send(message.value);
});

ws.onmessage = function (e) {
  const message = JSON.parse(e.data);
  let text = '';
  
  switch (message.type) {
    case 'info': // информационное сообщение
      text = message.message;
      break;
    
    case 'message': // сообщение автора
      text = `${message.author} : ${message.message}`;
      break;
    
      default:
      alert(message.message);
      break;
  }

  const result = document.querySelector('#subscribe');
  const elMsg = document.createElement('div');
  elMsg.textContent = text;
  
  result.appendChild(elMsg);
};
