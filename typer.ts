export enum Types {
	Null,
	Undefined,
	Number,
	String,
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

	if (typeof val === "number") {
		return Types.Number;
	}

	if (typeof val === "string") {
		return Types.String;
	}

	if (typeof val !== "object") {
		console.error("unsupported type, please look into implementing:", val);
		return Types.Null;
	}

	const o = <{}>val;
	if (o.constructor === Array) {
		return Types.Array;
	}

	return Types.Object;
}

export function ToString(type: Types){
	switch(type){
		case Types.Null:
		break;
	}
}