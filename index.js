fetch("https://apis.scrimba.com/jsonplaceholder/posts")
  .then((res) => res.json())
  .then((data) => {
    const postsArr = data.slice(0, 5);
    const itemsHTML = postsArr
      .map((post) => {
        return `<h1>${post.title}</h1>
                    <p>${post.body}</p>`;
      })
      .join("");
    document.getElementById("posts-array").innerHTML = itemsHTML;
  });
