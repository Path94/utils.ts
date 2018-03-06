import * as errors from "node_modules/errors.js/errors";

// Response is a common response struct-type
export class Response<T> {
	Value: T;
	Error: errors.Error | null;

	constructor(value: T, err: errors.Error | null) {
		this.Value = value;
		this.Error = err;
	}
}

// RemoveElement will safely remove an element from the DOM
export function RemoveElement(e: Child) {
	const p = e.parentNode;
	if (p === null) {
		return;
	}

	p.removeChild(e);
}

// IsContainedWithin will detect if an element is contained within a parent
export function IsContainedWithin(parent: HTMLElement, child: HTMLElement): boolean {
	if (child === parent) {
		return true;
	}

	while (child.parentElement !== null) {
		if (parent === child.parentElement) {
			return true;
		}

		child = child.parentElement;
	}

	return false;
}

export async function Wait(ms: number) {
	let done: () => void;
	const p = new Promise<void>((res: () => void) => done = res);
	setTimeout(() => done(), ms);
	await p;
}

export interface Parent {
	appendChild(child: Child): void
	insertBefore(child: Child, before: Child | null): void
}

export type Child = HTMLElement | DocumentFragment | SVGElement | Node;

export class KV<T> {
	readonly key: string;
	readonly value: T;

	constructor(key: string, value: T) {
		this.key = key;
		this.value = value;
	}
}

export type Waiter = Promise<void>;

