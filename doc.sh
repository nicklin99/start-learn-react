git checkout --orphan gh-pages
git rm -rf ./*
cp -R docs/* .
git commit -m "init docs"