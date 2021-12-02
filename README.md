# O aplicativo Badges

O aplicativo de Badges tem como objetivo adicionar Badges de conte�do em seu e-commerce. H� uma aplica��o no admin em que poder�o ser adicionadas, editadas e removidas as badges e h� tamb�m um componente para frente de loja em que poder�o ser acrescentadas as badges cadastradas no tema da sua store.

## Instalando

### O ADMIN

Para instalar o aplicativo no admin e, assim, gerenciar suas badges, deve-se entrar em seu terminal, logar no workspace e digitar o comando:

```json
  vtex install vtex.badges@1.x
```

### A Store

Para disponibilizar o componente em sua loja, � necess�rio adicionar nas "dependencies" do manifest o seguinte c�digo:

```json
  "vtex.badges": "1.x"
```

Em seguida, j� � poss�vel adicionar o componente de badges em sua loja.

## O funcionamento

### No ADMIN

Ap�s instalar o aplicativo em sua loja, j� estar� dispon�vel em seu ambiente ADMIN o aplicativo de Gerenciamento de Badges.
Para utiliz�-lo, basta acessar a barra lateral em "OUTROS", a qual deve conter o aplicativo "Gerenciamento de Badges".
Clicando no aplicativo, dever� visualizar a seguinte p�gina:

<img width="1440" alt="Captura de Tela 2021-10-22 a s 11 21 22" src="https://user-images.githubusercontent.com/80836180/138470628-9936a747-96ec-40a3-8ab5-d57115654e2d.png">

Nessa p�gina � poss�vel criar uma nova badge

- Adicionando o nome da badges
- Adicionando o conte�do da badge (como imagem, texto ou html)
- Adicionando a prioridade da badges
- Adicionando uma regra de ativa��o

Um exemplo de como pode-se ser preenchido o formul�rio que est� contido abaixo.

<img width="1440" alt="Captura de Tela 2021-10-22 a s 11 02 41" src="https://user-images.githubusercontent.com/80836180/138469242-868ff4a2-e808-4371-8f33-099e39743877.png">

Nesse mesmo gerenciamento pode-se editar ou excluir uma badge em quest�o, basta-se mudar a aba do formul�rio de "Adicionar Badge" para "Editar Badges" e ser clicado no bot�o de "LineActions", como pode-se ser visto na imagem abaixo:

![Captura de Tela 2021-09-28 a s 09 19 36 (2)](https://user-images.githubusercontent.com/80836180/135085400-a9be20a6-adb7-461a-91a2-95601c06a3b9.png)

### Na Store

Agora com as badges cadastradas, � poss�vel adiciona-las em sua loja. Para o correto funcionamento das mesmas � necess�rio que o componente das badges seja aderida dentro de uma p�gina de produto (store.product) ou dentro de um product-summary. O exemplo abaixo demonstra como colocar uma badges na p�gina de produto.

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

| Nome da Prop     | Tipo     | Descri��o                                                                                                                                                       |
| ---------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `numberOfBadges` | `number` | Define quantas badges ser�o renderizadas                                                                                                                        |
| `text`           | `array`  | Cont�m defini��es de valores que ser�o usados quando se renderiza uma badge de texto. Saiba mais sobre essas props no https://github.com/vtex-apps/rich-text    |
| `image`          | `array`  | Cont�m defini��es de valores que ser�o usados quando se renderiza uma badge de imagem. Saiba mais sobre essas props no https://github.com/vtex-apps/store-image |

### O resultado final

Com todas as etapas conclu�das j� � poss�vel conferir o resultado final em sua store. A ordem das badges � definida de acordo com a prioridade escolhida na hora de cadastr�-las. O exemplo abaixo mostra como ficaria a uma store que foi seguido o passo a passo desse tutorial.

<img width="1440" alt="Captura de Tela 2021-09-28 a s 10 27 46" src="https://user-images.githubusercontent.com/80836180/135096186-96473ef8-164f-4c46-a9e9-2978708dd7e4.png">

**Upcoming documentation:**

- [Feature/test back](https://github.com/vtex-apps/badges/pull/17)

 - [change pageSize to correct error in masterdata](https://github.com/vtex-apps/badges/pull/22)
 - [tradu��o do time de location](https://github.com/vtex-apps/badges/pull/23)
 - [billingOptions](https://github.com/vtex-apps/badges/pull/24)