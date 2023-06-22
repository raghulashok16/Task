TypeScript Commands terminal/cmd commands for config...
<------------------------------------------------------------------------->
--> tsc file_name.ts 
this command will compile typescript into javascript
<------------------------------------------------------------------------->
--> npm install
this command will install node to our project.
<------------------------------------------------------------------------->
--> npm install --save-dev lite-server
this will install lite-server to our project.this will be available only in the development environment.we need to add ("start":"lite-server") inside scriptts in package.json.
<------------------------------------------------------------------------->
--> npm start
this will start the lite-server at localhost:3000.
you need use tsc file_name.ts command before using server.
<------------------------------------------------------------------------->
--> ctrl+c
this close the lite-server at localhost:3000
<------------------------------------------------------------------------->
--> tsc file_name.ts --watch (or) tsc file_name.ts -w
this command is used to set watch mode for our project if we have a single ts file. this command will automatically compile the ts file if any changes occurs in the ts file.
<------------------------------------------------------------------------->
--> tsc
this command will compile all the ts file in our project. we dont need to specify the file name.
<------------------------------------------------------------------------->
--> tsc --init
this command will create a typescript config file for our project.
<------------------------------------------------------------------------->
--> tsc --watch (or) tsc -w
this command will watch all the ts file in our project. if any changes occurs then it will compile the ts file and updae the existing js file.