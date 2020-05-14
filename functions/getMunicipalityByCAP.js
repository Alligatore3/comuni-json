/**
 * @description As of node v0.5.x yes you can require your JSON just as you would require a js file.
 * @see https://stackoverflow.com/a/7165572
 */
import municipalities from '../comuni.json';

exports.handler = (event, context, callback) => {
  if (event.httpMethod !== 'GET') return callback(null, { statusCode: 200, body: 'Verbo REST non permesso.'});

  const splittedPath = event.path.split('/')
  const CAP = splittedPath.pop().toLowerCase()

  /**
   * @description Keep in mind municipalities with more than 2 CAPs
   * 44 minicipalities with more than 2 CAPs (14/05/2020)
   */
  const results = municipalities.find(municipality => {
    return municipality.cap.length >= 2
      ? municipality.cap.some(cap => cap === CAP)
      : municipality.cap[0] === CAP
  })
  if(!results) return callback(null, { statusCode: 200, body: 'Nessun comune con questo CAP'});

  const body = JSON.stringify(results)
  return callback(null, { statusCode: 200, body });
};