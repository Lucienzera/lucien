const isStable = process.env.STABLE_RELEASE === 'true';

module.exports = {
  branches: [
    isStable 
      ? { name: 'main' }              // stable release on main (no prerelease tag)
      : { name: 'main', prerelease: 'rc' }  // prerelease with 'rc' tag on main
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
