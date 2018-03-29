(function () {

  if (annyang) {
  // Let's define a command.
    var commands = {
      'hello': function() {
var msg = new SpeechSynthesisUtterance("hello");
window.speechSynthesis.speak(msg);
//        alert('Hello world!');
      },
      'James': function() { alert('Hi James');}
    ,
    'tell me the truth': function() {
var msg = new SpeechSynthesisUtterance("wolf sucks at fortnite");
window.speechSynthesis.speak(msg);
//        alert('Hello world!');
      }    ,
          'tell me a joke': function() {
      var msg = new SpeechSynthesisUtterance("Why don’t scientists trust atoms?     Because they make up everything.");
      window.speechSynthesis.speak(msg);
      //        alert('Hello world!');
            }


  };

  // Add our commands to annyang
  annyang.addCommands(commands);

  // Start listening.
  annyang.start();
}
  var input = document.querySelector("#axela-input"),
      submit = document.querySelector("#axela-submit"),
      message = document.querySelector("#axela-message"),
      advancedDiv = document.querySelector("#advanced"),
      errorText = "I don't understand you.",
      dunnoText = "I wasn't programmed to know that.",
      picture = null,
      greetings = ["hi", "sup", "hello", "hola", "wasup"];

  // Add event listeners to text input and submit button below
  input.addEventListener("keypress", checkKey);
  submit.addEventListener("click", processInput);

  // This function checks if the user has pressed "ENTER" on their keyboard.
  function checkKey(event) {
    var keyCode = event.which || event.keyCode;
    if(keyCode == "13") {
      processInput();
    }
  }

  /*
   * processInput()
   * This function does the following (in order):
   * -If the advancedDiv element contains a picture, that picture is
   *  removed from the advancedDiv.
   * -Create a variable "words" that is an array of all words the user typed.
      Do so exactly like this:
      var words = input.value.toLowerCase().trim().split(" ");
   * -Clear the text area.
   * -If the length of words is 1, then the user only entered one word. Check
   *  if that word is a greeting. If so, set the innerHTML of the message
   *  element to "Greetings!". Otherwise, set it to errorText.
   * -If the lenght of words is 2, then the user entered two words. What
      happens next is based on the first word they entered. Create a switch
      statement for the expression words[0], and has the following cases: "who"
      "what" "where" "tell" "show".
   * -Each case simply calls a function with the same name as the case, with
      words[1] passed in as an argument. For example, case "who" calls
      who(words[1]). Each case should break after calling the function.
   * -At the very end of the switch statement we handle what happens if the
      user has not entered a valid first word. Create a "default" case and
      make it set the message element's innerHTML to errorText.
   * -Finally, create one final "else" that takes care of the user entering
      anything other than 1 or 2 words. This will simply set the innerHTML of
      the message element to errorText.
   */


   function processInput() {
     if(advancedDiv.contains(picture)) {
       picture.removeChild();
     }
     var words = input.value.toLowerCase().trim().split(" ");
     input.value = '';

     if(words.length == 1) {
       if(greetings.indexOf(words[0]) > -1) {
         message.innerHTML = 'Greetings!';
       } else {
         message.innerHTML = errorText;
       }

     }else if (words.length == 2){
       switch (words[0]) {
        case "who":
           who(words[1]);
           break;
        case "what":
           what(words[1]);
           break;
        case "where":
           where(words[1]);
           break;
       case "tell":
           tell(words[1]);
           break;
       case "show":
           show(words[1]);
           break;
         default:
           message.innerHTML="wooottt";
       }
     }


   }

  /*
   * who(word)
   * This function sets the innerHTML of the message element to specific text,
     based on what the "word" is. In this case the word is the second word the
     user entered (e.g., "who you" results in "I am Axela, of course").
   * To do so, create a switch statement that handles the various valid
     second words the user could have entered (e.g., "you", "president", "me").
   * After setting the innerHTML of the message element to whatever text you
     want, don't forget to break.
   * Also don't forget to add a final default case, which handles the user
     entering an invalid second word. This sets the message's innerHTML to
     dunnoText, NOT errorText (since it's not an error per se, Axela just
     doesn't know what they're referring to.)
   */
function who(word){
  switch (word) {
    case 'you':
    message.innerHTML='I am juan, of course'
      break;
      case 'me':
      message.innerHTML='you are you'
        break;
        case 'cool':
        message.innerHTML='choach wolf'
          break;
    default:
    message.innerHTML='nooooo she wasent ready'
  }
}
  /*
   * what(word)
   * See above.
   */
function what(word){
   switch (word) {
     case 'life':
     message.innerHTML='choach wolf'
       break;
         case 'pi':
         message.innerHTML='3.194....'
           break;

             case 'love':
             message.innerHTML='false'
               break;
     default:
     message.innerHTML='someone wasent ready'
   }
}

  /*
   * where(word)
   * See above.
   */
   function where(word){
      switch (word) {
        case 'me':
        message.innerHTML='coach james is everywhere'
          break;
            case 'atlantis':
            message.innerHTML='somewhere'
              break;
                case 'food':
                let audio = new Audio('audio/datway.mp3');
                audio.play();
                //message.innerHTML='hunger'
                  //break;
        default:
        message.innerHTML='i think some person wasent ready'
      }
   }

  /*
   * tell(word)
   * See above.
   */
   function tell(word){
      switch (word) {
        case 'joke':
        message.innerHTML='wolf'
          break;
            case 'poem':
            message.innerHTML='picaso'
              break;
                case 'quote':
                message.innerHTML='art'
                  break;
        default:
        message.innerHTML='hire me'
      }
   }
  /*
   * show(word)
   * See above.
   */
   function show(word){
      switch (word) {
        case 'dog':
        message.innerHTML='here is dog'
        picture = document.createElement('image')
        picture.src='img/dog.png'
        advancedDiv.appendChild(picture);
      }
   }

})();














var colors = new Array(
  [62,35,255],
  [60,255,60],
  [255,35,98],
  [45,175,230],
  [255,0,255],
  [255,128,0]);

var step = 0;
//color table indices for:
// current color left
// next color left
// current color right
// next color right
var colorIndices = [0,1,2,3];

//transition speed
var gradientSpeed = 0.002;

function updateGradient()
{

  if ( $===undefined ) return;

var c0_0 = colors[colorIndices[0]];
var c0_1 = colors[colorIndices[1]];
var c1_0 = colors[colorIndices[2]];
var c1_1 = colors[colorIndices[3]];

var istep = 1 - step;
var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
var color1 = "rgb("+r1+","+g1+","+b1+")";

var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
var color2 = "rgb("+r2+","+g2+","+b2+")";

 $('#gradient').css({
   background: "-webkit-gradient(linear, left top, right top, from("+color1+"), to("+color2+"))"}).css({
    background: "-moz-linear-gradient(left, "+color1+" 0%, "+color2+" 100%)"});

  step += gradientSpeed;
  if ( step >= 1 )
  {
    step %= 1;
    colorIndices[0] = colorIndices[1];
    colorIndices[2] = colorIndices[3];

    //pick two new target color indices
    //do not pick the same as the current one
    colorIndices[1] = ( colorIndices[1] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
    colorIndices[3] = ( colorIndices[3] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;

  }
}

setInterval(updateGradient,10);
