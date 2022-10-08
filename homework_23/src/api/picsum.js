const API = "https://picsum.photos/v2/list";

export function getPhotos(page = 1, limit = 10) {
  return fetch(`${API}?page=${page}&limit=${limit}`)
    .then((response) => response.json());
}