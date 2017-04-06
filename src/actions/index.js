// When exporting many things from a single file, use just the 'export' keyword
// instead of 'export default'
export function selectLibrary(libraryId) {
	return {
		type: 'select_library',
		payload: libraryId
	};
};
