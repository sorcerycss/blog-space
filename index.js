fetch("https://apis.scrimba.com/jsonplaceholder/posts")
  .then((res) => res.json())
  .then((data) => {
    const postsArr = data.slice(0, 5);
    const html = postsArr
      .map((post) => {
        return `<h2>${post.title}</h2>
                    <p>${post.body}</p>
                    <hr />`;
      })
      .join("");
    document.getElementById("posts-array").innerHTML = html;
  });

const infoCollector = document.getElementById("info-collector");

infoCollector.addEventListener("submit", function (e) {
  e.preventDefault();
  const postTitle = document.getElementById("post-title").value;
  const postBody = document.getElementById("post-body").value;
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
      document.getElementById("posts-array").innerHTML = `<h2>${post.title}</h2>
                    <p>${post.body}</p>
                    <hr />
                    ${document.getElementById("posts-array").innerHTML}`;
    });
});
