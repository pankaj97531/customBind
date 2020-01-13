let myObj = {
	firstname : "Pankaj",
	lastname : "Kumar"
}

function getName(city,state,country){
	console.log(this.firstname +" " + this.lastname +" "+ city + " " + state + " " + country);
}

let printName = getName.bind(myObj,"Ranchi2","Jharkhand2");
printName("india2");

Function.prototype.mybind = function(...args){
	let obj = this;
	//var args = arguments;
	var param = args.slice(1);
	//console.log(param);
	return function(...innerArgs){
		
		var allArgs = [...param, ...innerArgs];
		//console.log(allArgs);
		obj.apply(args[0],[...param, ...innerArgs]);
	}
}

let printName2 = getName.mybind(myObj,"Ranchi","Jharkhand");
printName2("india");