import { test, expect } from '@playwright/test';

test('Landing page loads correctly', async ({ page }) => {
  // Navigate to the landing page
  await page.goto('http://localhost:5173');
  
  // Check if the hero section is visible
  const heroSection = page.locator('section.relative.h-\[80vh\]');
  await expect(heroSection).toBeVisible();
  
  // Check the main heading
  await expect(page.getByRole('heading', { 
    name: /Industrial Solutions for a Connected World/i 
  })).toBeVisible();
  
  // Check the CTA button
  const ctaButton = page.getByRole('link', { name: /Explore Products/i });
  await expect(ctaButton).toBeVisible();
  
  // Check features section
  const featuresSection = page.locator('section.py-20.bg-gray-50');
  await expect(featuresSection).toBeVisible();
  
  // Verify all feature cards are present
  const featureCards = page.locator('.grid.grid-cols-1.md\:grid-cols-2.lg\:grid-cols-4 .group');
  await expect(featureCards).toHaveCount(4);
  
  // Check showcase section
  const showcaseSection = page.locator('section.py-20');
  await expect(showcaseSection).toBeVisible();
  
  // Verify showcase images
  const showcaseImages = page.locator('.grid.grid-cols-1.md\:grid-cols-3 img');
  await expect(showcaseImages).toHaveCount(3);
  
  // Check CTA section
  const ctaSection = page.locator('section.bg-blue-600');
  await expect(ctaSection).toBeVisible();
  
  // Test navigation to products page
  await ctaButton.click();
  await expect(page).toHaveURL(/.*products/);
});
