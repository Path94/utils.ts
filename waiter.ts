export class Waiter {
	private done: resolveFn;
	private p: Promise<void>;
	private n: number;

	constructor() {
		this.done = () => { };
		this.p = new Promise<void>((resolve: resolveFn) => this.done = resolve);
		this.n = 0;
	}

	Add(n: number) {
		if (this.n === 0) {
			this.p = new Promise<void>((resolve: resolveFn) => this.done = resolve);
		}

		this.n += n;
	}

	Done() {
		if (this.n === 0) {
			console.error("Waiter: Done called too many times");
			return
		}

		this.n--;

		switch (this.n) {
			case 0:
				this.done();
				break;

			case -1:
				console.error("Waiter: Done called too many times");
				this.n = 0;
				break;
		}
	}

	async Wait() {
		await this.done;
	}
}

type resolveFn = () => void;