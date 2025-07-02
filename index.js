const infoCollector = document.getElementById("info-collector");

const titleInput = document.getElementById("post-title");
const bodyInput = document.getElementById("post-body");

let postsArray = [];

function renderPosts() {
  let html = postsArray
    .map((post) => {
      return `<h2>${post.title}</h2>
              <p>${post.body}</p>
              <hr />`;
    })
    .join("");
  document.getElementById("posts-array").innerHTML = html;
}

fetch("https://apis.scrimba.com/jsonplaceholder/posts")
  .then((res) => res.json())
  .then((data) => {
    postsArray = data.slice(0, 5);
    renderPosts();
  });

infoCollector.addEventListener("submit", function (e) {
  e.preventDefault();
  const postTitle = titleInput.value;
  const postBody = bodyInput.value;
  const data = {
    title: postTitle,
    body: postBody,
  };

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  fetch("https://apis.scrimba.com/jsonplaceholder/posts", options)
    .then((res) => res.json())
    .then((post) => {
      postsArray.unshift(post);
      renderPosts();
      titleInput.value = "";
      bodyInput.value = "";
    });
});
