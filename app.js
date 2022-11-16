const eye=document.getElementById('eye');
const pw=document.getElementById('pw');
const login=document.getElementById('login');
const signUp=document.getElementById('sign-up');
const createAcc=document.getElementById('createAcc');
const loginSignup=document.getElementById('login-signup');

eye.addEventListener('click',_=>{
    if(pw.type==='password'){
        pw.type='text';
        eye.classList.add('bi-eye-slash-fill');
    }else{
        pw.type='password';
        eye.classList.remove('bi-eye-slash-fill');
    }
});

createAcc.addEventListener('submit',(e)=>{
    e.preventDefault();
    login.classList.toggle('d-none');
    signUp.classList.toggle('d-none');
})

loginSignup.addEventListener('click',(e)=>{
    e.preventDefault();
    login.classList.toggle('d-none');
    signUp.classList.toggle('d-none');
})
