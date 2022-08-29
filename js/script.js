let div = document.getElementById('users');
let button = document.getElementById('button');



button.addEventListener('click', () => {
    let img = document.createElement('img');
    img.src = 'https://c.tenor.com/FBeNVFjn-EkAAAAS/ben-redblock-loading.gif';
    img.alt = 'LOADING';
    div.appendChild(img);

    async function showUsers(url) {
        let response = await fetch(url);
        let users = await response.json();
        let ul = document.createElement('ul');
        users.forEach(element => {
            let newLiNode = document.createElement('li');
            let newTitleNode = document.createElement('div');
            let newBodyNode = document.createElement('div');

            newTitleNode.innerHTML = element.title;
            newBodyNode.innerHTML = element.body;

            newLiNode.appendChild(newTitleNode);
            newLiNode.appendChild(newBodyNode);
            
            newLiNode.classList.add('li');
            ul.appendChild(newLiNode);
        });
        img.remove();
        div.appendChild(ul);
    }

    showUsers("https://jsonplaceholder.typicode.com/posts");
})



