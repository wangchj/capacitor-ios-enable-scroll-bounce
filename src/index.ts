import { registerPlugin } from '@capacitor/core';

import type { EnableScrollBouncePlugin } from './definitions';

const EnableScrollBounce = registerPlugin<EnableScrollBouncePlugin>(
  'EnableScrollBounce',
  {
    web: () => import('./web').then(m => new m.EnableScrollBounceWeb()),
  },
);

export * from './definitions';
export { EnableScrollBounce };
