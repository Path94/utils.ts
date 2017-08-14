import * as errors from "node_modules/errors.js/errors"

export class Response<T> {
    Value: T;
    Error: errors.Error | null;

    constructor(value: T, err: errors.Error | null) {
        this.Value = value;
        this.Error = err;
    }
}
