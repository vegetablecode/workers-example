import * as Store from '../posts_store';

const Posts = async () => {
  const data = await Store.all();
  const body = JSON.stringify(data);
  console.log('getting body: ', body);
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Content-type': 'application/json',
  };

  console.log('return response');
  return new Response(body, { headers });
};

export default Posts;
