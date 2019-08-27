const spinner = document.getElementById('spinner');

async function getPosts() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');

        return await response.json();
    }
    catch(error) {
        return new Error(`ERROR: ${error.stack}`);
    }
}

async function getComments() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/comments');

        return await response.json();
    }
    catch(error) {
        return new Error(`ERROR: ${error.stack}`);
    }
}

function displayPost(post, comments) {
    const postContainer = document.createElement('div');
    postContainer.classList.add('post-container');

    const postTitle = document.createElement('div');
    postTitle.classList.add('post-title');
    postTitle.innerText = post.title;

    const postContent = document.createElement('div');
    postContent.classList.add('post-content');
    postContent.innerText = post.body;

    const postComments = document.createElement('ol');

    comments.forEach((comment) => {
        const commentItem = document.createElement('li');
        commentItem.innerText = comment.body;
        postComments.appendChild(commentItem);
    });

    postContainer.appendChild(postTitle);
    postContainer.appendChild(postContent);
    postContainer.appendChild(postComments);

    return postContainer;
}

const renderPosts = async () => {
    spinner.classList.remove('hidden');
    const posts = await getPosts();
    const comments = await getComments();
    spinner.classList.add('hidden');
    const fragment = document.createDocumentFragment();

    posts.forEach((post) => {
        if (post.userId === Number(localStorage.userId)) {
            const relatedComments = comments.filter((comment) => comment.postId === post.id);
            fragment.appendChild(displayPost(post, relatedComments));
        }
    });

    document.body.appendChild(fragment);
};

window.onload = renderPosts;