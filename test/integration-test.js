var Lab = require('lab');
var lab = exports.lab = Lab.script();
var hamjest = require('hamjest');
for (var k in hamjest) {
      global[k] = hamjest[k];
}
var child = require('child_process');
var fs = require('fs');
var test = lab.test;
var experiment = lab.experiment;

experiment('Flite outputs a wav file', function() {
  test('A simple case', function(done) {
    var path = 'test/hello.wav';
    child.exec('flite-1.4-release/bin/flite "Hello, my friend" -o ' +
        path, function(err) {
      if (err) {
          throw err;
      } else {
          fs.stat(path, function(err, stats) {

            assertThat(err, is(null));
            assertThat(stats, defined());
            fs.unlinkSync(path);
            done();
          });
        }
      });
  });
});
