import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then(([res1, res2]) => {
      console.log(res1.body, res2.firstName, res2.lastName);
    }, () => console.log('Signup system offline'));
}
