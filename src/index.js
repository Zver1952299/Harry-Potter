import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import ThemeProvider from '@context/ThemeProvider';
import App from '@pages/App/App';
import store from '@components/store/store';

import '@styles/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </Provider>
    </React.StrictMode>
);