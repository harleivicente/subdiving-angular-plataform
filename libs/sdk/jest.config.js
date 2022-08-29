module.exports = {
  name: 'sdk',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/sdk',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
