
// centralizing some config to reduce burden of configuration refactoring

export const analyzers2 = [
  {
    module: require('../fixtures/analyzers/test-analyzer1'),
    id: 'test-analyzer1'
  },
  {
    module: require('../fixtures/analyzers/test-analyzer2'),
    id: 'test-analyzer2',
    config: {}
  }
];

export const analyzers1 = { module: require('../fixtures/analyzers/test-analyzer1'), id:'test-analyzer1' };

