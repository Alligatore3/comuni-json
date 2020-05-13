/**
 * @description As of node v0.5.x yes you can require your JSON just as you would require a js file.
 * @see https://stackoverflow.com/a/7165572
 */
import municipalities from '../comuni.json';

exports.handler = (event, context, callback) => {
  if (event.httpMethod !== 'GET') return callback(null, { statusCode: 200, body: 'Verbo REST non permesso.'});

  const splittedPath = event.path.split('/')
  const region = splittedPath.pop().toLowerCase()

  const regionExists = municipalities.some(municipality => municipality.regione.nome.toLowerCase() === region)
  if (!regionExists) return callback(null, { statusCode: 200, body: 'Regione inesistente'});

  const results = municipalities.filter(municipality => municipality.regione.nome.toLowerCase() === region)
  console.log(results.length, `Comuni nella regione ${region}`)
  const body = JSON.stringify(results)
  return callback(null, { statusCode: 200, body });
};