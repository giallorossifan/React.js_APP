# place .nojekyll to bypass Jekyll processing
echo > .nojekyll

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git checkout -B main
git add -A
git commit -m 'deploy'

# if you are deploying to https://<username>.github.io
# git push -f git@github.com:<username>/<username>.github.io.git main

# if you are deploying to https://<username>.github.io/<repo>
# git push -f git@github.com:roymansoor.test.git main:gh-pages

cd -
