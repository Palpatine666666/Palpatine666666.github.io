---
title: Docusaurus
id: Docusaurus
---

# Docusaurus

终端管理员

```powershell
cd "D:\Program Files\Git-Repository\Palpatine666666.github.io"
```

```powershell
npx create-docusaurus@latest . classic
```

```powershell
npm run start
```

```javascript
/** @type {import('@docusaurus/types').Config} */

const config = {

  title: '帕尔帕廷的全息记录仪',

  tagline: '神喜欢简洁。',

  favicon: 'img/favicon.ico',

  

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future

  future: {

    v4: true, // Improve compatibility with the upcoming Docusaurus v4

  },

  

  // Set the production url of your site here

  url: 'https://Palpatine666666.github.io',

  // Set the /<baseUrl>/ pathname under which your site is served

  // For GitHub pages deployment, it is often '/<projectName>/'

  baseUrl: '/',

  

  // GitHub pages deployment config.

  // If you aren't using GitHub pages, you don't need these.

  organizationName: 'Palpatine666666', // Usually your GitHub org/user name.

  projectName: 'Palpatine666666.github.io', // Usually your repo name.

  deploymentBranch: 'gh-pages',

  

  onBrokenLinks: 'throw',

  

  // Even if you don't use internationalization, you can use this field to set

  // useful metadata like html lang. For example, if your site is Chinese, you

  // may want to replace "en" with "zh-Hans".

  i18n: {

    defaultLocale: 'zh-CN',

    locales: ['zh-CN'],

  },

```

Settings-Pages-Build and deployment-Source-GitHub Actions

Settings-Actions-General-Workflow permissions-Read and write permissions

```powershell
git init
```

```powershell
git add .
```

```powershell
git commit -m "Initial"
```

```powershell
git branch -M main
```

```powershell
git remote add origin https://github.com/Palpatine666666/Palpatine666666.github.io.git
```

```powershell
git push -u origin main --force
```


```
npm run build
```

```
npm run serve
```

```
$env:GIT_USER="Palpatine666666"; npm run deploy


```

```
mkdir -p .github/workflows
```