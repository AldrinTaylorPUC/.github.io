function logout() {
    localStorage.setItem('isLogged', false);
    window.location.href = '/templates/pagina-inicial/pagina-inicial.html';
}