# Explicação rápida da decisão da arquitetura utilizada e o porquê

Resolvi optar por uma arquitetura Layered architecture poorque ela consegue separar facilmente as responsabilidades das camadas da API e permitir um rapido entendimento de onde as coisas estão.

Nesse teste utilizei o Restify como framework pela sua simplicidade de uso, por ser mais enxuto que o express.

Optei por utilizar um banco relacional mesmo não tendo criado nenhum relacionamento pra esse contexto. Para mim o ponto forte do SQL é garantir à consistência das informações e nesse contexto ela me pareceu mais importante do que focar em escalabilidade e disponbilidade.

# Lista de bibliotecas de teceiros utilizadas

## dotenv: https://www.npmjs.com/package/dotenv
Uma lib que facilitia o uso de variaveis de ambientes no Node.js, basta seguir o .env.example

## knex: https://www.npmjs.com/package/knex
O Query Builder mais simples que encontrei, não vi necessidade de possuir um ORM nesse teste, mas controlar pool de requisições na mão também é um problema, esse query build consegue me ajudar nos scripts SQL e controlar o pool

# restify: https://www.npmjs.com/package/restify
Micro framework para construção de APIs restful

# restify-cors-middleware: https://www.npmjs.com/package/restify-cors-middleware
CORS é uma coisa que a gente tem que ter em mente quando vamos separar o front-end do back-end, se alguém tentar plugar um front-end aqui vindo de um outro dominio e se essa API não for ser pública, o cors desse projeto está prearado, basta passar as configurações pra ele.

# restify-errors: https://www.npmjs.com/package/restify-errors
Uma lib que possui uma coleção de verbots HTTP e Status Code que facilita e muito a construção de objetos de erros.

# ava: https://www.npmjs.com/package/ava
É um test runner, que na minha opinião é bem mais simples de usar que o conjunto chai, mocha, supertest

# eslint: https://www.npmjs.com/package/eslint
Garantir uma padronização de código é importante, ainda mais no JS que temos muita liberdade, o eslint faz isso pra gente e consegue integarir com os editores mais populares. Não gostei da quantidade de plugins que precisa se instalar, mas como é uma dependência de dev ela é levada para um ambiente produtivo.
Lista de plugins: eslint-config-standard, eslint-plugin-import, eslint-plugin-node, eslint-plugin-promise, eslint-plugin-standard

# nodemon: https://www.npmjs.com/package/nodemon
Ficar parando e subindo a aplicação pra realizar testes uma hora enjoa, o nodemon ajuda a gente com isso, ele mantem a aplicação sempre rodando e vai atualizando o código executado a medida que vamos alterando ele.

# nyc: https://www.npmjs.com/package/nyc
Um gerador de relatorio para testes, uso ele junto com o ava para mostrar a cobertura de testes do projeto.

# sqlite3: https://www.npmjs.com/package/sqlite3
Gosto da ideia de desenvolver sem ter que configurar muitas coisas e o SQlite é perfeito nesse contexto, que precisamos desenvolver em cima de uma base relacional e estamos usando um query builder, assim com apenas um arquivo temos uma base de dados.

A função dessa lib é criar uma conexão entre essa base de dados para o knex

# O que você melhoraria se tivesse mais tempo

1. Teria feito mais testes
2. Integrado o projeto com um banco relacional mais parrudo no Heroku, provavelmente o postgres
3. Criado um estrutura para checar logs
4. Teria removido a lib restify-errors e usado a Boom por permitir que eu altere o body de response, assim eu iria conseguir enviar a Data para o usuário
5. Autenticação dos usuários
6. Cache descentralizado usando um redis ou dynamodb
7. Ativado o PM2 para ter um process manager em um ambiente node produtivo
