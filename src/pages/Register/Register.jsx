import React, { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
// todo: login and register page should be react form
// and password validate
const Register = () => {
  const { register, updateUserData } = useContext(AuthContext);
  const [error, setError] = useState("");
  const showPassword = true;
  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmpassword = form.confirmpassword.value;
    // const confrimpassword = form.confrimpassword.value;
    const photoUrl = form.photo.value;
    // const passwordRegex =
    //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    // if (!passwordRegex.test(password)) {
    //   setError(
    //     "Password must be at least 6 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character."
    //   );
    //   return;
    // }

    if (password !== confirmpassword) {
      setError("Password and confirm password do not match.");
      return;
    }
    // const registeredUser = {
    //   name: name,
    //   email: email,
    //   photoUrl: photoUrl,
    // };
    console.log(name, email, password, photoUrl);
    register(email, password)
      .then((result) => {
        const signedUser = result.user;
        // console.log(signedUser);
        updateUserData({ displayName: name, photoURL: photoUrl })
          .then((result) => {
            // const updatedUser = result.user;
            // console.log("updated", updatedUser);

            const registeredUser = {
              name: name,
              email: email,
              photoUrl: photoUrl,
            };
            fetch("http://localhost:5000/users", {
              method: "POST",
              headers: { "content-type": "application/json" },
              body: JSON.stringify(registeredUser),
            })
              .then((res) => res.json())
              .then((data) => {
                console.log(data);
                if (data.insertedId) {
                  alert("user is registered");
                }
              });
          })
          .catch((error) => console.log(error));
        console.log("Sign up", signedUser);
      })
      .then((error) => console.log(error.message));
  };
  return (
    <div className=" flex justify-center items-center h-screen ">
      <div className="w-full max-w-md">
        <form
          onSubmit={handleRegister}
          className="bg-white shadow-md rounded px-8 py-6"
        >
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Name
            </label>
            <input
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              name="name"
              type="text"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              name="email"
              type="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              name="password"
              type="password"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Confirm Password
            </label>
            <input
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              name="confirmpassword"
              type="password"
              placeholder="Enter your password gain"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Photo
            </label>
            <input
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              name="photo"
              type="text"
              placeholder="your photo"
              required
            />
          </div>

          <div className="flex items-center justify-between">
            {/* <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Sign In
            </button> */}
            <input
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              type="submit"
              value="submit"
            />
          </div>
        </form>
        <div>
          <p className="">{error}</p>
        </div>
      </div>
    </div>
  );
};

export default Register;
