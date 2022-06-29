# O aplicativo Badges

O aplicativo de Badges tem como objetivo adicionar Badges de conteúdo em seu ecommerce. Há uma aplicação no admin em que poderão ser adicionadas, editadas e removidas as badges e há também um componente para frente de loja em que poderão ser acrescentadas as badges cadastradas no tema da sua store.

## Instalando

### O ADMIN

Para instalar o aplicativo no admin e, assim, gerenciar suas badges, deve-se entrar em seu terminal, logar no workspace e digitar o comando:

```json
  vtex install vtex.badges@3.x
```

### A Store

Para disponibilizar o componente em sua loja, é necessário adicionar nas "peerDependencies" do manifest o seguinte código:

```json
  "vtex.badges": "3.x"
```

Em seguida, já é possível adicionar o componente de badges em sua loja.

## O funcionamento

### No ADMIN

Após instalar o aplicativo em sua loja, já estará disponível em seu ambiente ADMIN o aplicativo de Gerenciamento de Badges.
Para utilizá-lo, basta acessar a barra lateral em "OUTROS", a qual deve conter o aplicativo "Gerenciamento de Badges".
Clicando no aplicativo, deverá visualizar a seguinte página:

<img width="1440" alt="Captura de Tela 2021-10-22 às 11 21 22" src="https://user-images.githubusercontent.com/80836180/138470628-9936a747-96ec-40a3-8ab5-d57115654e2d.png">

Nessa página é possível criar uma nova badge

- Adicionando o nome da badges
- Adicionando o conteúdo da badge (como imagem, texto ou html)
- Adicionando a prioridade da badges (sendo 1 a prioridade máxima e 5 a menor)
- Adicionando uma regra de ativação

Um exemplo de como pode-se ser preenchido o formulário que está contido abaixo.

<img width="1440" alt="Captura de Tela 2021-10-22 às 11 02 41" src="https://user-images.githubusercontent.com/80836180/138469242-868ff4a2-e808-4371-8f33-099e39743877.png">

Nesse mesmo gerenciamento pode-se editar ou excluir uma badge em questão, basta-se mudar a aba do formulário de "Adicionar Badge" para "Editar Badges" e ser clicado no botão de "LineActions", como pode-se ser visto na imagem abaixo:

<img width="1440" alt="Captura de Tela 2021-12-03 às 10 22 10" src="https://user-images.githubusercontent.com/80836180/144609583-c6583e99-79d6-4224-b267-07c6c3f54767.png">

Também é importante acrescentar que para o perfeito funcionamento do aplicativo, no campo de regra de ativação deve haver pelo menos uma condição que seja utilizado o verbo "É". Desta forma, não deve haver um badge cuja regra de ativação seja <b>unicamente<b> "NÃO É"

### Na Store

Agora com as badges cadastradas, é possível adiciona-las em sua loja. Para o correto funcionamento das mesmas é necessário que o componente das badges seja aderida dentro de uma página de produto (store.product) ou dentro de um product-summary. O exemplo abaixo demonstra como colocar uma badges na página de produto.

```diff
  "store.product": {
    "children": [
+     "store-badges",
      "stack-layout",
      "breadcrumb",
      "flex-layout.row#main",
      "condition-layout.product"
    ]
  },

+  "store-badges":{
+    "props": {
+      "numberOfBadges": 1,
+      "text":{
+        "font": "t-heading-5",
+        "textColor": "blue",
+        "textAlignment": "CENTER",
+        "textPosition": "CENTER",
+        "htmlId": "teste1"
+      },
+      "image":{
+        "blockClass": "container",
+        "height": 500,
+        "width": 500,
+         "minWidth": 25,
+         "minHeight": 25,
+         "alt": "teste",
+         "title": "title",
+         "preload": true
+      }
+    }
+  }

```

### `store-badges` props

| Nome da Prop     | Tipo     | Descrição                                                                                                                                                       |
| ---------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `numberOfBadges` | `number` | Define quantas badges serão renderizadas                                                                                                                        |
| `text`           | `array`  | Contém definições de valores que serão usados quando se renderiza uma badge de texto. Saiba mais sobre essas props no https://github.com/vtex-apps/rich-text    |
| `image`          | `array`  | Contém definições de valores que serão usados quando se renderiza uma badge de imagem. Saiba mais sobre essas props no https://github.com/vtex-apps/store-image |

### O resultado final

Com todas as etapas concluídas já é possível conferir o resultado final em sua store. A ordem das badges é definida de acordo com a prioridade escolhida na hora de cadastrá-las. O exemplo abaixo mostra como ficaria a uma store que foi seguido o passo a passo desse tutorial.

<img width="1432" alt="Captura de Tela 2021-12-03 às 10 16 28" src="https://user-images.githubusercontent.com/80836180/144608846-590d4d12-4924-479c-976b-4573a6b6bacc.png">

**Upcoming documentation:**

- [Feature/test back](https://github.com/vtex-apps/badges/pull/17)
