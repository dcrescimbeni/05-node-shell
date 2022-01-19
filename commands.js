module.exports = {
  pwd: function (done) {
    done(process.argv[0]);
  },
  date: function (done) {
    let fechaActual = new Date();
    done(fechaActual.toString());
  },
  echo: function (str, done) {
    done(str);
  },

  cat: function (archivo, done) {
    let listadoDeArchivos = archivo.split(' ');
    let output = '';
    const fs = require('fs');
    for (let i = 0; i < listadoDeArchivos.length; i++) {
      fs.readFile(listadoDeArchivos[i], 'utf8', function (error, datos) {
        if (error) throw error;
        output += datos + '\n';
      });
    }

    setTimeout(() => {
      done(output);
    }, 150);
  },

  head: function (archivo, done) {
    let listadoDeArchivos = archivo.split(' ');
    let output = '';
    const fs = require('fs');
    for (let i = 0; i < listadoDeArchivos.length; i++) {
      fs.readFile(listadoDeArchivos[i], 'utf8', (error, datos) => {
        if (error) throw error;
        let filas = datos.split('\n');
        for (let i = 0; i < 5; i++) {
          if (filas[i]) {
            output += filas[i] + '\n';
          }
        }
      });
    }
    setTimeout(() => {
      done(output);
    }, 150);
  },
  tail: function (archivo, done) {
    let listadoDeArchivos = archivo.split(' ');
    let output = '';
    const fs = require('fs');
    for (let i = 0; i < listadoDeArchivos.length; i++) {
      fs.readFile(listadoDeArchivos[i], 'utf8', (error, datos) => {
        if (error) throw error;
        let filas = datos.split('\n');
        for (let i = filas.length - 6; i < filas.length; i++) {
          if (filas[i]) {
            output += filas[i] + '\n';
          }
        }
      });
    }
    setTimeout(() => {
      done(output);
    }, 150);
  },
  ls: function (done) {
    let output = '';
    const fs = require('fs');
    fs.readdir('.', (err, files) => {
      if (err) {
        console.log(err);
      } else {
        files.forEach((file) => {
          output += file + '\n';
        });
      }
    });

    setTimeout(() => {
      done(output);
    }, 150);
  },

  curl: function (pagina, done) {
    let output = '';
    const request = require('request');
    request(pagina, function (error, response, body) {
      // output+="error:", error;
      // output+="statusCode:", response && response.statusCode
      output += 'body:' + body;
    });
    setTimeout(() => {
      done(output);
    }, 3800);
  },
};
