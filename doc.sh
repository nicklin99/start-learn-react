# 创建一个空白分支
# 复制临时文件目录,复制 git 忽略
# 清空当前所有暂存，并从工作区删除文件，不跟踪的node_modules 不会删除
# 重命名.gitignore，复制docs内容到根目录
# 加入git版本库
# 删除.gitignore，并从工作区删除文件
# 提交
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