
# Exemplo de organização da Plataforma ZW com NX

Esse repositório foi construído através da ferramenta NX, um alternativa ao Angular CLI. Para mais informações visite a [doc da ferramenta](https://nx.dev/getting-started/intro).

Esse repositório demonstra como fragmentar a plataforma em várias aplicações. A lógica em comum é compartilhada através de uma lib chamada de [sdk](./libs/sdk).
Dentro dessa lib existe lógica para gestão de estado de sessão, navegação entre rotas internas de aplicações diferentes e utilitários que permitem uma busca global como existente na plataforma hoje.

Nesse exemplo os elementos visuais foram compartilhados também no SDK porem na prática devem ficar em uma lib dedicada para elementos de interface.

As aplicações de exemplo são [Treino](./apps/treino) e [Adm](./apps/adm).

## Visualizando as aplicações de exemplo

Pre-requisitos: Instalar Node(versão 12) e npm

1. Instalar dependências
```
> npm i
```

### Treino

1. Rodar localmente
```
> nx s treino --port 4300
```
2. Visite http://localhost:4300


### Adm

1. Rodar localmente
```
> nx s adm --port 4200
```
2. Visite http://localhost:4200