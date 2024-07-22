
    document.addEventListener('DOMContentLoaded', function(){
        const name = document.querySelector('#nome');
        const username = document.querySelector('#username');
        const avatar = document.querySelector('#avatar');
        const repository = document.querySelector('#repositorio');
        const followers = document.querySelector('#seguidores');
        const following = document.querySelector('#seguindo');
        const link = document.querySelector('#link');
    
        fetch('https://api.github.com/users/PriscillaBarbosa')
            .then (function(res){
                return res.json();
            })
            .then(function(json){
                name.innerText = json.name;
                username.innerText = json.login;
                avatar.src = json.avatar_url;
                repository.innerText = json.public_repos;
                followers.innerText = json.followers;
                following.innerText = json.following;
                link.href = json.html_url;
            })
            
            fetch('https://api.github.com/users/PriscillaBarbosa/followers')
            .then(res => res.json())
            .then(followers => {
                followersElement.innerText = followers.length;
            });
    
            fetch('https://api.github.com/users/MarceloBenites1985/following')
            .then(res => res.json())
            .then(following => {
                followingElement.innerText = following.length;
            });
    })
    .catch(function(error) {
        alert('Ocorreu um erro:', error);
    });