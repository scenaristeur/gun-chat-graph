import GUN from 'gun';
import 'gun/sea';
import 'gun/axe';
import { writable } from 'svelte/store';

// Database
// export const db = GUN();
export const db = GUN([
  'https://spogg.herokuapp.com/gun',
  'http://localhost:8765/gun',
  'https://gun-manhattan.herokuapp.com/gun'/*,
  'http://gunjs.herokuapp.com/gun/'*/
])
// run gun-starter-app on port 8765

// Gun User
export const user = db.user().recall({sessionStorage: true});

// Current User's username
export const username = writable('');

user.get('alias').on(v => username.set(v))

db.on('auth', async(event) => {
  const alias = await user.get('alias'); // username string
  username.set(alias);

  console.log(`signed in as ${alias}`);
});
