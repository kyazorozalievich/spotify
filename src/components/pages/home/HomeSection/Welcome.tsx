"use client";
import scss from "./Welcome.module.scss";
import querystring from "querystring";

const Welcome = () => {
  const queryParams = querystring.stringify({
    response_type: "code",
    scope: 'njkl,',
    client_id: 'hvjhbknl',
    redirect_uri: 'jbkml',
  });

  const url = `https://accounts.spotify.com/authorize?${queryParams}`;
  const jsurl = `https://accounts.spotify.com/authorize?${queryParams}`;
  console.log(url, 'hjhbkl');
  console.log(jsurl, 'hjhbknlm;,jhbkl');
  

  return (
    <section className={scss.Welcome}>
      <div className="container">
        <div className={scss.content}>Welcome</div>
      </div>
    </section>
  );
};

export default Welcome;
