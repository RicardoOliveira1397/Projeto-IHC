import React, { useEffect } from "react";
import withAnalytics from "~/hocs/withAnalytics";
import Wrapper from "./styles";
import { Link } from "../../routes";
import WPAPI from "wpapi";

const HomePage = () => {
  const wp = new WPAPI({ endpoint: "http://localhost/template_wp/wp-json" });

  useEffect(() => {
    wp.posts().get(function (err, data) {
      console.log(data);
      if (err) {
        // handle err
      }
      // do something with the returned posts
    });
  });

  return (
    <Wrapper>
      <h1>HomePage</h1>
      <div className="buttons"></div>
    </Wrapper>
  );
};

export default withAnalytics()(React.memo(HomePage));
