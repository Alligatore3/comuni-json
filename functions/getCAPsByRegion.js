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

  /**
   * @name onlyUnique
   * @see https://stackoverflow.com/a/14438954
   * @return {boolean}
   */
  const onlyUnique = (value, index, self) => (self.indexOf(value) === index);
  const results = municipalities.reduce((acc, curr) => {
    (curr.regione.nome.toLowerCase() === region) && (acc = acc.concat(curr.cap))
    return acc
  }, []).filter(onlyUnique).sort()

  console.log(results.length, `CAP in regione di ${region}`)
  const body = JSON.stringify(results)
  return callback(null, { statusCode: 200, body });
};