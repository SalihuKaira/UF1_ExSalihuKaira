//NodeJS: localhost:3020

const express = require('express');
const fs = require('node:fs');
const path = require('path');
const app = express();

app.use(express.json());

port = 3020;
app.listen(port, () => {
  console.log(`Server listening on the port:: ${port}`);
});

//Exercici 1
//   function llegeixDirectori(directori) {
//     const arxius = fs.readdirSync(directori);
//     arxius.forEach((arxiu) => {
//       const ruta = directori + '/' + arxiu;
//       const stats = fs.statSync(ruta);
//       if (stats.isDirectory()) {
//         console.log(`[${arxiu}]`);
//         llegeixDirectori(ruta);
//       } else {
//         console.log(arxiu);
//       }
//     });
//   }
//   llegeixDirectori('C:\\Users\\skair\\Desktop\\UF1_ExamenAaD');

//Exercici2
// const origen = path.join('C:\\Users\\skair\\Desktop\\UF1_ExamenAaD\\Documents\\FitxerOrigen.txt');
// const desti = path.join('C:\\Users\\skair\\Desktop\\UF1_ExamenAaD\\Documents\\Docs1\\FitxerDesti.txt');
//
// fs.readFile(origen, 'utf8', (err, data) => {
//   if (err) throw err;
//
//   fs.access(desti, fs.constants.F_OK, (err) => {
//
//     if (err) {
//       fs.writeFile(desti, data, (err) => {
//         if (err) throw err;
//         console.log('S\'ha creat el fitxer desti i s\'hi ha copiat el contingut');
//       });
//
//     } else {
//       fs.writeFile(desti, 'utf8', (err, dataDesti) => {
//         if (err) throw err;
//         const nouContingut = dataDesti + data;
//         fs.writeFile(desti, nouContingut, (err) => {
//           if (err) throw err;
//           console.log('S\'ha concatenat el contingut del fitxer origen amb el contingut del fitxer destí.')
//         })
//       })
//     }
//   })
// })

//Exercici 3
  const readStream = fs.createReadStream('C:\\Users\\skair\\Desktop\\UF1_ExamenAaD\\Imatges\\Imatge2.png');

  console.log('Nom de la imatge: Imatge2.png');

  readStream.on('data', (chunk) => {
    console.log(chunk)
  })



