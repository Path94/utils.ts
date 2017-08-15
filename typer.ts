export enum Types {
	Null,
	Undefined,
	Number,
	String,
	Boolean,
	Object,
	Array
}

export function Get(val: any): Types {
	if (val === null) {
		return Types.Null;
	}

	if (val === undefined) {
		return Types.Undefined;
	}

	switch (typeof val) {
		case "number":
			return Types.Number;
		case "string":
			return Types.String;
		case "boolean":
			return Types.Boolean;
		case "object":
			const o = <{}>val;
			if (o.constructor === Array) {
				return Types.Array;
			}

			return Types.Object;

		default:
			console.error("unsupported type, please look into implementing:", val);
			return Types.Null;
	}
}

export function ToString(type: Types) {
	switch (type) {
		case Types.Null:
			break;
	}
}