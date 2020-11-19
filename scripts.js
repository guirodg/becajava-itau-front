// Example POST method implementation:
async function postData(url = '', data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}
function criarConta() {
  postData('http://localhost:8081/contas/', { nome: document.querySelector("#nome").value, cpf: document.querySelector("#cpf").value })
    .then(data => {
      console.log(data); // JSON data parsed by `data.json()` call
    });
}

function depositar() {
  postData('http://localhost:8081/operacao/depositos', {
    hash: document.querySelector("#hash").value, tipo: document.querySelector("#tipo").value,
    valor: document.querySelector("#valor").value
  })
    .then(data => {
      console.log(data); // JSON data parsed by `data.json()` call
    });
}

function sacar() {
  postData('http://localhost:8081/operacao/saques', {
    hash: document.querySelector("#hash").value, tipo: document.querySelector("#tipo").value,
    valor: document.querySelector("#valor").value
  })
    .then(data => {
      console.log(data); // JSON data parsed by `data.json()` call
    });
}

function transferencia() {
  postData('http://localhost:8081/operacao/transferencia', {
    hashOrigem: document.querySelector("#hashOrigem").value, hashDestino: document.querySelector("#hashDestino").value,
    valor: document.querySelector("#valor").value
  })
    .then(data => {
      console.log(data); // JSON data parsed by `data.json()` call
    });
}



function mascara(i) {

  var v = i.value;

  if (isNaN(v[v.length - 1])) { // impede entrar outro caractere que não seja número
    i.value = v.substring(0, v.length - 1);
    return;
  }

  i.setAttribute("maxlength", "14");
  if (v.length == 3 || v.length == 7) i.value += ".";
  if (v.length == 11) i.value += "-";

}
