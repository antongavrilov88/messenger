type Сallback = (...args: any) => void
class EventBus {
	listeners: Record<string, Сallback[]>
	constructor() {
		this.listeners = {};
	}

	on(event: string, callback: Сallback) {
		if (!this.listeners[event]) {
			this.listeners[event] = [];
		}

		this.listeners[event].push(callback);
	}

	off(event: string, callback: Сallback) {
		if (!this.listeners[event]) {
			throw new Error(`Нет события: ${event}`);
		}

		this.listeners[event] = this.listeners[event].filter(
			listener => listener !== callback
		);
	}

	emit(event: string, ...args: object[]) {
		if (!this.listeners[event]) {
			throw new Error(`Нет события: ${event}`);
		}

		this.listeners[event].forEach(function (listener) {
			listener(...args);
		});
	}
}

export default EventBus;
