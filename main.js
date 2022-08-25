// SCRIPT FOR FORM
// DOM > DOCUMENT OBJECT MODEL

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

// creating an event of type submit

myForm.addEventListener('submit', onSubmit);

function onSubmit(e){

    e.preventDefault();

    if(emailInput.value.includes('@')){
        msg.classList.add('error'); 
		msg.innerHTML = 'Thank you for your details :)';
        setTimeout(() => msg.remove(), 2000);
	}
	else{
        msg.classList.add('error'); 
		msg.innerHTML = 'Please enter a valid e-mail address';
        setTimeout(() => msg.remove(), 2000);
	}
    
    if(nameInput.value === '' || emailInput.value === ''){
        
        // error class in style.css applied in msg class in html

        // The classList property returns the CSS classnames of an element

        msg.classList.add('error'); 

        // print message when error occurs

        msg.innerHTML = 'Please enter all fields';

        // error message disapears after 2 seconds

        setTimeout(() => msg.remove(), 2000);
    }

    else{
        
        // creating an element of type list('li')

        const li = document.createElement('li');
        //adding the input values into the list

        li.appendChild(document.createTextNode(
            `${nameInput.value} : ${emailInput.value}`));

        // finally adding to userList
        
        userList.appendChild(li);

        // Clear fields
        nameInput.value = '';
        emailInput.value = '';
    }
}

// END OF FORM CREATION


// Accessing Single element from html

console.log(document.getElementById('my-form'));
// only accesses first h1 in html file

console.log(document.querySelector('h1')); 

// Accessing Multiple elements from html

console.log(document.querySelectorAll('.item'));

// looping through list items using forEach

const items = document.querySelectorAll('.item');

// Arrow functions allow to write shorter function syntax:

items.forEach((item) => console.log(item));

// document methods

const ul = document.querySelector('.items');

ul.firstElementChild.textContent = 'Hello';
ul.children[1].innerText = 'Bruh';
ul.lastElementChild.innerHTML = '<h1>Hello</h1>';

// events on clicking button

const btn = document.querySelector('.btn');

btn.addEventListener('click', (e) => {

    // button click info does not dissappear afte button is clicked

    e.preventDefault();

    // info when button is clicked

    console.log(e);
    // change bg to grey when button is clicked

    document.querySelector('#my-form').style.background = '#ccc';
});

// when mouse hovers on button bg is made dark

// btn.addEventListener('mouseover', (e) =>{

//     document.querySelector('body').classList.add('bg-dark');
// })

