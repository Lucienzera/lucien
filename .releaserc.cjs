const isStable = process.env.STABLE_RELEASE === 'true';
console.log('STABLE_RELEASE:', process.env.STABLE_RELEASE, 'isStable:', isStable);

const branchConfig = isStable
  ? [{ name: 'main' }]
  : [{ name: 'main', prerelease: 'rc' }];

console.log('branchConfig:', branchConfig);

module.exports = {
  branches: branchConfig,
  plugins: [
    ['@semantic-release/commit-analyzer', {
      preset: 'conventionalcommits',
      releaseRules: [
        { type: 'feat', release: 'minor' },
        { type: 'fix', release: 'patch' },
        { type: 'perf', release: 'patch' },
        { type: 'refactor', release: 'patch' },
        { breaking: true, release: 'major' },
        { type: 'docs', release: false },
        { type: 'test', release: false },
        { type: 'ci', release: false },
        { type: 'build', release: false }
      ]
    }],
  ]
};
