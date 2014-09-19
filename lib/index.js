var blanket = require('blanket')
  , glob = require('glob')
  , path = require('path')
  , test

var tape = require(path.join(process.cwd(), '/node_modules/tape')

module.exports = function run(pattern, src_dir) {
  blanket = blanket({pattern: src_dir})
  blanket.setupCoverage()

  module.exports = test = tape.createHarness()
  test.stream = test.createStream()

  var cache = require.cache[
    path.resolve(__dirname, '../node_modules/tape/index.js')
  ]

  cache.exports = test

  test('load tests', function(t) {
    t.plan(1)

    glob(path.join(process.cwd(), pattern), function(err, files) {
      console.log(files)
      for(var i = 0, len = files.length; i < len; ++i) {
        require(files[i])
      }

      t.ok(true, 'loaded tests')
      t.end()
    })
  })
}
