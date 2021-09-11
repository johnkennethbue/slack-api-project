import { useEffect, useContext, Fragment } from "react";
import axios from "axios";
import { Context } from "../App";
import { Link } from "react-router-dom";

const Users = () => {
  const { userHeaders, allUsers, setAllUsers } = useContext(Context);

  const rehydrate = () => {
    axios({
      method: "GET",
      url: "http://206.189.91.54/api/v1/users",
      headers: userHeaders,
    })
      .then((response) => {
        setAllUsers(response.data.data);
      })
      .catch((error) => {
        console.error(error.response?.data.errors);
      });
  };
  useEffect(() => {
    rehydrate();
  }, []);

  return (
    <Fragment>
      <ul className="p-2">
        {allUsers.map((user) => (
          <li key={user.id} className = "text-center bg-gradient-to-r hover:bg-gradient-to-r hover:from-gray-200 hover:to-gray-100 transition ease-in duration-500">
            <Link to={`/${user.id}/User`}>{user.uid}</Link>
          </li>
        ))}
      </ul>
    </Fragment>
  );
};

export default Users;
