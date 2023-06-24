export default function throttle<T extends any[]>(
	func: (...args: T) => void,
	delay: number
): (...args: T) => void {
	let timeoutId: number;
	let lastExecTime = 0;

	return function (...args: T) {
		const currentTime = new Date().getTime();
		const timeSinceLastExec = currentTime - lastExecTime;

		clearTimeout(timeoutId);

		if (timeSinceLastExec > delay) {
			func(...args);
			lastExecTime = currentTime;
		} else {
			timeoutId = setTimeout(() => {
				func(...args);
				lastExecTime = new Date().getTime();
			}, delay);
		}
	};
}
