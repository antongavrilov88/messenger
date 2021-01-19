/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
export function socketHandler(path: string) {
	const socket = new WebSocket(`wss://ya-praktikum.tech/ws/chats${path}`);

	socket.addEventListener('open', () => {
		console.log('Соединение установлено');

		socket.send(JSON.stringify({
			content: 'Моё первое сообщение миру!',
			type: 'message'
		}));
	});

	socket.addEventListener('close', event => {
		if (event.wasClean) {
			console.log('Соединение закрыто чисто');
		} else {
			console.log('Обрыв соединения');
		}

		console.log(`Код: ${event.code} | Причина: ${event.reason}`);
	});

	// Socket.addEventListener('error', event => {
	// 	console.log('Ошибка', event.message ? event.message : null);
	// });
	return socket;
}
