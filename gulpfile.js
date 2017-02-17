var gulp        = require( 'gulp' ),
    server      = require( 'gulp-develop-server' ),
    livereload  = require( 'gulp-livereload' ),
    exec        = require( 'child_process' ).exec
 
function runCommand(command) {
  return function (cb) {
    exec(command, function (err, stdout, stderr) {
      console.log(stdout);
      console.log(stderr);
      cb(err);
    });
  }
}

var options = {
    path: './src/server.js'
};
 
var serverFiles = [
    './src/**/*.*'
];
 
gulp.task( 'start-mongo', runCommand('sudo service mongod start'));

gulp.task( 'server:start', function() {
    server.listen( options, livereload.listen );
});
 
// If server scripts change, restart the server and then livereload. 
gulp.task( 'default', [ 'start-mongo', 'server:start' ], function() {
    
    function restart( file ) {
        server.changed( function( error ) {
            if( ! error ) livereload.changed( file.path );
        });
    }
 
    gulp.watch( serverFiles ).on( 'change', restart );
});
