import {API_URL} from "../constants";

export function getNotes() {
    return fetch(API_URL).then((res) => res.json());
}

export function createNote(note) {
    return fetch(API_URL, {
        method: "POST",
        body: JSON.stringify(note),
        headers: {"Content-Type": "application/json"},
    }).then((res) => res.json());
}

export function deleteNote(id) {
    return fetch(API_URL + '/' + id, {
        method: 'DELETE',
    }).then((res) => res.json());
}

export function updateNote(note) {
    return fetch(API_URL + '/' + note.id, {
        method: 'PUT',
        body: JSON.stringify(note),
        headers: {"Content-Type": "application/json"},
    }).then((res) => res.json());
}