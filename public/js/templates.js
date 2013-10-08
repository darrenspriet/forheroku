

window.JST = {};

window.JST['index'] = _.template(
"<% var viewportWidth = $(window).width();%>"+
"<%if( viewportWidth >500){%>"+
"<div class='center'>"+
"<%}%>"+
"<h3 class='center'>BONIFIED</h3>"+
"<p>"+
"<a href='#/highscore'>"+
"<button class='btn btn-large'>High Scores</button>"+
"</a>"+
"</p>"+
"<p>"+
"<a href='#/bonify'>"+
"<button class='btn btn-large'>Get Bonified</button>"+
"</a>"+
"</p>"+
"<h4>Extras</h4>"+
"<div class='xin'>"+
"<span class='label'>Authors:</span>"+
"Darren and Stefan <br/>"+
"<span class='label'>Languages used:</span>"+
"Node.js, Express.js, Html5, Javascript, Mongoose, MongoDB <br/>"+
"<span class='label'>Instructions:</span>"+
"Click 'Get BONIFIED?' to get started. Memorize the letter sequence that have been presented to you. The longer the sequence, the higher the score. This game is case insensitive<br/>"+
"</div>"+
"</div>"
);


window.JST['highscore'] = _.template(
"<div class='center'>"+
"<h3>HIGHSCORES</h3>"+
"<form class='search'>"+
"<div>"+
"<label>Search for your highscore:</label>"+
"<input type='text' id='username' placeholder='enter your username' autocomplete='off' autofocus class='input-block-level'/><br/>"+
"</div>"+
"<button id='searchButton' value='Search!' class='btn btn-primary' >Search!</button>"+
"</form>"+
"<a href='#/bonify'>"+
"<button class='btn'>New game?</button>"+
"</a>"+
"<table class='table table-bordered table-striped table-condensed'>"+
"<% _.each(highscoreArray, function(Array) { %>"+
"<tr><td><%=Array[0]%></td><td><%=Array[1]%></td></tr>"+
"<% }); %>"+
"</table>"+
"</div>"
);

window.JST['bonify'] = _.template(
"<div class='center'>"+
"<h3> LETS GET BONIFIED!!! </h3>"+
"<p class='letter'><%= currText %></p>"+
"<p class='fontsize14'>Score: <span class='score'><%= score %></span></p>"+
"<form class='guessLetter'>"+
"<div>"+
"<input type='text' id='guessInput' placeholder='input your guess here' autocomplete='off' autofocus autocorrect='off'></input>"+
"</div>"+
"<button id='guess' name='guess' class='btn btn-primary'>Guess</button>"+
"</form>"+
"<p>"+
"<button value='Restart' id='goto_bonify' class='btn'>Restart</button>"+
" "+
"<a href=''>"+
"<button class='btn'>Home</button>"+
"</a>"+
"</p>"+
"</div>"
);

window.JST['gameover'] = _.template(
"<% var viewportWidth = $(window).width();%>"+
"<%if( viewportWidth >500){%>"+
"<div class='center'>"+
"<%}%>"+
"<h3 class='center'> GAMEOVER :'( </h3>"+
"<p>"+
"<a href='#/bonify'>"+
"<button class='btn'>Start a new game?</button>"+
"</a>"+
"</p>"+
"<% if (score > 0) { %>"+
"<p>"+
"<a href='#/highscore'>"+
"<button class='btn'>See if ya made it to the High Scores!</button>"+
"</a>"+
"</p>"+
"<p>Your score is: <%= score %></p>"+
"<form class='addHS'>"+
"<div>"+
"<label>Enter one to three letters to be added to the highscores:</label>"+
"<input type='text' name='username' placeholder='username' autocomplete='off' autofocus /><br/>"+
"</div>"+
"<input type='submit' value='Add Highscore' class='btn btn-primary'/></div>"+
"</form>"+
"</div>"+
"<% } else { %>"+
"<p>"+
"<a href='#/highscore'>"+
"<button class='btn'>Check out the High Scores!</button>"+
"</a>"+
"</p>"+
"<% } %>"
);
