const isStable = process.env.STABLE_RELEASE === 'true';
console.log('STABLE_RELEASE:', process.env.STABLE_RELEASE, 'isStable:', isStable);

const branchConfig = isStable
  ? [{ name: 'main' }]
  : [{ name: 'main', prerelease: 'rc' }];

console.log('branchConfig:', branchConfig);

module.exports = {
  branches: [
    'main',
    { name: 'release-rc', prerelease: 'rc' },
  ],
  plugins: [
    ['@semantic-release/commit-analyzer', {
      preset: 'conventionalcommits',
      releaseRules: [
        { type: 'feat', release: 'minor' },
        { type: 'fix', release: 'patch' },
        { type: 'perf', release: 'patch' },
        { type: 'refactor', release: 'patch' },
        { type: 'breaking', breaking: true, release: 'minor' },
        { type: 'docs', release: false },
        { type: 'test', release: false },
        { type: 'ci', release: false },
        { type: 'build', release: false }
      ]
    }],
    "@semantic-release/release-notes-generator",
    "@semantic-release/npm",
    "@semantic-release/github",
  ]
};
