export function Append<T>(a: T[], b: T[]): T[] {
	if (!a && !!b) {
		return b;
	}

	if (!b || b.length === 0) {
		return a;
	}

	b.forEach(function (t: T) {
		a.push(t);
	});

	return a;
}