import React from 'react';
import { createRoot } from 'react-dom/client';

const test = <p>is this thing on?</p>;

const rootElement = document.createElement('div');
document.body.appendChild(rootElement);

const root = createRoot(rootElement);
root.render(test);
