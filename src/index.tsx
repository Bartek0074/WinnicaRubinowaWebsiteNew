import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import './styles/antdModal.scss';
import App from './App';

import { ConfigProvider } from 'antd';

import plPL from 'antd/lib/locale/pl_PL';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<ConfigProvider locale={plPL}>
			<App />
		</ConfigProvider>
	</React.StrictMode>
);
