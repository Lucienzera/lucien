const isStable = process.env.STABLE_RELEASE === 'true';

module.exports = {
  branches: [
    {
      name: 'main',
      ...(isStable ? {} : { prerelease: 'rc' }) // Add prerelease only if NOT stable
    }
  ],
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
