import { useEffect, useContext, Fragment } from "react";
import axios from "axios";
import { Context } from "../App";

const RetrieveChannels = () => {
  const { userHeaders, allChannels, setAllChannels } = useContext(Context);

  console.log(allChannels);

  const rehydrate = () => {
    axios({
        method: "GET",
        url: "http://206.189.91.54/api/v1/channels",
        headers: {
            "access-token": userHeaders.get("access-token"),
            client: userHeaders.get("client"),
            expiry: userHeaders.get("expiry"),
            uid: userHeaders.get("uid"),
          }
        })
        .then((response) => {
          console.log(response.headers);
          setAllChannels(response.data.data);
        })
        .catch((error) => {
            console.error(error.response?.data.errors)
        });
  }
   useEffect(() => {
    rehydrate();
   }, []);

  return (
    <Fragment>
     <div>
        {
        allChannels?.map(channel => (
          <ul key={channel.id}>{channel.value}</ul>
        ))}
    </div>
    </Fragment>
  );
};

export default RetrieveChannels;
