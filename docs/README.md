# O aplicativo Badges

O aplicativo de Badges tem como objetivo adicionar Badges de conteÃºdo em seu e-commerce. HÃ¡ uma aplicaÃ§Ã£o no admin em que poderÃ£o ser adicionadas, editadas e removidas as badges e hÃ¡ tambÃ©m um componente para frente de loja em que poderÃ£o ser acrescentadas as badges cadastradas no tema da sua store.

## Instalando

### O ADMIN

Para instalar o aplicativo no admin e, assim, gerenciar suas badges, deve-se entrar em seu terminal, logar no workspace e digitar o comando:

```json
  vtex install vtex.badges@1.x
```

### A Store

Para disponibilizar o componente em sua loja, Ã© necessÃ¡rio adicionar nas "dependencies" do manifest o seguinte cÃ³digo:

```json
  "vtex.badges": "1.x"
```

Em seguida, jÃ¡ Ã© possÃ­vel adicionar o componente de badges em sua loja.

## O funcionamento

### No ADMIN

ApÃ³s instalar o aplicativo em sua loja, jÃ¡ estarÃ¡ disponÃ­vel em seu ambiente ADMIN o aplicativo de Gerenciamento de Badges.
Para utilizÃ¡-lo, basta acessar a barra lateral em "OUTROS", a qual deve conter o aplicativo "Gerenciamento de Badges".
Clicando no aplicativo, deverÃ¡ visualizar a seguinte pÃ¡gina:

![Captura de Tela 2021-09-28 aÌs 08 53 05 (2)](https://user-images.githubusercontent.com/80836180/135082491-1a9996ab-fff6-4e3e-92a8-02ae2991b080.png)


Nessa pÃ¡gina Ã© possÃ­vel criar uma nova badge

- Adicionando o nome da badges
- Adicionando o conteÃºdo da badge (como imagem, texto ou html)
- Adicionando uma regra de ativaÃ§Ã£o

Um exemplo de como pode-se ser preenchido o formulÃ¡rio estÃ¡ contido abaixo

![Captura de Tela 2021-09-28 aÌs 09 03 54 (2)](https://user-images.githubusercontent.com/80836180/135083322-c8dc3177-5bc0-465f-858f-d0d14c0e6c01.png)

Nesse mesmo gerenciamento pode-se editar ou excluir uma badge em questÃ£o, basta-se mudar a aba do formulÃ¡rio de "Adicionar Badge" para "Editar Badges" e ser clicado no botÃ£o de "LineActions", como pode-se ser visto na imagem abaixo:

![Captura de Tela 2021-09-28 aÌs 09 19 36 (2)](https://user-images.githubusercontent.com/80836180/135085400-a9be20a6-adb7-461a-91a2-95601c06a3b9.png)

### Na Store

Agora com as badges cadastradas, Ã© possivel adiciona-las em sua loja. Para o correto funcionamento das mesmas Ã© necessÃ¡rio que o componente das badges seja aderida dentro de uma pÃ¡gina de produto (store.product) ou dentro de um product-summary. O exemplo abaixo demonstra como colocar uma badges na pÃ¡gina de produto

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

### `buybox-context` props

| Nome da Prop     | Tipo     | DescriÃ§Ã£o                                                                                                                                                       |
| ---------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `numberOfBadges` | `number` | Define quantas badges serÃ£o renderizadas                                                                                                                        |
| `text`           | `array`  | ContÃ©m definiÃ§Ãµes de valores que serÃ£o usados quando se renderiza uma badge de texto. Saiba mais sobre essas props no https://github.com/vtex-apps/rich-text    |
| `image`          | `array`  | ContÃ©m definiÃ§Ãµes de valores que serÃ£o usados quando se renderiza uma badge de imagem. Saiba mais sobre essas props no https://github.com/vtex-apps/store-image |

### O resultado final

Com todas as etapas concluÃ­das jÃ¡ Ã© possÃ­vel conferir o resultado final em sua store. O exemplo abaixo mostra como ficaria a uma store que foi seguido o passo a passo desse tutorial

<img width="1440" alt="Captura de Tela 2021-09-28 aÌs 10 27 46" src="https://user-images.githubusercontent.com/80836180/135096186-96473ef8-164f-4c46-a9e9-2978708dd7e4.png">

