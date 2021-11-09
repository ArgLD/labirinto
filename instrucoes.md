## Orientação

1. Faça com que cada célula do labirinto seja um DIV.
2. Faça de cada linha do labirinto um DIV usando "display: flex;"
3. Escolha uma opção: A) use um DIV absolutamente posicionado para representar a posição atual do jogador no labirinto, ou B) faça o DIV do jogador ser anexado (appended) a uma célula DIV pelo mesmo motivo.
4. Você precisa registrar (ou receber via solicitação) a posição atual do jogador no labirinto (índices de linha e de coluna). Você pode fazer isso de uma entre várias maneiras. Você poderia manter um registro persistente da posição do jogador em um, digamos, array ou objeto global cujo a função é a de registrar a posição atual do jogador. Você poderia atualizar seu array de mapa constantemente para refletir o movimento do jogador (mover o "S" pelo mapa). Você pode manter seus índices em atributos de dados em seu HTML e acessá-los através da propriedade DIV de jogador "parentElement" (no caso do 3B). Ou você poderia fazer um pouco de matemática na posição atual do DIV do jogador na tela, relativo à posição inicial do elemento de início na tela e ao tamanho das células (no caso do 3A).
5. O movimento pode ser realizado de algumas maneiras diferentes: No caso do 3A, mude a posição absoluta do DIV do jogador. Ou, no caso do 3B, faça o append do DIV do jogador ao próximo DIV de célula. (Você poderia usar "document.querySelector()" e o seletor CSS de atributos para obter o próximo elemento de célula pelos índices que denominou via atributos de dados.)

## Requisitos

1. O jogador deve começar no quadrado inicial.
2. Configure um ou mais handlers de evento para mover seu DIV de jogador da mesma forma que fez nas avaliações anteriores sobre eventos de teclado.
3. Não permita que o jogador atravesse uma parede ou saia dos limites do labirinto.
4. Quando o jogador se mover para o quadrado final, mostre ao usuário que ele venceu (não use console.log ou alertas para isso).

## Para um desafio extra

Adicione animações CSS3 para permitir que os jogadores se movam suavemente de uma célula para outra.

Você pode adicionar os seguintes atributos CSS ao DIV que representa o jogador:

                    animation-duration: 100ms;

Você pode criar classes com animações CSS3 associadas representando as direções de movimento, por exemplo:

                    @keyframes slideRight {
                    from {margin-left: -33px;}
                    to {margin-left: 0;}
                    }
                    .slideRight {animation-name: slideRight;}

Você pode precisar remover a classe associada à animação anterior antes de poder adicioná-la de volta e executá-la novamente. Você pode achar útil usar window.setTimeout para especificar uma função para remover as classes de animação (depois de permitir um timeout suficiente para que a animação seja concluída).