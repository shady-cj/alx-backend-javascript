import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  Promise.allSettled([uploadPhoto(), createUser()])
    .then(([res1, res2]) => {
      console.log(res1.value.body, res2.value.firstName, res2.value.lastName);
    }, () => console.log('Signup system offline'));
}
