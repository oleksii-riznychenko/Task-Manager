import React, {StrictMode} from 'react'
import ReactDOM from 'react-dom/client';
import App from './App';
import {Provider} from 'react-redux';
import {store} from './store/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/common.css';

async function enableMocking() {
  if (process.env.NODE_ENV !== 'development') return

  const { worker } = await import('./mocks/browser')

  return worker.start()
}

const rootNode = document.getElementById('root')

if (rootNode) {
  const root = ReactDOM.createRoot(rootNode)

  enableMocking().then(() => {
    root.render(
      <StrictMode>
        <Provider store={store}>
          <App />
        </Provider>
      </StrictMode>,
    )
  })
}
