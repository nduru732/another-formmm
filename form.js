const user = document.getElementById('username');
const email = document.getElementById('email');
const error = document.getElementById('error');
const submit = document.getElementById('submit');

submit.addEventListener('click',(e)=>{
    e.preventDefault()

    if(user.value === '' || email.value === ''){
        error.textContent="input your credentials"
        error.style.background='red'
       function err(){
         error.remove()

       }
       setTimeout(err,2000)
        
    }
    else{
        const li=document.createElement('li');
    li.textContent=user.value +':'+email.value;
    li.style.background= 'gray';
    li.style.border= '1px solid';
    

    document.querySelector('ul').append(li);
    user.value = '';
    email.value= '';

    }

    
})

