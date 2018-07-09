# 创建一个空白分支
# 复制临时文件目录
# 清空当前所有暂存 node_modules 不会删除
git checkout --orphan gh-pages
cp -R docs docs_temp
cp -R .gitignore .gitignore2
git rm -rf .
cp -R docs_temp/* .
mv .gitignore2 .gitignore
rm .gitignore2
git add .
git rm -rf .gitignore
git commit -m "init docs"