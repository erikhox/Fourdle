//word bank for the program to choose a word to guess
var words = [
    "ABLE", "ACID", "AGED", "ALSO", "AREA", "ARMY", "AWAY", "BABY", "BACK", "BALL", "BAND", 
    "BANK", "BASE", "BATH", "BEAR", "BEAT", "BELL", "BELT", "BEST", "BILL", "BIRD", "BLOW", 
    "BLUE", "BOAT", "BODY", "BOMB", "BOND", "BONE", "BOOK", "BOOM", "BORN", "BOSS", "BOTH", 
    "BOWL", "BULK", "BURN", "BUSH", "BUSY", "CALL", "CALM", "CAME", "CAMP", "CARD", "CARE", 
    "CASE", "CASH", "CAST", "CELL", "CHAT", "CHIP", "CITY", "CLUB", "COAL", "COAT", "CODE", 
    "COLD", "COME", "COOK", "COOL", "COPE", "COPY", "CORE", "COST", "CREW", "CROP", "DARK", 
    "DATA", "DATE", "DAWN", "DAYS", "DEAL", "DEAN", "DEAR", "DEBT", "DEEP", "DENY", "DESK", 
    "DIAL", "DIET", "DISC", "DISK", "DOES", "DONE", "DOOR", "DOWN", "DRAW", "DREW", 
    "DROP", "DRUG", "DUAL", "DUKE", "DUST", "DUTY", "EACH", "EARN", "EASY", "EDGE", "ELSE", 
    "EVEN", "EVER", "EVIL", "EXIT", "FACE", "FACT", "FAIR", "FALL", "FARM", "FAST", "FEAR", 
    "FEED", "FEEL", "FEET", "FELL", "FELT", "FILE", "FILM", "FIND", "FINE", "FIRE", "FIRM", 
    "FISH", "FIVE", "FLAT", "FLOW", "FOOD", "FOOT", "FORD", "FORM", "FORT", "FOUR", "FREE", 
    "FROM", "FUEL", "FULL", "FUND", "GAIN", "GAME", "GATE", "GAVE", "GEAR", "GENE", "GIFT", 
    "GIRL", "GIVE", "GLAD", "GOAL", "GOES", "GOLD", "GOLF", "GONE", "GRAY", "GREW", "GREY", 
    "GROW", "GULF", "HAIR", "HALF", "HALL", "HAND", "HANG", "HARD", "HARM", "HATE", "HAVE", 
    "HEAD", "HEAR", "HEAT", "HELD", "HELL", "HELP", "HERE", "HERO", "HIGH", "HILL", "HIRE", 
    "HOLD", "HOLE", "HOLY", "HOME", "HOPE", "HOST", "HOUR", "HUGE", "HUNG", "HUNT", "HURT", 
    "IDEA", "INCH", "INTO", "IRON", "ITEM", "JACK", "JANE", "JEAN", "JOHN", "JOIN", "JUMP", 
    "JURY", "JUST", "KEEP", "KENT", "KEPT", "KICK", "KILL", "KIND", "KING", "KNEW", "KNOW", 
    "LACK", "LADY", "LAID", "LAKE", "LAND", "LANE", "LAST", "LATE", "LEAD", "LEFT", "LESS", 
    "LIFE", "LIFT", "LIKE", "LINE", "LINK", "LIST", "LIVE", "LOAD", "LOAN", "LOCK", "LOGO", 
    "LONG", "LOOK", "LORD", "LOSE", "LOSS", "LOST", "LOVE", "LUCK", "MADE", "MAIL", "MAIN", 
    "MAKE", "MALE", "MANY", "MARK", "MASS", "MATT", "MEAL", "MEAN", "MEAT", "MEET", "MENU", 
    "MERE", "MIKE", "MILE", "MILK", "MILL", "MIND", "MINE", "MISS", "MODE", "MOOD", "MOON", 
    "MORE", "MOST", "MOVE", "MUCH", "MUST", "NAME", "NAVY", "NEAR", "NECK", "NEED", "NEWS", 
    "NEXT", "NICE", "NICK", "NINE", "NONE", "NOSE", "NOTE", "OKAY", "ONCE", "ONLY", "ONTO", 
    "OPEN", "ORAL", "OVER", "PACE", "PACK", "PAGE", "PAID", "PAIN", "PAIR", "PALM", "PARK", 
    "PART", "PASS", "PAST", "PATH", "PEAK", "PICK", "PINK", "PIPE", "PLAN", "PLAY", "PLOT", 
    "PLUG", "PLUS", "POLL", "POOL", "POOR", "PORT", "POST", "PULL", "PURE", "PUSH", "RACE", 
    "RAIL", "RAIN", "RANK", "RATE", "READ", "REAL", "REAR", "RELY", "RENT", "REST", "RICE", 
    "RICH", "RIDE", "RING", "RISE", "RISK", "ROAD", "ROCK", "ROLE", "ROLL", "ROOF", "ROOM", 
    "ROOT", "ROSE", "RULE", "RUSH", "RUTH", "SAFE", "SAID", "SAKE", "SALE", "SALT", "SAME", 
    "SAND", "SAVE", "SEAT", "SEED", "SEEK", "SEEM", "SEEN", "SELF", "SELL", "SEND", "SENT", 
    "SHIP", "SHOP", "SHOT", "SHOW", "SHUT", "SICK", "SIDE", "SIGN", "SITE", "SIZE", "SKIN", 
    "SLIP", "SLOW", "SNOW", "SOFT", "SOIL", "SOLD", "SOLE", "SOME", "SONG", "SOON", "SORT", 
    "SOUL", "SPOT", "STAR", "STAY", "STEP", "STOP", "SUCH", "SURE", "TAKE", "TALE", "TALK", 
    "TALL", "TANK", "TAPE", "TASK", "TEAM", "TECH", "TELL", "TEND", "TERM", "TEST", "TEXT", 
    "THAN", "THAT", "THEM", "THEN", "THEY", "THIN", "THIS", "TONE", "TONY", "TOOK", "TOOL", 
    "TOUR", "TOWN", "TREE", "TRIP", "TRUE", "TUNE", "TURN", "TWIN", "TYPE", "UNIT", "UPON", 
    "USED", "USER", "VARY", "VAST", "VERY", "VIEW", "VOTE", "WAGE", "WAIT", "WAKE", "WALK", 
    "WALL", "WANT", "WARM", "WASH", "WAVE", "WAYS", "WEAK", "WEAR", "WEEK", "WELL", "WENT", 
    "WEST", "WHAT", "WHEN", "WHOM", "WIDE", "WIFE", "WILD", "WILL", "WIND", "WINE", "WING", 
    "WIRE", "WISE", "WISH", "WITH", "WOOD", "WORD", "WORE", "WORK", "YARD", "YEAH", "YEAR", 
    "YOUR", "ZERO", "ZONE"
];

