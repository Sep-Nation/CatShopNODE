# Estrutura do projeto

## Estrutura de pastas

* Config - configurações de bibliotecas externas, como por exemplo, autentiocação, upload, email, etc.
* Modules - abrangem ás areas de conhecimento da aplicação, diretamente relacionados com as regras de negócios da aplicação. A princípio criaremos os seguintes módulos na aplicação: costumers, products, orders e users.
* Shared - módulos de uso geral compartilhado com os mais de um módulo de aplicação, como por exemplo, o server.ts, o arquivo principal de rotas, conexão com banco de dados, ...
* Services - estarão dentro de cada módulo da aplicação e serão responsáveis por todas as regras que a aplicação precisa atender, como por exemplo:
  * A senha deve ser armazenada com criptografia;
  * Não pode haver mais de um produto com o mesmo nome;
  * Não pode haver um mesmo email sendo usado por mais de um usuário;
  * E muitas outras...
