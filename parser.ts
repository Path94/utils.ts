export class Parser {
	private obj: Obj;

	constructor(obj: Obj) {
		this.obj = obj;
	}

	String(key: string): string {
		const v = this.obj[key];
		if (typeof v !== "string") {
			if (v !== undefined) {
				console.error("invalid value, expected string and received:", v);
			}

			return "";
		}

		return <string>v;
	}

	Number(key: string): number {
		const v = this.obj[key];
		if (typeof v !== "number") {
			if (v !== undefined) {
				console.error("invalid value, expected number and received:", v);
			}

			return 0;
		}

		return <number>v;
	}

	Boolean(key: string): boolean {
		const v = this.obj[key];
		if (typeof v !== "boolean") {
			if (v !== undefined) {
				console.error("invalid value, expected boolean and received:", v);
			}

			return false;
		}

		return <boolean>v;
	}

	Object(key: string): Obj {
		const v = this.obj[key];
		if (typeof v !== "object") {
			if (v !== undefined) {
				console.error("invalid value, expected object and received:", v);
			}

			return <Obj>{};
		}

		return <Obj>v;
	}

	Array<T>(key: string): T[] {
		const v = this.obj[key];
		if (!Array.isArray(v)) {
			if (v !== undefined) {
				console.error("invalid value, expected array and received:", v);
			}

			return [];
		}

		return <T[]>v;
	}
}

export type Obj = { [key: string]: any };
