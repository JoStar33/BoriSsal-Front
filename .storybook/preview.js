import { handlers } from '@/mocks/handlers';
import { setupWorker } from "msw";
import { RouterContext } from "next/dist/shared/lib/router-context"; // next 12
import * as NextImage from "next/image";
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

if (typeof global.process === "undefined") {//checks to make sure that this is not a node process
  const worker = setupWorker(//create service worker
    ...handlers
  );
  worker.start();// worker starts!
}

export const decorators = [
  (Story) => (
    <QueryClientProvider client={queryClient}>
      <Story />
    </QueryClientProvider>
  ),
]

NextImage.defaultProps = {
  unoptimized: true,
};

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  nextRouter: {
    path: '/', // defaults to `/`
    asPath: '/', // defaults to `/`
    query: {}, // defaults to `{}`
    push() {
    }, // defaults to using addon actions integration,
    //   can override any method in the router
    Provider: RouterContext.Provider,
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}