setTimeout(loadRightContent, 100)

function loadRightContent() {

  let right_content = document.getElementById('right-content');

  let isDropped = false;

  let isLogged = JSON.parse(localStorage.getItem('isLogged'));
  
  if (isLogged) {
  
    let user_name = document.createElement('div');
    user_name.id = 'user-name';
    user_name.innerText = localStorage.getItem('user-name')
    console.log(`${right_content}`)
    right_content.appendChild(user_name);
  
    let user_icon = document.createElement('img');
    user_icon.id = 'user-icon';
    user_icon.src = '/components/header/img/user-icon.svg';
    right_content.appendChild(user_icon);

    let toggler = document.createElement('img');
    toggler.id = 'toggler';
    toggler.src = '/components/header/img/toggler.svg';
    right_content.appendChild(toggler);

    
  
    toggler.addEventListener('click', () => {
      const nav = document.querySelector('#nav')
      if (isDropped) {
        nav.style.display = 'none';
      } else {
        nav.style.display = 'block';
      }
      isDropped = !isDropped;
    });
  
  
  } else {      
    let body = document.querySelector('body');
    let signup = document.createElement('a');
    signup.innerText = 'Logar';
    body.className = "sign-in-js";
    signup.href = '/templates/cadastro-usuario/cadastro-usuario.html';
    right_content.appendChild(signup);
  }
  
}
