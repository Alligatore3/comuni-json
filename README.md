### Readme originale [consultabile qui](https://github.com/matteocontrini/comuni-json/blob/master/README.md)

## Proposte endpoint REST
```
- Dammi tutti i comuni di quella regione
- Dammi tutti i comuni di quella provincia
- Dammi tutti i CAP di quella regione
- Dammi tutti i CAP di quella provincia
- Dammi il comune di quel CAP
```

## Endpoint realizzati
```
/**
 * @description Dammi tutti i comuni di quella regione
 * @return {Array}
 */
```
[/getMunicipalitiesByRegion/${region} (Es. 'Lazio')](https://cranky-galileo-bb04a5.netlify.app/.netlify/functions/getMunicipalitiesByRegion/lazio)

```
/**
 * @description Dammi tutti i comuni di quella provincia
 * @return {Array}
 */
```
[/getMunicipalitiesByProvince/${province} (Es. 'Torino')](https://cranky-galileo-bb04a5.netlify.app/.netlify/functions/getMunicipalitiesByProvince/torino)

```
/**
 * @description Dammi tutti i CAP di quella regione
 * @return {Array}
 */
```
[/getCAPsByRegion/${region} (Es. 'Lombardia')](https://cranky-galileo-bb04a5.netlify.app/.netlify/functions/getCAPsByRegion/lombardia)

```
/**
 * @description Dammi tutti i CAP di quella provincia
 * @return {Array}
 */
```
[/getCAPsByProvince/${province} (Es. 'Milano')](https://cranky-galileo-bb04a5.netlify.app/.netlify/functions/getCAPsByProvince/milano)


```
/**
 * @description Dammi il comune con quel CAP
 * @return {Object}
 */
```
[/getCAPsByProvince/${CAP} (Es. '36015')](https://cranky-galileo-bb04a5.netlify.app/.netlify/functions/getMunicipalityByCAP/36015)