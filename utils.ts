import * as errors from "node_modules/errors.js/errors"

// RemoveElement will safely remove an element from the DOM
export function RemoveElement(e: HTMLElement) {
	const p = e.parentNode;
	if (p === null) {
		return;
	}

	p.removeChild(e);
}

export class Response<T> {
    Value: T;
    Error: errors.Error | null;

    constructor(value: T, err: errors.Error | null) {
        this.Value = value;
        this.Error = err;
    }
}
