let post_area = document.getElementById('post-area');

let Title = "Here goes the title";
let Content = "Here goes the content";
let id = 0;
let post_template = `<section class="posts" id="${id}">
<h2>${Title}</h2>
<p>${Content}</p>
</section>`;

post_area.innerHTML = post_template;
