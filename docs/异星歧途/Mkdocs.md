# Mkdocs部署
### Mkdocs配置
安装mkdocs
```powershell
pip install mkdocs-material
```

版本检查
```powershell
mkdocs --version
```

初始化
```powershell
cd D:\Program Files\Git-Repository\username.github.io
mkdocs new .
```

编译
```powershell
mkdocs build
```

预览
```powershell
mkdocs serve
```

### SSH配置
```powershell
git remote set-url origin git@github.com:Palpatine666666/Palpatine666666.github.io.git
```

### workflows配置
```powershell
cd D:\Program Files\Git-Repository\username.github.io
mkdir .github
cd .github
mkdir workflows
cd workflows
```

在workflows下创建ci.yml
```yml
name: ci
on:
  push:
    branches:
      - master
      - main
permissions:
  contents: write
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Configure Git Credentials
        run: |
          git config user.name github-actions[bot]
          git config user.email 41898282+github-actions[bot]@users.noreply.github.com
      - uses: actions/setup-python@v5
        with:
          python-version: 3.x
      - run: echo "cache_id=$(date --utc '+%V')" >> $GITHUB_ENV
      - uses: actions/cache@v4
        with:
          key: mkdocs-material-${{ env.cache_id }}
          path: .cache
          restore-keys: |
            mkdocs-material-
      - run: pip install mkdocs-material
      - run: mkdocs gh-deploy --force
```

### github配置
Github Repository/setings/Actions/General/Workflow permissions

勾选

- Read and write permissions
- Allow GitHub Actions to create and approve pull requests

Github Repository/setings/Pages/Build and deployment/Branch

选择

- gh-pages


### 部署
#### 手动部署
```powershell
mkdocs gh-deploy --force
```
##### workflows
```powershell
git add .
git commit -m "Update"
git push
```