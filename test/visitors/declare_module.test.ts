import * as pluginTester from 'babel-plugin-tester';
import plugin from '../../src';

pluginTester({
  plugin,
  tests: [
    {
      title: 'declare empty named module',
      code: `declare module "react" {}`,
      output: `declare module "react" {}`,
    },
    {
      title: 'declare module "React"',
      code: `declare module React {}`,
      output: `declare module "React" {}`,
    },
  ],
});
