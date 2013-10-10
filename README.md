rememberAll
===========

This app was built by Stefan and Darren Fall 2013


The procfile is for heroku only





Building for PhoneGap follow the following link:

There are 2 ways to create a phoneGap Applications:
1 - Create an adobe account and you can do it through Command Line strictly, or you can 
use the site https://build.phonegap.com
****I couldn't do option 1 Because Adobe wouldn't accept my account Good Luck****

2 - Or you can use your github account but you must do some through Command Line and then use the 
website(https://build.phonegap.com) for the build process.

Using Option 1 or 2:

http://docs.phonegap.com/en/edge/guide_cli_index.md.html#PhoneGap%0ABuild

A - npm install -g phonegap

B - to your public folder and run:
    phonegap create hello com.example.hello HelloWorld

C - Go into the folder created and into the www, look at the index.html and grab this
    code and add it to your
    index file:
   <script type="text/javascript" src="phonegap.js"></script>
   <script type="text/javascript" src="js/index.js"></script>
   ****You must add your jquery include in between**** 
   example(<script src="lib/jquery-1.10.2.js"></script>)
   <script type="text/javascript">
        app.initialize();
   </script>

D - Now move your index.html  and all of your files from your public folder into the      
    www directory, merge folders and overwrite if needed

E -  Also edit the config.xml file and add the correct server information
     example:
     <access origin="http://bonified.herokuapp.com" />
     <access origin="http://bonified.herokuapp.com/*" />
     <access origin="*" />

F -  Change your URL's. In your Backbone models and in any ajax calls from the client, 
     so if the call is initially /getHighScores, it should now be 
     bonified.herokuapp.com/getHighScores.

At this point depending on your choice see below:

Option 1:
G -  You can continue with Command Line or got to https://build.phonegap.com to finish 
     the process

Option 2:
G -  You must go the website https://build.phonegap.com to finish the process

