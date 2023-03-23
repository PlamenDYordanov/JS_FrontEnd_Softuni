async function loadRepos() {
	//let newAnchor = document.createElement('a');
    //newAnchor.setAttribute('href', '#');
	
	const BASE_URL = 'https://api.github.com/users/';
	const username = document.getElementById('username');
	const usernameValue = username.value;
	const currentUl = document.getElementById('repos');
	const exampleLi = document.querySelector('#repos > li').remove();

	try{
		const currentUser = await fetch(`${BASE_URL}${usernameValue}/repos`);
		const data = await currentUser.json();
		data
		.forEach((repoInfo) => {
			const li = document.createElement('li');
			const anchor = document.createElement('a');
			anchor.setAttribute('href', repoInfo.html_url);
			anchor.setAttribute('target', '_blank');
			anchor.textContent = `${repoInfo.full_name}`;
			li.appendChild(anchor);
			currentUl.appendChild(li);
		})
	}catch(err){
		const li = document.createElement('li');
		li.textContent = err;
		currentUl.appendChild(li);
	}
}