import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  // return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
  //   .then((results) => results);
  return new Promise((resolve) => {
    const results = [];
    signUpUser(firstName, lastName)
      .then((result) => {
        results.push({
          status: 'fulfilled',
          value: result,
        });
      }, (err) => {
        results.push({
          status: 'rejected',
          value: err,
        });
      })
      .then(() => {
        uploadPhoto(fileName)
          .then((result) => {
            results.push({
              status: 'fulfilled',
              value: result,
            });
          }, (err) => {
            results.push({
              status: 'rejected',
              value: err,
            });
          })
          .then(() => {
            resolve(results);
          });
      });
  }).then((res) => res);
}
