/*
 * Copyright(c) 2019. All rights reserved.
 * Last modified 2/14/19 1:03 PM
 */

import { baseUrl, browser } from 'e2e-config';
import { e2e } from '~/@enoct/framework/testing/e2e';

e2e.describe('HomeComponent', () => {
  e2e.it('should have title', async () => {
    const page = browser.goto(`${baseUrl}/`);

    const text = await page.evaluate(() => document.title).end();

    e2e.e(text).toContain('showcasing the app');
  });
});