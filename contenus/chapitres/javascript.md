# Javascript

- S'execute dans le navigateur, côté client.
- A quoi sert JavaScript ?
- Javascript est cassé...
- ... et ne [sera jamais réparé](https://www.youtube.com/watch?v=7eNFQqMSxtU)
- [Rapide survol par MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/JavaScript_technologies_overview)

## Standards

### Fonctionnement des standards

### Historique succinct

- ECMAScript 3 (1999)
    - IE8+
- Pas de ECMAScript 4 !
- ECMAScript 5 (2009)
    - strict mode
    - JSON
- ECMAScript 6 / 2015
    - Destructuring
    - Modules standards
    - Arrow function
    - Map/Set/WeakMap/WeakSet
    - Promise
    - Array.prototype.find
- ECMAScript 2016
    - Array.prototype.includes
- ECMAScript 2017
    - async/await
- ECMAScript un jour
    - SharedArrayBuffer ?
    - BigInt ?
- ...

#### Ce qui nous intéresse: compatibilité des navigateurs
- [Navigateurs](https://kangax.github.io/compat-table/es6/)
- [Node](http://node.green/)



*Les versions de JavaScript (1.7, 1.7.5, 1.8, etc.) n'existent pas (ce sont numéros de version du moteur JS de Firefox)*


## Syntaxe

* not : `!x`
* et : `a && b`
* ou : `a || b`

* `a = b`
* `a = a + y`
    * `a += y`
* `a = a + 1`
    * `a++`

````js
if(x) {
    // x === true
}
else {
    // x === false
}
````


## Variables

Une variable c'est une **boîte avec une étiquette** qui contient une valeur.

- Toujours déclarer avec `const` ou `let` (IE11+. Anciennement `var`)

````js
const a = 1;
let b = 2;

a = 3 // Error
b = 4 // Ok
````
- `const` et `let` sont "block scoped", `var` est "function scoped"

````js
## Function scope

function() {
    const a = 1;
    let b = 2;
    var c = 3;

    console.log(a); // 1
    console.log(b); // 2
    console.log(c); // 3
}

console.log(a); // undefined
console.log(b); // undefined
console.log(c); // undefined
````

````js
## Block scope

if () {
    const a = 1;
    let b = 2;
    var c = 3;

    console.log(a); // 1
    console.log(b); // 2
    console.log(c); // 3
}

console.log(a); // undefined
console.log(b); // undefined
console.log(c); // 3
````

### [Mode strict](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode)

- Toujours utiliser le mode strict en ajoutant `"use strict";` en haut de TOUS vos fichiers

````js
a = 1; // Pas d'prob, mais  ne JAMAIS faire ça
var undefined = 1; // Pas d'prob, mais  ne JAMAIS faire ça
var o = { a: 1, a: 2 } // Pas d'prob, mais  ne JAMAIS faire ça
````

````js
"use strict";

a = 1; // ERROR
var undefined = 1; // ERROR
var o = { a: 1, a: 2 } // ERROR

...
````

- [How One Missing `var` Ruined our Launch](http://www.pixelstech.net/article/1320253282-How-One-Missing-%60var%60-Ruined-our-Launch)

````js
myFavoriteSinger = 'Ella Fitzgerald';

function secretMindReader() {
    myFavoriteSinger = 'Taylor Swift';

    console.log(myFavoriteSinger) // 'Taylor Swift'
}
// Hey, do you know what my favorite singer is ?
console.log(myFavoriteSinger) // 'Taylor Swift'

// NoooOOOoOoOOooOoo
````

- [Passer d'un code non strict à un code strict](https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Functions_and_function_scope/Strict_mode/Transitioning_to_strict_mode)



## Fonctions

- Définition d'une fonction
- Arguments
- Valeur de retour
- Appel d'une fonction

````js
function chanterLaMacarena(paroles) {
    console.log(paroles);
    console.log('HEYYYY MACARENA !');
}

function faireUnPainAuChocolat(pain, chocolat) {
    return pain + chocolat;
}

chanterLaMacarena('bliblablou macarena') // renvoie undefined
// bliblablou macarena
// HEY MACARENA !

const maChocolatine = faireUnPainAuChocolat('pain', 'chocolat');

console.log(maChocolatine) // painchocolat
// WhaaaAAaAaaaAAAaaat ?!?
````

## Retour vers le futur

Écrire le code du futur dans les navigateurs du présent (ou du passé)


### Syntaxe
C'est la façon d'écrire le code, comprise (ou pas) par les navigateurs.

En gros, ce sont les **règles de grammaire**.

 Pour utiliser la syntaxe du futur, utiliser [Babel](https://babeljs.io/).

### Runtime

On parle ici de **sémantique**, des mots standards du langage fournis par le navigateur (ou Node).

Si vous utilisez des fonctions du futur sans polyfills, ces fonctions ne seront pas définies sur les vieux navigateurs.

Le fait qu'une fonction ne soit pas implémentée par un navigateur n'est pas une raison pour ne pas utiliser cette fonction.

Il faut définir ces fonctions pour pouvoir s'en servir.

- écrire soi-même ses polyfills
````js
## dans le <head>
<script>
function maFonctionDuFutur() {}
</script>

## dans mes scripts métier
maFonctionDuFuture() // ok
````
- [polyfill.io](https://cdn.polyfill.io/v2/docs/) fait le travail à notre place [(annonce du service)](http://labs.ft.com/2014/09/polyfills-as-a-service/)
````js
## dans le <head>
<script src="https://cdn.polyfill.io/v2/polyfill.min.js?features=default,fetch,Promise"></script>

## dans mes scripts métier
maFonctionDuFuture() // ok
````


## Valeurs

Une valeur est le **résultat d'une opération**.

| type          | Exemples                        | typeof x    | Bon test          |
|---------------|---------------------------------|-------------|-------------------|
| boolean       | `true`, `false`                 | "boolean"   |                   |
| string        | `''`, `"yo !"`, `` `whatever` `` | "string"   |                   |
| number        | `1`, `-2.3`, `NaN`, `Infinity`  | "number"    |                   |
| undefined     |                                 | "undefined" |                   |
| null          |                                 | ⚠ "object"  | `x === null`      |
| simple object | `{}`, `{a:1, b: "2"}`           | "object"    | `Object(x) === x` |
|----------|-----------|-----------|------------|
| function      | `function somme(a, b){return a+b;}` | "function" |              |
| array         | `[]`, `[1, 76, 87]`             | ⚠ "object"  | `Array.isArray(x)` |
| set, map, weakmap, promise, date, regexp  |     |  ⚠ "object"   | `Object.prototype.toString.call(x)` |
| symbol |                               | "symbol"    |                   |


### Comparaison

#### Égalité stricte

Toujours utiliser === et !==

- `==` "presque égal"
- `===` "strict égal"
- `Object.is`

[Pourquoi `==` est différent de `===` ?](http://dorey.github.io/JavaScript-Equality-Table/)

#### Valeur vs Référence

Comparaison par référence pour les objets et fonctions, par valeur pour le reste.

````js
'use strict';

(1 === 1) // true
('yo' === 'yo') // true

const o = {
    a: 1
};

const o2 = o;

console.log(o === o2); // true


const o3 = {
    a: 1
}

console.log(o === o3) // false

o2.b = 24;
console.log(o.b) // 24
````

#### L'exception NaN

````js
'use strict';

(NaN === NaN) // false
````

Pour tester la valeur `NaN`, utiliser `Number.isNaN()`.


### Strings

* `'Yo'.slice(start, end)`
* `'Yo'.substring(start, end)`
* `'Yo'.substr(start, length)`
* `str.trim()`
* `'yyyyyyy'.replace('y', 'a')`
    * ⚠ only the first occurence
    * `'yyyyyyy'.replace(/y/g, 'a')`
* `str.match(regexp)`
    * https://regexper.com/
    * https://regex101.com/
* `str.length`

[Comment enlever les accents ?](https://stackoverflow.com/questions/990904/remove-accents-diacritics-in-a-string-in-javascript/37511463#37511463)

### Number

* `NaN`, `Infinity`
    * `NaN !== NaN`
    * `Number.isNaN(x)` // ES6/2015
* `0.1 + 0.2`
    * [Faire des maths précises avec bignumber](https://www.npmjs.com/package/bignumber.js)

```js
const e = 2.71828182846;

console.log( e.toFixed(3) )
console.log( e.toString(36) )
```

#### La librairie standard Math
Une collection de fonctions pour faire des maths.
- `Math.random()`
- `Math.round/floor/ceil`
- `Math.sin()`
- ...


### Booleans

#### "Falsy values"

```js
false
0
NaN
'' (chaîne vide)
null
undefined
```

`!!maValeur` transforme une valeur en vrai booléen.

### Objects

Un objet c'est une **armoire avec des tiroirs**.

* clé (string) -> valeur (any)

(formation pas-avancée : montrer [objets.js](./objets.js))

- Lire une propriété `o.a`
    - `o["a"]` équivalent à `o.a`
    - `o[maString]`
- Assigner une valeur à une propriété `o.a = 12`
- Supprimer une propriété `delete o.a;`
- Lister les propriétés de l'objet `Object.keys(o)`
- Lister les valeurs de l'objet `Object.values(o)`
- Tester si une propriété est dans un objet `'yo' in obj`


#### JSON

JSON : JavaScript Object Notation

[Origine du JSON](https://www.json.org/)

C'est un format d'échange (manière de sérialiser des données structurées)

- `JSON.stringify(obj) => string`
- `JSON.parse(string) => obj`

````js
"use strict";

const o = {
  a: 1,
  bloublou: 9,
  chapito: "yo",
  brave: {
    autre: "object"
  }
};

console.log(JSON.stringify(o));
````

⚠ C'est un format fragile ⚠, vérifier avec [JSON Lint](https://jsonlint.com/)


### Array

```js
"use strict";

const arr = [12, 65, 546];

arr[0] // 12
arr.length // 3
````


````js
## Itérer sur un tableau

const arr = [1, 2, 3];

for (let i = 0; i < arr.length; i++) { // à l'ancienne
    console.log(arr[i]);
}

for (let element of arr) { // à un poil plus moderne
    console.log(element);
}

arr.forEach(function(element) { // beaucoup mieux !
    console.log(element);
});

````


### Utilisation des tableaux

[De manière illustrée](https://twitter.com/steveluscher/status/741089564329054208)

* `a.forEach(f)`

````js
const arr = [1, 2, 3, 4];

arr.forEach(function(e, i, a) {
    console.log(e * i);
});

// 0
// 2
// 6
// 12
````

* `a.map(f)`

````js
const arr = [1, 2, 3];

const arr2 = arr.map(function(e) {
    return e * 10;
}); // [10, 20, 30]
````

* `a.filter(f)`

````js
const arr = [1, 2, 3, 4, 5, 6, 7, 8];

const arr2 = arr.filter(function(e) {
    return e % 2 === 0;
}); // [2, 4, 6, 8]
````

* `a.slice(debut, fin)`

````js
arr.slice(0, 5); // [1, 2, 3, 4, 5]
````

* `a.find(pred)`

````js
const arr = [1, 2, 3, 4, 5, 6, 7, 8];

const found = arr.find(function(e){
    return e >= 4 && e % 4 === 2; // 6
});
````

* `a.sort(fun)`

````js
const found = arr.sort(function(a, b){
    return b - a; // doit retourner un nombre positif ou négatif
});
````


### `Set` / `Map` (ES6)

Un `Set` ressemble à une liste, avec des éléments uniques.

````js
const s = new Set(arr);
s.add(value);
s.has(value);
s.delete(value);

## créer une tableau avec seulement des éléments uniques
arr = Array.from(new Set(arr)); // ou [...new Set(arr)]
````

Une `Map` ressemble à un objet, plus facile à manipuler.

````js
const map = new Map();
// Map : clé (any) => valeur (any)
map.set(key, value)
map.get(key)
map.has(key)
map.delete(key)
map.keys() // iterator
````

### `WeakSet` / `WeakMap`
- ont la même API...
- ... sauf `.keys()` et `.values()`
- leurs clés **doivent** être des objets

---

# À vos claviers

Ouvrir le fichier `./exercices/exo.html`, et suivre les indications.


