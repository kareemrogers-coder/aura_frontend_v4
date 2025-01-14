// import { useAuth0 } from "@auth0/auth0-react";

// // component to send JWT to backend and validate user.

// const SendRequest = () => {
//   const { getAccessTokenSilently } = useAuth0();

//   const fetchProtectedData = async () => {
//     const token = await getAccessTokenSilently();
//     console.log(token);
//     const response = await fetch("https://aura-library.onrender.com/users/login", {
//       //this endpoint will be different, im just using the localhost as a placeholder
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });
//     const data = await response.json();
//     console.log(data);
//   };
//   return <button onClick={() => fetchProtectedData()}>SendRequest</button>;
// };

// export default SendRequest;

import { useAuth0 } from "@auth0/auth0-react";

// component to send JWT to backend and validate user.

const SendRequest = () => {
  const { getAccessTokenSilently } = useAuth0();

  const fetchProtectedData = async () => {
    const token = await getAccessTokenSilently();
    console.log("JWT from Auth0:", token);
    const response = await fetch("https://aura-library.onrender.com/users/login", {
      //this endpoint will be different, im just using the localhost as a placeholder
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json', 
        //new
      },
      body: JSON.stringify({ //new
        auth0_token: token
        //new
      }) //new
    });
    const data = await response.json();
    console.log(data);
  };
  return <button onClick={() => fetchProtectedData()}>SendRequest</button>;
};

export default SendRequest;
