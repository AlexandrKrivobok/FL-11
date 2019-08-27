const spinner = document.getElementById('spinner');

async function getUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');

        return await response.json();
    }
    catch(error) {
        return new Error(`ERROR: ${error.stack}`);
    }
}

const displayUser = (user) => {
    const userContainer = document.createElement('div');
    userContainer.setAttribute('userId', user.id);
    userContainer.setAttribute('id', user.id);
    userContainer.classList.add('list-item');

    const userName = document.createElement('a');
    userName.setAttribute('href', 'posts.html');
    userName.classList.add('user-name');
    userName.innerText = user.name;
    userName.addEventListener('click', () => {
        localStorage.setItem('userId', user.id);
        console.log(localStorage);
    });

    const formContainer = document.createElement('form');
    formContainer.classList.add('edit-form', 'hidden');

    const formEditField = document.createElement('input');
    formEditField.setAttribute('type', 'text');
    formEditField.classList.add('edit-field');

    const formButton = document.createElement('input');
    formButton.setAttribute('type', 'button');
    formButton.setAttribute('value', 'save');
    formButton.classList.add('edit-button');
    formButton.addEventListener('click', editUserData);

    async function editUserData() {
        const userId = this.parentNode.parentNode.id;
        const editedName = this.previousSibling.value;
        const updatedUser = {name: editedName};

        rewriteUserName.call(this);
        hideForm.call(this);

        try {
            spinner.classList.remove('hidden');
            await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: (JSON.stringify(updatedUser))
            });
            spinner.classList.add('hidden');
        }
        catch(error) {
            return new Error(`ERROR: ${error.stack}`);
        }
    }

    function rewriteUserName(){
        const newName = this.previousSibling.value;
        const nameNode = this.parentNode.parentNode.firstChild;

        nameNode.innerHTML = newName;
    }

    function hideForm(){
        this.parentNode.classList.add('hidden');
    }

    const iconContainer = document.createElement('div');

    const iconEdit = document.createElement('img');
    iconEdit.setAttribute('src', './imgs/edit-icon.png');
    iconEdit.addEventListener('click', visibilityToggler);

    function visibilityToggler() {
        let iconsContainer = this.parentNode;
        let inputForm = iconsContainer.previousSibling;
        inputForm.classList.toggle('hidden');
    }

    const iconDelete = document.createElement('img');
    iconDelete.setAttribute('src', './imgs/delete-icon.png');
    iconDelete.addEventListener('click', deleteUserData);
    iconDelete.addEventListener('click', deleteUserName);

    async function deleteUserData() {
        const userId = this.parentNode.parentNode.id;

        try {
            await spinner.classList.remove('hidden');
            await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
                method: 'DELETE',
            });
            spinner.classList.add('hidden');
        }
        catch(error) {
            return new Error(`ERROR: ${error.stack}`);
        }
    }

    function deleteUserName(){
        const listItem = this.parentNode.parentNode;
        listItem.remove();
    }

    userContainer.appendChild(userName);
    userContainer.appendChild(formContainer);
    formContainer.appendChild(formEditField);
    formContainer.appendChild(formButton);
    userContainer.appendChild(iconContainer);
    iconContainer.appendChild(iconEdit);
    iconContainer.appendChild(iconDelete);

    return userContainer;
};

const renderUsers = async () => {
    spinner.classList.remove('hidden');
    const users = await getUsers();
    spinner.classList.add('hidden');
    const userList = document.getElementById('user-list');

    users.forEach((user) => userList.appendChild(displayUser(user)));
};

window.onload = renderUsers;
