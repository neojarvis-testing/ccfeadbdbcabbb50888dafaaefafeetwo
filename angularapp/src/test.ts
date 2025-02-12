// This file is required by karma.conf.js and loads recursively all the .spec and framework files

import 'zone.js/testing';
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);

// Dynamically import all .spec.ts files (Webpack 5+ compatible)
async function importAllTests() {
  const context = (require as any).context('./', true, /\.spec\.ts$/);
  return Promise.all(context.keys().map(context));
}

// Load all test files
importAllTests().then(() => {
  console.log('All test files loaded.');
});
