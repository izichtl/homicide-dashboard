import ReactDOM from 'react-dom/client';
import { Suspense, StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
// eslint-disable-next-line import/no-extraneous-dependencies, perfectionist/sort-imports
import { SWRConfig } from 'swr'

import App from './app';

// ----------------------------------------------------------------------

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(

  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <Suspense>
                {/* <SWRConfig 
    value={{
      refreshInterval: 60000,
      fetcher: (resource, init) => fetch(resource, init).then(res => res.json())
    }}
  > */}
          <App />
            {/* </SWRConfig> */}
        </Suspense>
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>

);
