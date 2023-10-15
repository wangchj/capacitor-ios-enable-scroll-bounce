import { WebPlugin } from '@capacitor/core';

import type { EnableScrollBouncePlugin } from './definitions';

export class EnableScrollBounceWeb
  extends WebPlugin
  implements EnableScrollBouncePlugin
{
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
