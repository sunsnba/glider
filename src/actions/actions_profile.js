export const PROFILE_FETCHED = 'PROFILE_FETCHED';
export const PROFILE_EDITED = 'PROFILE_EDITED';

export function fetchProfile() {
  return (dispatch) => {
    let header = new Headers ({"Content-Type":"application/json", "Authorization":"token ff51fe63abd66bbb9f3646a869d4f0160e262c59"});
    return fetch('https://api.github.com/users/sunsnba', {
        method: 'GET',
        headers: header  
    })
    .then(response => response.json())
    .then(json => {
      dispatch(loadProfile(json))
    })
    .catch(error => console.log(error));
  }
}

export function loadProfile(results) {
  return {
    type : PROFILE_FETCHED,
    payload : results
  }
}

