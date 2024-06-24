async function createusuario() {
    const nome = document.getElementById('nome').value;
    const senha = document.getElementById('senha').value;
    const response = await fetch('/api/usuario', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ nome, senha })
    });
    const result = await response.json();
    console.log(result);
    fetchusuario();
  }

  async function fetchUsuarios() {
    const response = await fetch('/api/usuario');
    const usuario = await response.json();
    const usuarioList = document.getElementById('usuario');
    usuarioList.innerHTML = '';
    usuario.forEach(usuario => {
      const listusuario = document.createElement('li');
      listusuario.textContent = `${usuario.name}: ${usuario.senha}`;
      usuarioList.appendChild(listusuario);
    });
  }