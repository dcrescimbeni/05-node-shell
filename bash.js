const commands = require('./commands');
const done = function (output) {
  console.log(output);
  process.stdout.write('\nprompt > ');
};

// Un prompt como output
process.stdout.write('prompt > ');

// El evento STDIN 'data' se dispara cuando el usuario escribe una línea
process.stdin.on('data', function (data) {
  let cmd = data.toString().trim();
  let cmd1 = cmd.split(' ', 1).join();
  let argumentos = cmd.split(' ').slice(1).join(' ');

  commands[cmd1](argumentos, done);

  // if (cmd1 === 'pwd') {
  //   commands.pwd(done);
  // }

  // if (cmd1 === 'date') {
  //   commands.date(done);
  // }

  // if (cmd1 === 'ls') {
  //   commands.ls(done);
  // }
  // if (cmd1 === 'echo') {
  //   commands.echo(argumentos, done);
  // }
  // if (cmd1 === 'cat') {
  //   commands.cat(argumentos, done);
  // }
  // if (cmd1 === 'head') {
  //   commands.head(argumentos, done);
  // }
  // if (cmd1 === 'tail') {
  //   commands.tail(argumentos, done);
  // }
  // if (cmd1 === 'curl') {
  //   commands.curl(argumentos, done);
  // }
});
