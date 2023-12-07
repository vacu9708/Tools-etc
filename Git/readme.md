Git is a distributed version control system used for tracking changes in source code during software development. 

# How to create a new branch
~~~
git init
git remote add origin https://github.com/vacu9708/Shopping-mall.git
git branch -M <branch>
git add .
git commit -m "first commit"
git push -u origin [branch] (-u means that "origin [branch name]" can be omitted from now on)
~~~

# How to create a child branch
~~~
git clone -b <parent branch> https://github.com/vacu9708/Shopping-mall.git .
git branch -M <child branch>
git push -u origin <child branch>
~~~
# How to pull from a parent branch
git pull origin <parent branch>

# How to revert the latest push
~~~
git pull
git reset head^
git push -f
~~~
# How to merge two branches on github
1. Click on Pull requests
2. Click on New pull requests
3. On the pull request page, select the merged branch as the "compare" and the target branch as the "base"
4. Review changes, Create the pull request, Merge the pull request

# How to check the differences from the latest commit
- git diff head : Differences in the local branch
- git diff head..origin/<branch> (--name-only) : Dfferences between the remote branch and local changes that have been committed.

# How to resolve a merge conflict that occured in the file to which a commit was pulled
1. Modify the file where the conflict occured
2. Commit the file
3. Pull

# etc
- git log : commit log
- git branch : Current branch
- git push origin --delete [name] : Delete a remote branch
- git branch -D : Delete a local branch

# How to merge into the current branch in local
~~~
git pull origin [current branch]
git merge [branch]: Merge the branch into the current branch
add, commit, push
~~~
