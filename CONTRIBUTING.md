# Frontend
We'd appreciate you to contribute to our source code and make Marax.ai even better than it is
today! Here are the guidelines we'd like you to follow:


- [GitLab](#git)
- [Coding Style](#code-style)
- [Pull Request Process](#pull-req)
- [Questions and Bugs](#q&a)


## <a name="git"></a> GitLab
GitLab is used to host code, to track issues and feature requests, as well as accept pull requests.
Pull requests are the best way to propose changes to the codebase (we use GitLab Flow). We actively welcome your pull requests:

- Clone the repo and create your branch from master.
- If you've added code that should be tested, add tests.
- If you've changed APIs, update [CHANGELOG.md][CHANGELOG.md].
- Ensure the test suite passes.
- Make sure your code lints.
- Issue that pull request!

---

## <a name="code-style"></a> Coding Style
Use a consistent coding style.
- You can try running npm run lint for style unification.

---

## <a name="pull-req"></a> Pull Request Process
- Ensure any install or build dependencies are removed before the end of the layer when doing a build.
- Update the [CHANGELOG.md][CHANGELOG.md] with details of changes to the interface, this includes new environment variables, exposed ports, useful file locations and container parameters.
- Increase the version numbers in [CHANGELOG.md][CHANGELOG.md] and the [README.md][README.md] to the new version that this Pull Request would represent. The versioning scheme we use is [Semantic Versioning](http://semver.org/spec/v2.0.0.html).
- You may merge the Pull Request in once you have the sign-off of the senior developer/tech lead, or if you do not have permission to do that, you may request the tech lead to merge it for you.

#### Pull Request Submission Guidelines
Before you submit your pull request consider the following guidelines:

- Make your changes in a new git branch:

    ```shell
    git checkout -b my-fix-branch master
    ```
- Create your patch commit, __including appropriate test cases__.
- Follow our [Coding Rules](#code-style).    
- If the changes affect public APIs, change or add [CHANGELOG.md][CHANGELOG.md].
- Commit your changes using a descriptive commit message.

    ```shell
    git commit -a
    ```
    Note: the optional commit `-a` command line option will automatically "add" and "rm" edited files.

- Before creating the Pull Request, package and run all tests a last time:

    ```shell
    yarn grunt test
    ```  
- Push your branch to GitLab:

    ```shell
    git push origin my-fix-branch
    ```

- If we suggest changes, then:

  * Make the required updates.
  * Re-run the AngularJS test suite to ensure tests are still passing.
  * Commit your changes to your branch (e.g. `my-fix-branch`).
  * Push the changes to your GitLab repository (this will update your Pull Request).

    You can also amend the initial commits and force push them to the branch.

    ```shell
    git rebase master -i
    git push origin my-fix-branch -f
    ```

    This is generally easier to follow, but seperate commits are useful if the Pull Request contains
    iterations that might be interesting to see side-by-side.
          

#### After your pull request is merged

After your pull request is merged, you can safely delete your branch and pull the changes from the main (upstream) repository:

- Delete the remote branch on GitLab either through the GitLab web UI or your local shell as follows:

    ```shell 
    git push origin --delete my-fix-branch 
    ```

- Check out the master branch:

    ```shell 
    git checkout master -f 
    ```     

- Delete the local branch:

    ```shell 
    git branch -D my-fix-branch 
    ```    

- Update your master with the latest upstream version:

    ```shell 
    git pull --ff upstream master 
    ```

---               

## <a name="q&a"></a> Questions and Bugs
Do not open issues for general support questions as we want to keep GitLab issues for bug reports and feature requests.

We use GitLab issues to track public bugs. Report a bug by opening a new issue. Write bug reports with detail, background, and sample code.

Great Bug Reports tend to have:
- A quick summary and/or background.
- Steps to reproduce
    * Give sample code if you can.
- What you expected would happen.
- What actually happens.
- Notes (possibly including why you think this might be happening, or stuff you tried that didn't work).    

[CHANGELOG.md]: CHANGELOG.md
[README.md]: README.md





