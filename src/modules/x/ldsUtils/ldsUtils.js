/**
 * Reduces one or more LDS errors into a string[] of error messages.
 * @param {FetchResponse|FetchResponse[]} errors
 * @return {String[]} Error messages
 */
export function reduceErrors(errors) {
	const normalizedErrors = !Array.isArray(errors) ? [errors] : errors;

	return (
		normalizedErrors
			// Remove null/undefined items
			.filter((error) => !!error)
			// Extract an error message
			.map((error) => {
				// String error
				if (typeof error === "string") {
					return error;
				}
				// UI API read errors
				if (Array.isArray(error.body)) {
					return error.body.map((e) => e.message);
				}
				// UI API DML, Apex and network errors
				if (error.body && typeof error.body.message === "string") {
					return error.body.message;
				}
				// JS errors
				if (typeof error.message === "string") {
					return error.message;
				}
				// Unknown error shape so try HTTP status text
				return error.statusText;
			})
			// Flatten
			.reduce((prev, curr) => prev.concat(curr), [])
			// Remove empty strings
			.filter((message) => !!message)
	);
}
