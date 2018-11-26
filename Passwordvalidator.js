function hasUpperCase(input) {
  for (var i = 0; i < input.length; i++) {
    if (input[i] === input[i].toUpperCase()) {
      return true;
    }}}

function hasLowerCase(input){
  for (var i = 0; i < input.length; i++) {
    if (input[i] === input[i].toLowerCase()) {
      return true;}}}

function isLongEnough(input) {
  if (input.length >= 8) {
    return true;}}

function hasSpecialCharacters(input) {
  var specialCharacters = ['@', '#', '$', '!', '^', '&', '%', '*'];
  for (i=0; i < input.length; i++) {
    for (j=0; j < specialCharacters.length; j++) {
      if (input[i] === specialCharacters[j]) {
        return true; }} }}
  
                            
function isPasswordValid(input) 
 {
  var errorMessage = 'Invalid password. Use 8 or more characters with a mix of uppercase and lowercase letters, numbers and special charcters!';
  
  if (hasUpperCase(input) && hasLowerCase(input) && isLongEnough(input) && hasSpecialCharacters(input)) {
    document.write('The password is valid'); }
   
  if (!hasUpperCase(input)) {document.write(errorMessage)}
  if (!hasLowerCase(input)) {document.write(errorMessage);}
  if (!isLongEnough(input)) {document.write(errorMessage); }
  if (!hasSpecialCharacters(input)) { document.write(errorMessage);}
 }

  isPasswordValid('@Yello');