//sets the word to guess
var chosenWord = words[randomNumber(0, words.length-1)];
//initilizes a guessed word variable
var guess;
//the amount of times a person has guessed by pressing enter
var times = 0;
//a function to grab the text from the text box
function grabText(input) {
  guess = getText(input);
}

//When the enter button is pressed, it first grabs the text.
//Then the for loop starts, and with an if function inside,
//it determines wether the letter at the place 'i' matches the guess.
//if so, it makes the box green. If not true, it goes through another
//for loop which sees if that letter exist, if so it makes that box orange.
//If both of these turn out to be false, it makes the color light gray.
//Finally, after it checks the guess, it looks to see if the word guessed
//is correct, if it is it outputs a congrats message and reveals a retry button.
//If it is not correct, it reveals a try again message and a retry button.
onEvent("enterbutton", "click", function() {
  grabText("wordInput");
  for (var i = 0; i < 4; i++) {
    if (guess[i].toUpperCase() == chosenWord[i]) {
        setProperty("letter" + (i+1+times), "background-color", "lightgreen");
        setText("letter" + (i+1+times), guess[i].toUpperCase());
        setProperty("letter" + (i+1+times), "font-size", 17);
    } else {
      var exist = false;
      for (var j = 0; j < 4; j++) {
        if (guess[i].toUpperCase() == chosenWord[j] && i != j) {
          exist = true;
        }
      }
      if (exist == true) {
        setProperty("letter" + (i+1+times), "background-color", "orange");
        setText("letter" + (i+1+times), guess[i].toUpperCase());
        setProperty("letter" + (i+1+times), "font-size", 17);
      }
      else {
        setProperty("letter" + (i+1+times), "background-color", "lightgray");
        setText("letter" + (i+1+times), guess[i].toUpperCase());
        setProperty("letter" + (i+1+times), "font-size", 17);
      }
    }
  }
  setText("wordInput", "");
  times = times + 4;
  if (guess == chosenWord.toLowerCase()) {
    setText("wordInput", "CONGRATS YOU WIN ! !");
    showElement("retryButton");
    hideElement("enterbutton");
  } else if (grabText("wordInput") != chosenWord && times == 16) {
      setText("wordInput", "Try again, the word is " + chosenWord.toLowerCase());
      showElement("retryButton");
      hideElement("enterbutton");
    }
});

//When the retry button is clicked, it sets the variables back
//to their initial values and clears all the boxes.
//Then it shows the enter button again and hides the retry button.
onEvent("retryButton", "click", function( ) {
  times = 0;
  chosenWord = words[randomNumber(0, words.length-1)];
  for (var i = 1; i < 17; i++) {
    setProperty("letter" + i, "background-color", "white");
    setText("letter" + i, "");
    setText("wordInput", "");
  }
  hideElement("retryButton");
  showElement("enterbutton");
});
