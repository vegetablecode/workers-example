import * as Store from '../posts_store';

const Post = async (request) => {
  const postId = request.params.id;

  const body = JSON.stringify(await Store.find(postId));
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Content-type': 'application/json',
  };
  return new Response(body, { headers });
};

export default Post;
