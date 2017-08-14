export function Join(parts: string[]) {
	var str: string = "/";

	parts.forEach(function (part: string) {
		if(part.length === 0) {
			return
		}

		// Get rid of leading slash
		if (part[0] === "/") {
			part = part.substr(1);
		}

		// Ensure we have a trailing slash
		if (part[part.length - 1] !== "/") {
			part += "/";
		}

		str += part;
	});

	// Remove last trailing slash
	str = str.substr(0, str.length - 1);
	return str;
}