import { useEffect, useContext, Fragment } from "react";
import axios from "axios";
import { Context } from "../App";
import { Link } from "react-router-dom";

const Channels = () => {
  const { userHeaders, allChannels, setAllChannels } = useContext(Context);

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
          <li key={channel.id}>
            <Link to={`/${channel.id}/Channel`}>{channel.name}</Link>
          </li>
        ))}
      </ul>
    </Fragment>
  );
};

export default Channels;
