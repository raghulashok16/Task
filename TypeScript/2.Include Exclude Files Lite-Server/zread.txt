TypeScript Commands terminal/cmd commands for config...
<------------------------------------------------------------------------->
--> tsc file_name.ts 
{this command will compile typescript into javascript}
<------------------------------------------------------------------------->
--> npm install
{this command will install node to our project.}
<------------------------------------------------------------------------->
--> npm install --save-dev lite-server
{this will install lite-server to our project.this will be available only in the development environment.we need to add (,"start":"lite-server") inside scriptts in package.json(node package file).}
<------------------------------------------------------------------------->
--> npm start
{this will start the lite-server at localhost:3000.
you need use tsc file_name.ts command before using server.}
<------------------------------------------------------------------------->
--> ctrl+c
{this close the lite-server at localhost:3000}
<------------------------------------------------------------------------->
--> tsc file_name.ts --watch (or) tsc file_name.ts -w
{this command is used to set watch mode for our project if we have a single ts file. this command will automatically compile the ts file if any changes occurs in the ts file.}
<------------------------------------------------------------------------->
--> tsc
{this command will compile all the ts file in our project. we dont need to specify the file name.}
<------------------------------------------------------------------------->
--> tsc --init
{this command will create a typescript config file for our project.}
<------------------------------------------------------------------------->
--> tsc --watch (or) tsc -w
{this command will watch all the ts file in our project. if any changes occurs then it will compile the ts file and updae the existing js file.}
<------------------------------------------------------------------------->
--> excluding files in TypeScript
{(,"exclude":["file_name.ts","file_name.ts"])
by adding this line of code inside tsconfig.json we can particularly exclue a file from compiling.}
<------------------------------------------------------------------------->
--> excluding files using * in TypeScript
{(,"exclude":["*.some_name.ts"])
by adding this line of code inside tsconfig.json we can particularly exclue files that ends with ("some_name.ts") from compiling.}
<------------------------------------------------------------------------->
--> excluding files using patterns in TypeScript
{(,"exclude":["**/*.some_name.ts"])
by adding this line of code inside tsconfig.json we can particularly exclue files that has the pattern with ("**/*.some_name.ts") from compiling.}
<------------------------------------------------------------------------->
--> excluding folders using patterns in TypeScript
{(,"exclude":["folder_name"])
by adding this line of code inside tsconfig.json we can particularly exclue folder that has the name with ("folder_name") from compiling.}
<------------------------------------------------------------------------->
 --> including files in TypeScript
{(,"include":["file_name.ts","file_name.ts"])
by adding this line of code inside tsconfig.json we can particularly include  the file that has the name with ("file_name.ts") in compiling.}
<------------------------------------------------------------------------->
{exclude files - include files = remaining files will be compiled.}
<-------------------------------------------------------------------------> 
{for smaller project we can use (,"files":["app.ts"]) to be compiled.}
<------------------------------------------------------------------------->
