 module.exports = class {

    static format(code, message = [], data = {}) {
		return {
			code,
			message,
			data
		}
    }
}
