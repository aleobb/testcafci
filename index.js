const fetch = require('fetch');
const fs = require('fs');

fetch.fetchUrl('https://api.cafci.org.ar/fondo/456/clase/873/ficha',{
    method: 'GET',
    rejectUnauthorized : false
}, (err, meta, data) => {
    err && console.error(err);
    const parsed = JSON.parse(data);
    const d = parsed.data.info.diaria.actual;
    console.info('data', JSON.stringify(d));
});








