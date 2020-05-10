const tasks = arr => arr.join(' && ')

module.exports = {
  'husky': {
    'hooks': {
      "prepare-commit-msg": "exec < /dev/tty && git cz --hook || true",
      'commit-msg': 'commitlint -E HUSKY_GIT_PARAMS'
    }
  }
}
