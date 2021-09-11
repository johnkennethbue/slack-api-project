import { useEffect, useContext, Fragment } from "react";
import axios from "axios";
import { Context } from "../App";
import { Link } from "react-router-dom";

const Channels = () => {
  const { userHeaders, allChannels, setAllChannels } = useContext(Context);
  console.log(allChannels)

  const rehydrate = () => {
    axios({
      method: "GET",
      url: "http://206.189.91.54/api/v1/channels",
      headers: userHeaders,
    })
      .then((response) => {
        setAllChannels(response.data.data);
      })
      .catch((error) => {
        console.error(error.response?.data.errors);
      });
  };
  useEffect(() => {
    rehydrate();
  }, []);

  //clicking link will match /:id/:type
  return (
    <Fragment>
      <ul className="p-2">
        {allChannels?.map((channel) => (
          <li key={channel.id} className = "text-center bg-gradient-to-r hover:bg-gradient-to-r hover:from-gray-200 hover:to-gray-100 transition ease-in duration-500">
            <Link to={`/${channel.id}/Channel`}>{channel.name}</Link>
          </li>
        ))}
      </ul>
    </Fragment>
  );
};

export default Channels;
