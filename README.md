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






Heroku
======

1. Before you follow the guide below, you need to have registered an 
   account on Heroku.com and installed their software (all easy to 
   find)


The steps to upload your code onto heroku.com and host your node app

Follow EVERY step on this site UNTIL you get to a command saying git push heroku master (you can skip the step that says "foreman start"
https://devcenter.heroku.com/articles/getting-started-with-nodejs#prerequisites

If you try to do the next step (git push heroku master) and it gives an error saying something about "access denied (something about public key)
do the following commands:
heroku keys:add (enter)
then just tab and add all your .pub files in the c:\users\%YOUR USER%\.shh folder

If you are having problems finding or making your public keys go to this site.
http://stackoverflow.com/questions/12206779/git-push-heroku-master-permission-denied-publickey-fatal-the-remote-end-hung

If you dont get the error, just continue following the article above. You can stop when you do the command:
   heroku ps:scale web=1




Troubles
========

1. When I was trying to to upload code to the heroku server I kept
    getting an error that said I failed to authenticate(public key).
    I later found out that I wasn't using the right public on my end.

    I fixed this by following the guide presented here (summary, I was trying to upload code using my github public key whereas I was supopose to use my other key that I had in my ~/ssh folder).

    http://stackoverflow.com/questions/12206779/git-push-heroku-master-permission-denied-publickey-fatal-the-remote-end-hung

2. When we were using phonegap for the first time, we forgot to add 
    the server URL to the backbone model URLs so backbone would look
    to the server from the client side. Remember, backbone is now completely separate from the server when you phonegap it.

3. When you are trying to push code to the heroku server, make a
    branch from the git link provided by heroku. This way, pushing code to heroku is SUPER easy.You just checkout to the heroku branch, pull from the master, then push (which pushes to the server).

4. To use jsdoc, you need to put in the command line:
    jsdoc %project folder% *
    to generate a doc for your whole project

5. WHen using mongoose to get all the highscores of a specific user,
    it was easier for me to do just a find, then narrrow down the search, then trying to use findOne (just a username) and getting all the data that way. I suppose it makes more sense to use find when you want multi objects back (or a collection). 

6. DONT EVER MANUALLY CHANGE THE PATH, it will get trunked if you
    attempt this via the command line.

7. Use underscores when trying to type a commit message via the
    command line. Git doesn't support spaces in your string for some reason.



