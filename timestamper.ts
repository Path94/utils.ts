const secondMS = 1000;
const minuteMS = secondMS * 60;
const hourMS = minuteMS * 60;

export function Now(): number {
	return Math.round(Date.now() / 1000);
}

export function GetDelta(ts: number): number {
	const delta = Now() - ts;
	return delta;
}

export function GetSeconds(delta: number): string {
	if (delta === 1) {
		return "1 second ago"
	}

	return delta.toFixed(0) + " seconds ago";
}

export function GetMinutes(delta: number): string {
	let mins = Math.floor(delta / 60);
	if (mins === 1) {
		return "1 minute ago"
	}

	return mins.toFixed(0) + " minutes ago";
}

export function GetHours(delta: number): string {
	let hours = Math.floor(delta / 3600);
	if (hours === 1) {
		return "1 hour ago"
	}

	return hours.toFixed(0) + " hours ago";
}

export function GetFormatted(delta: number): string {
	if (delta < 1) {
		return "Just now";
	} else if (delta < 60) {
		return "Less than a minute";
	} else if (delta < 3600) {
		return GetMinutes(delta);
	} else {
		return GetHours(delta);
	}
}

// GetNext will return the next time to check from a given milliseconds delta 
export function GetNext(ms: number) {
	if (ms < minuteMS) {
		return secondMS;
	} else if (ms < hourMS) {
		return minuteMS;
	} else {
		return hourMS;
	}
}