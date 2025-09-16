import path, { resolve } from 'path';
import fs from 'node:fs';

const rootPath = path.resolve(path.join(process.cwd(), '../../../'));
export const EW_COMPONENTS_MODULE_NAME = `ew_components`;
export const DRUPAL_MODULES_PATH = `${rootPath}/modules/`;

const contribModulesPath = resolve(DRUPAL_MODULES_PATH, 'contrib', EW_COMPONENTS_MODULE_NAME);
const CONTRIB_EXISTS = fs.existsSync(contribModulesPath);
export const MODULES_LOCATION = CONTRIB_EXISTS ? 'contrib' : 'custom';
/* Verify if the ew_components module exists  */
const ewModulesPath = resolve(DRUPAL_MODULES_PATH, `${MODULES_LOCATION}`);
const pathExist = fs.existsSync(ewModulesPath);
export const EW_MODULES_PATH = pathExist && ewModulesPath;
export const EW_COMPONENTS_PATH = resolve(DRUPAL_MODULES_PATH, `${MODULES_LOCATION}/${EW_COMPONENTS_MODULE_NAME}`);

export const getModulesStories = () => {
  const modulesExists = fs.existsSync(DRUPAL_MODULES_PATH);

  if (modulesExists) {
    return [
      `${DRUPAL_MODULES_PATH}/**/${EW_COMPONENTS_MODULE_NAME}/**/*.mdx`,
      `${DRUPAL_MODULES_PATH}/**/${EW_COMPONENTS_MODULE_NAME}/components/**/*.stories.@(js|jsx|ts|tsx)`,
    ];
  }

  return [];
};
