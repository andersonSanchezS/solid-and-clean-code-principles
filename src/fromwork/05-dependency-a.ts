import { PostService } from './05-dependency-b';
import { JsonDatabaseService, LocalDataBaseService, webPost } from './05-dependency-c';


// Main
(async () => {

    const provider = new webPost();

    const postService = new PostService(provider);

    const posts = await postService.getPosts();

    console.log({ posts })


})();