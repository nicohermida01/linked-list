const LOG_PREFIX = '[LOG]'

export function log(...args) {
	console.log(LOG_PREFIX, ...args)
}

export function time(string = '') {
	console.time(`${LOG_PREFIX}${string}`)
	return () => console.timeEnd(`${LOG_PREFIX}${string}`)
}
