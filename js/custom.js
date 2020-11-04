const btns =document.querySelectorAll('.btn');
const screen=document.querySelector('.screen');
const equalBtn =document.querySelector('.btn-equal');
const clearBtn=document.querySelector('.btn-clear');

for(let i=0; i<btns.length; i++){
	btns[i].addEventListener('click',function(){
		let numbers=btns[i].getAttribute('data-num');
		screen.value+=numbers;
	})
};


equalBtn.addEventListener('click',function(){
	if (screen.value === '') {
	alert('Please enter a Value');
}else{
	let value=eval(screen.value);
	screen.value=value;
}})

clearBtn.addEventListener('click',function(){
	let value = screen.value
	value = value.slice(0,-1)
	screen.value=value
})
