const API_URL = import.meta.env.VITE_API_URL || 'http://api.pavlenok.com';

export async function apiFetch(path) {
	return fetch(`${API_URL}${path}`);
}
