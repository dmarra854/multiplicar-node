const fs = require('fs');


let crearArchivo = (base, tope) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`${base} No es un número`);
            return;
        }
        if (!Number(tope)) {
            reject(`${tope} No es un número`);
            return;
        }
        let data = ' ';

        for (let i = 1; i <= tope; i++) {
            data += (base + '*' + i + '=' + base * i + '\n');
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err)
            else
                resolve(`tabla ${base}.txt`);
            //console.log('The file has been saved!');
        });
    });
}

module.exports = {
    crearArchivo
};