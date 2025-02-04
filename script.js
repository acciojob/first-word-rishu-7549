function firstWord(s) {
  // your code here
	let str = "";
	s = s.trim();
	if(s.length < 1) return '';
	for(let i=0; i<s.length; i++){
		if(s[i] !==' '){
			str += s[i];
		}
		else {
			return str;
		}
	}
	return str;

	// return s.trim().split(' ')[0];
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));





