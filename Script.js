document.getElementById("searchBar").addEventListener("input", function() {
    const keyword = this.value.toLowerCase();
    const posts = document.querySelectorAll(".post");

    posts.forEach(post => {
        const text = post.innerText.toLowerCase();
        post.style.display = text.includes(keyword) ? "block" : "none";
    });
});
