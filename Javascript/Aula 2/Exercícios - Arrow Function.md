## 1º exercício

Converta as funções nos seguintes trechos de código em Arrow Functions:

```js

const arr = [1, 2, 3, 4, 5];

arr.map(function(item) {
  return item + 10;
});
```

```js
 
// Dica: Utilize uma constante pra function
// Exercicios:
const usuario = { nome: 'Diego', idade: 23 } 
const mostrarIdade = (usuario) => {
  return usuario.idade;
}

mostraIdade(usuario);

// Usando o arrow function
// Sem return, apenas para inline
const usuario = { nome: 'Diego', idade: 23 } 
const mostrarIdade = (usuario) => usuario.idade;

mostraIdade(usuario);

// usuando função

function mostraIdade(usuario) {
  return usuario.idade;
}

mostraIdade(usuario);


```

```js

// Dica: Utilize uma constante pra function

const nome = "Diego";
const idade = 23;

const mostrarUsuario = (nome , idade) => {
  return { nome, idade };
}

mostraUsuario(nome, idade);
mostraUsuario(nome);
```

function mostraUsuario(nome = 'Diego', idade = 18) {
  return { nome, idade };
}

mostraUsuario(nome, idade);
mostraUsuario(nome);
```
