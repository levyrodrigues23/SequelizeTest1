# Guia Completo para Configurar ESLint e Prettier

# 1. Instalar o ESLint
# Execute o comando abaixo para instalar o ESLint no seu projeto.
# Este passo instala o ESLint como dependência de desenvolvimento.
npm install --save-dev eslint

# 2. Inicializar o ESLint
# Gere o arquivo de configuração do ESLint utilizando o comando abaixo.
# Isso cria um arquivo `.eslintrc` com as configurações iniciais.
npx eslint --init

# 3. Instalar o Prettier
# Instale o Prettier para formatação de código.
# Isso irá adicionar o Prettier como dependência de desenvolvimento.
npm install --save-dev prettier

# 4. Criar o arquivo de configuração do Prettier
# Crie um arquivo chamado `.prettierrc` na raiz do seu projeto e adicione o seguinte conteúdo:
# Isso irá definir as regras básicas de formatação do Prettier.
echo '{
  "singleQuote": true,
  "semi": true,
  "trailingComma": "all",
  "tabWidth": 2,
  "printWidth": 80
}' > .prettierrc

# 5. Instalar as dependências do ESLint para integrar com o Prettier
# Para integrar o ESLint com o Prettier e evitar conflitos entre ambos, instale as dependências abaixo.
# Essas dependências configuram o ESLint para seguir as regras do Prettier.
npm install --save-dev eslint-config-prettier eslint-plugin-prettier

# 6. Criar ou ajustar o arquivo `.eslintrc.js`
# Crie um arquivo `.eslintrc.js` na raiz do seu projeto e adicione as seguintes configurações:
# Esse arquivo define as regras de linting para o seu projeto e também inclui as regras do Prettier.
echo 'import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import("eslint").Linter.Config[]} */
export default [
  {
    languageOptions: {
      globals: globals.node,
    },
  },
  pluginJs.configs.recommended,
  {
    extends: [
      "plugin:prettier/recommended", // Integração com Prettier
    ],
    rules: {
      "class-methods-use-this": "off",
      "no-param-reassign": "off",
      "camelcase": "off",
      "no-unused-vars": ["error", { "argsIgnorePattern": "^_" }],
    },
  },
];' > .eslintrc.js

# 7. Adicionar a configuração do Prettier no VS Code e outras configurações
# No VS Code, você pode adicionar a configuração do Prettier para formatar automaticamente o código.
# Crie um arquivo chamado `settings.json` na pasta `.vscode` (se não existir) e adicione o seguinte conteúdo:
echo '{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true
}' > .vscode/settings.json

# 8. (Opcional) Adicionar um script no `package.json` para rodar o Prettier
# No arquivo `package.json`, adicione o seguinte script para rodar o Prettier manualmente.
# Este comando irá formatar todos os arquivos do seu projeto com o Prettier.
# A linha a ser adicionada em "scripts":
echo '{
  "scripts": {
    "format": "prettier --write ."
  }
}' > package.json

# 9. (Opcional) Configurar ESLint para corrigir ao salvar no VS Code
# Para corrigir automaticamente o código com ESLint ao salvar, adicione o seguinte código no arquivo `settings.json` do VS Code:
echo '{
  "eslint.autoFixOnSave": true
}' >> .vscode/settings.json

# Como usar o Prettier manualmente:
# Após configurar tudo, você pode rodar o Prettier manualmente com o comando:
npm run format
