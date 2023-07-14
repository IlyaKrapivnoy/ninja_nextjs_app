import { nanoid } from 'nanoid';

export const navigationLinks = [
    { path: '/', label: 'Home', id: nanoid() },
    { path: '/about', label: 'About', id: nanoid() },
    { path: '/ninjas', label: 'Ninja List', id: nanoid() }
];
