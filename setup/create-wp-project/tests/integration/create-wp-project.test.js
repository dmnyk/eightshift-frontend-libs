/**
 * Integration test for testing the create-wp-project script.
 *
 * @group integration
 */
const { exec } = require('promisify-child-process');
const { ensureDir } = require('fs-extra');
const del = require('del');

const timeout = 180000;
const testingFolder = './temp';

beforeEach(async () => {
  await del(testingFolder);
  await ensureDir(testingFolder);
}, timeout);

afterEach(async () => {
  await del(testingFolder);
}, timeout);

/**
 * By adding `.only` here, we ensure this is the only test in the file that is run.
 *
 * This is because by default we wish to test the live script on a test run.
 * However, sometimes we need to test the local version while developing and need
 * to be able to run that one when needed (without having it run automatically on each test run)
 */
it.only('tests create-wp-project script (npx version) - creates a theme', async() => { // eslint-disable-line jest/no-focused-tests
  const { err } = await exec(`cd ${testingFolder} && npx create-wp-project@latest --projectName="Test project" --url="eightshift.local" --description="This is a description" --noSummary`);

  expect(err).toBeFalsy();
}, timeout);

it('tests create-wp-project script (local version) - creates a theme', async () => {
  const { err } = await exec(`cd ${testingFolder} && node ~/my-packages/eightshift-frontend-libs/setup/create-wp-project/create-wp-project.js --projectName="Test Project" --url="eightshift.local" --description="This is a description" --noSummary`);

  expect(err).toBeFalsy();
}, timeout);

