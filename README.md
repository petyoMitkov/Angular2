

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
