const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);
let prices = document.querySelectorAll('.price');
let sum = 0;
console.log(prices)
const getSum = () => {
//Add your code here
  prices.forEach((cost)=>{
	  sum+=parseInt(cost.innerText);
  });

	let tr = document.createElement('tr');
	let td = document.createElement('td');
	
	td.innerHTML = `${sum}`;
	tr.setAttribute('id','ans');
	tr.appendChild(td);
	
	document.querySelector('.tabled').appendChild(tr);
//console.log(sum);
};

getSumBtn.addEventListener("click", getSum);