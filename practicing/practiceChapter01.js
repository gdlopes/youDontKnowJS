const accessoriePrice = 20.00;
const phonePrice = 200.00;
const taxRate = 0.15;

let bankBalance = prompt('Hey, what is your bank balance ?');
let spendingThreshold = prompt('And now, what is your spending threshold ?');
let amount = 0;

function addTaxRate(amount, taxRate) {
	return amount * (1 + taxRate);
}

function format(amount) {
	return amount.toFixed(2);
}


while(amount < bankBalance) { 
	amount = amount + phonePrice;

	if(amount < (spendingThreshold - phonePrice)) { 
		amount = amount + accessoriePrice; 
	} else {
		break;
	}

	amount = addTaxRate(amount, taxRate);
}

	formatedAmount = format(amount);
	bankBalance = bankBalance - amount; 
	
	console.log('Hey, you can spent only $' + formatedAmount + ' here !!!');
	console.log('Buying another one you will exceed your spending threshold, that is: $' + spendingThreshold);
	console.log('See it below:');
	console.log('------------------------------');
	console.log('Amount: $', formatedAmount);
	console.log('Bank balance: $', format(bankBalance));
	console.log('------------------------------');
	console.log('Are you sure about it ??');