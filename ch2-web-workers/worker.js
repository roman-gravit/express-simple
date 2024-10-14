console.log('worker.js ->');
globalThis.onmessage = (msg) => {
	console.log('сообщение от main', msg.data);
	postMessage('сообщение, отправленное исполнителем');
};