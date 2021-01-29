# Projeto 002 - Planilha de cotação para Freelas (2/2)

Uma planilha com a cotação de todo o projeto a ser desenvolvido para melhor visualização do cliente.

## Qual é o valor que o desafio entrega?

Quando você vai cotar um freelance, não adianta saber apenas o quanto vale a sua hora mas sim quantas horas você vai gastar fazendo cada uma das funcionalidades. Mas nem tudo no projeto é desenvolvimento e é sobre isso que devemos entender neste desafio.

Em qualquer tipo de projeto que envolve um software, desenvolver é o principal fator determinante para a conclusão do projeto. Porém é bem comum não cobrir **testes de aceitação** pois isso custa **tempo** e agora sabemos que o nosso tempo tem algum valor, certo?!

A ideia é desenvolver uma "planilha" na qual irá ser focada em cotar o trabalho como um todo, baseando-se em **horas de desenvolvimento e testes** de cada **funcionalidade**.

Pense em um formulário onde você deverá preencher os seguintes campos:

1. Nome da funcionalidade

   Um nome simples e objetivo do que deverá ser desenvolvido, para um fácil entendimento principalmente do **cliente**.

   Exemplo: Autenticação de Usuários

2. Horas de Desenvolvimento

   Entenda esse campo como a quantidade de horas que você julga para a feature como um todo. Após ter esse valor já definido na sua funcionalidade, dentro do seu projeto deverá ser quebrado tarefas que contemplem essas horas. O exemplo abaixo é apenas para entendimento de como ficaria num projeto real.

   Exemplo: Autenticação de usuários, 10 horas.

   - Tarefa 1: Estruturação do banco de dados -> 2 horas
   - Tarefa 2: Desenvolvimento do Front-end -> 5 horas
   - Tarefa 3: Desenvolvimento do Back-end -> 3 horas

3. Horas de Teste

   Testes são na maior parte do tempo priorizados apenas no back-end, onde de fato é onde deve tudo funcionar. Porém testes devem cobrir muito mais do que apenas o **caminho feliz** e muito desses caminhos infelizes são descobertos à partir de testes no front-end. Então é de suma importância reservar horas especificas para testar e ter principalmente um **roteiro de testes** AKA. BDD (Behavior Driven Development).

4. Valor da funcionalidade

   Deverá ser gerado baseado no **valor da sua hora** multiplicado pelos valores somados das horas de desenvolvimento e testes para melhor visualização do cliente.

A ideia do desafio é mostrar que para cotar um projeto, é necessário um pouco mais de cuidado para o que você está passando pro cliente e que ambas as partes estejam sempre alinhadas sobre o que está acordado.

## Desafio

Wireframe: https://wireframe.cc/pro/pp/115e33462323006

* Crie um fork deste repositório e trabalhe os arquivos da pasta "src".
* Crie uma pagina usando o conceito do wireframe acima com os seguintes elementos:

- Header
  1. Logo da He4rt Developers
  2. Nome do Projeto
- Barra de ações

  1. Inserir (Registro)
     - Ao clicar nesse botão, deverá aparecer o formulário/modal com os elementos descritos para o preenchimento dos campos: Funcionalidade, Horas de Desenvolvimento e Horas de Teste.
  2. Remover (Registro)
     - Ao clicar nesse botão, deverá haver algum tipo de seleção do campo que você deseja apagar.
  3. Importar (Registros)

     - Acione um input do tipo file e faça o upload de um arquivo de registros ao clicar no botão importar.
     - Deverá ser aceito um arquivo **json** com registros padronizados e esses mesmos registros devem sobrescrever os que já estão na tabela. O exemplo abaixo deverá ser usado como critério de aceite, sendo ele passado para um arquivo features.json.

     ```json
     [
         {
             "feature": "Authentication",
             "devHours": 10,
             "testHours": 2
         },
         {
             "feature": "User CRUD",
             "devHours": 14,
             "testHours": 3
         },
         {
             "feature": "User CRUD",
             "devHours": 14,
             "testHours": 3
         }
     ]
     ```

     - Caso não siga o padrão do json acima, deverá retornar um erro para o usuário invalidando o processo.

  4. Exportar (Registros)
     - Ao clicar no botão de exportar, deve ser gerado um arquivo **features.json** com todos os dados que estão na área de funcionalidades.
     - O modelo deve seguir o mesmo padrão do exemplo abaixo:
     ```json
     [
        {
            "feature": "string",
            "devHours": 0,
            "testHours": 0
        },
        ...
     ]
     ```

- Valor Hora

  1. Deverá ter um input com o valor (decimal) da sua hora.

- Lista de Funcionalidades

  1. Deverá ser feito em um tipo de lista (cards, tabelas etc) com os elementos do formulário.
  2. Deverá ter um atributo que será o calculo dos valores referentes a funcionalidade, sendo o calculo:

  ```text
  valorFeature = valorHora * ( horasDev + horasTeste)
  ```

  3. As colunas finais serão: Funcionalidade, Horas Dev, Horas Teste, Valor

- Sidebar

  1. Deverá ter um contador de quantas funcionalidades estão sendo feitas
  2. Deverá ter um contador de Horas de Desenvolvimento do projeto
  3. Deverá ter um contador de Horas de Teste do projeto
  4. Deverá ter uma somatória dos valores de todas as features como um valor total do PROJETO.

- Rodapé (Footer)
  1. Colocar links referentes as suas redes sociais e uma referencia a He4rtLabsChallenges.

Cuidados a se tomar:

- Todas as ações que forem tomadas, deverão ter algum retorno. Não serão aceito botões que não executam sem um retorno prévio pro usuário.
- Pense nessa lista de funcionalidades como um **objeto**.

### Comentários

O template passado no wireframe é OPCIONAL. Logo, você pode sim fazer algo no seu estilo porém devem ter os mesmos elementos descritos no desafio. Caso vocẽ faça um wireframe diferente que possa agregar no desafio, abra um pull request para que possamos avaliar.

A ideia é criar um objeto principal onde será armazenado todos os valores e refletir os mesmos na sua lista de funcionalidades e também nas ações de importar e exportar.

Os arquivos iniciais da pagina estarão com alguns comentários sobre

### Conclusão do Desafio

Commite as alterações feitas e faça um post ou no nosso Discord na sala `#he4rtlabs-challenges` ou um post no Twitter com a hashtag `#He4rtLabsChallenges` e iremos divulgar e/ou fazer um review do seu código.

Caso você se sinta confortável, deixamos um arquivo chamado REVIEW.MD para você fazer alguns comentários sobre o desafio e o que você achou no geral.

## Créditos

Este desafio foi desenvolvido pelo grupo [He4rt Developers](https://heartdevs.com) para uso livre da comunidade.

## Autor

- Daniel Reis (danielhe4rt) - Back-end Developer && He4rt Developers Leader - [Portfólio](https://danielheart.dev) - [Twitter](https://twitter.com/danielhe4rt)
