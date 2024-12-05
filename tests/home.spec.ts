
import {expect, test} from '@playwright/test';

test('Verify the Url an the Logo', async({page}) => {
    await page.goto('https://www.cricketworldcup.com/');
    expect(page.url()).toContain('cricket');
    await expect (page.locator('logo_5XOb8hvZdttI-_kx7_ccN')).toBeVisible;

})
test ('Search and Verify new URL und heading', async({page}) => {
    
   

    await page.goto('https://www.cricketworldcup.com/');
    await page.getByText('Search').click();
    const searchInput = await page.getByPlaceholder('what are you looking for?');
    await searchInput.fill('india');
    await searchInput.press('Enter');
    expect(page.url()).toContain('search?q=india');

})