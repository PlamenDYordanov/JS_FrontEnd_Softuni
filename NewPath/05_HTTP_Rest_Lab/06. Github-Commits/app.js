async function loadCommits() {
    const BASE_URL = 'https://api.github.com/repos/';
    const username = document.getElementById('username');
    const repo = document.getElementById('repo');
    const commits = document.getElementById('commits');
    const usernameVal = username.value;
    const repoVal = repo.value;
    try{
        debugger
        const allCommitsResult = await fetch(`${BASE_URL}${usernameVal}/${repoVal}/commits` )
        const data = await allCommitsResult.json();
        data
        .forEach(({commit}) => {
                const createLi =document.createElement('li');
                createLi.textContent = `${commit.author.name}: ${commit.message}`;
                commits.appendChild(createLi);
        })
    }catch(err){
        const createLi =document.createElement('li');
       createLi.textContent = err.message
       commits.appendChild(createLi);
    }
    //  fetch(`${BASE_URL}${usernameVal}/${repoVal}/commits`)
    //  .then((res) => res.json())
    //  .then((data) => {
    //     data
    //     .forEach(({commit}) => {
    //             const createLi =document.createElement('li');
    //             createLi.textContent = `${commit.author.name}: ${commit.message}`;
    //             commits.appendChild(createLi);
    //     })
    //  })
    //  .catch((err) => {
    //     console.log(err);
    //  })
    // console.log('TODO...');
}