const container = document.getElementById("container");
const btnTodos = document.getElementById("btnTodos");
const btnBuscar = document.getElementById("btnBuscar");
const inputId = document.getElementById("postId");

// Função para criar um cartão
function criarCard(post) {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <h3>${post.title}</h3>
    <p><strong>ID:</strong> ${post.id}</p>
    <p><strong>UserID:</strong> ${post.userId}</p>
    <p>${post.body}</p>
  `;
  container.appendChild(card);
}

// Buscar todas as postagens
btnTodos.addEventListener("click", async () => {
  container.innerHTML = ""; // limpa antes
  const resposta = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await resposta.json();
  posts.forEach(post => criarCard(post));
});

// Buscar postagem por ID
btnBuscar.addEventListener("click", async () => {
  container.innerHTML = "";
  const id = inputId.value;
  if (!id) {
    alert("Digite um ID válido!");
    return;
  }
  const resposta = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post = await resposta.json();
  criarCard(post);
});
