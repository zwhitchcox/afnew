rm -rf build
yarn build
cd build
git init
git checkout -b gh-pages
git remote add origin git@github.com:zwhitchcox/afnew
git add . -A
git commit -m "full site"
git push -f -u origin gh-pages