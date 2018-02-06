# Deploy Angular App to GitHub Pages
https://github.com/angular/angular-cli/wiki/stories-github-pages

###### For GitHub domain:  ng build --prod --output-path docs --base-href '/PROJECT_NAME/'
###### For subdomaind:  ng build --prod --output-path docs --base-href 'bg.examplesubdomain.com'

A simple way to deploy your Angular app is to use GitHub Pages.

The first step is to create a GitHub account, and then create a repository for your project. Make a note of the user name and project name in GitHub.

Then all you need to do is run ng build --prod --output-path docs --base-href '/PROJECT_NAME/', where PROJECT_NAME is the name of your project in GitHub. Make a copy of docs/index.html and name it docs/404.html.

Commit your changes and push. On the GitHub project page, configure it to publish from the docs folder.

And that's all you need to do! Now you can see your page at https://USER_NAME.github.io/PROJECT_NAME/.




# Deploy an Angular 2 app 

Go to Angular 2 project folder: 

1. npm i -g angular-cli-ghpages

2. Creat new gitHub Repo: 
- git init
- git add README.md
- git commit -m "first commit"
- git remote add origin https://github.com/petyoMitkv/testApp.git
- git push -u origin master

3. ng build --prod --base-href https://petyoMitkov.github.io/testApp/

4. ngh

*If you have to remove origin use:  git remote rm origin



# Set jQuery to Angular 2 

- npm install jquery --save


- npm install @types/jquery --save-dev


- Go to ./angular-cli.json file and add: script[ "../node_modules/jquery/dist/jquery.min.js" ]


- import $ from 'jquery/dist/jquery'; - in Component where use $ or jQuery

# Run a local AngularJS app on Chrome
- npm install http-server -g  then move to your project directory

- cd your-project directory
- http-server
