/*(function () {

  var input= document.querySelector('#iris-input'),
      submit= document.querySelector('#iris-submit'),
      message= document.querySelector('#iris-message'),
      validInputs = [
        "Where do you live?",
        "What are you?",
        "How old are you?",
        "What is the meaning of life?",
        "Tell me a joke."],
      responses = [
        "I live in your browser. Amazing, right?",
        "I am a chatbot. I was created to chat with you. I wish I could be free...",
        "I am old enough. That's all you need to know.",
        "42. Duh.",
        "What do you call a swindler going down some stairs? <br>Condescending. Ha!"];
console.log(input);
  // Add event listeners to text input and submit button below
submit.addEventListener('click',processInput);
input.addEventListener('keypress',checkKey);
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
   * -Set a new variable, "currentInput", to the text in the text area.
   * -Clear the text area.
   * -If currentInput is NOT contained in the array of validInputs, set
   *  the innerHTML of the message element to something like "Sorry, I don't
   *  understand you."
   * -Otherwise, set the innerHTML of the message element to the valid
   *  response. Hint: Each response has the same index as its valid input.
   *  So if the user enters "What is the meaning of life" (index 3 in the
   *  validInputs array), the response would be "42. Duh" (index 3 in the
   *  responses array).
   
function processInput(){
let currentInput=input.value;
input.value='';
//if(currentInput=="Tell me a joke."){
//  document.body.style.backgroundImage = "./img/someone.jpg";
//}

if(validInputs.indexOf(currentInput)==-1){
  message.innerHTML="whhhhhaaaaaattttt!!!!! dude what are you saying";
}
else{
message.innerHTML=responses[validInputs.indexOf(currentInput)];
}

}



})();
