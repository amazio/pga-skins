const fetch = require('node-fetch');

module.exports = {
  subscribe
};

function subscribe() {


console.log('Going to subscribe at: ' + process.env.SUBSCRIBE_POST_URL)

  fetch(
    process.env.SUBSCRIBE_POST_URL,
    {
      method: 'post',
      body: JSON.stringify({
        postUrl: process.env.UPDATED_DATA_POSTBACK_URL,
        includeHoles: true
      }),
      headers: {'Content-Type': 'application/json'}
    }
  )
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.log(err));
} 