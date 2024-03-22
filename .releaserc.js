'use strict'

const changelogFile = 'CHANGELOG.md'
const writerOpts = { commitsSort: ['scope', 'subject'] }
const assets = [changelogFile, 'package.json']
const preset = 'conventionalcommits'

// //////////////////////////////////////////////

module.exports = {
  branches: [
    'main',
    {
      name: 'next',
      prerelease: 'rc',
      channel: 'next'
    }
  ],
  plugins: [
    ['@semantic-release/commit-analyzer', { preset }],
    ['@semantic-release/release-notes-generator', { preset, writerOpts }],
    ['@semantic-release/changelog', { changelogFile }],
    ['@semantic-release/git', { assets }],
    '@semantic-release/github',
    '@semantic-release/npm'
  ]
}
