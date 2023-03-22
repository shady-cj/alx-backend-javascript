import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  // return Promise.all([uploadPhoto(), createUser()])
  //   .then(([res1, res2]) => {
  //     console.log(res1.body, res2.firstName, res2.lastName);
  //   }, () => console.log('Signup system offline'));
  return uploadPhoto()
    .then((res1) => res1)
    .then((res1) => {
      createUser()
        .then((res2) => {
          console.log(res1.body, res2.firstName, res2.lastName);
        }, () => console.log('Signup system offline'));
    })
    .catch(() => console.log('Signup system offline'));
}
