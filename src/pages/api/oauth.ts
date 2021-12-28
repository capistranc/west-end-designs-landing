const { DCLIENT_ID, DCLIENT_SECRET } = process.env;

export default function handler(req, res) {
  let ret = {};
  if (req.method === "POST") {
    console.log(req.body);
    const { code, redirect_uri } = req.body;

    // Process a POST request
    const ret = {
      client_id: DCLIENT_ID,
      client_secret: DCLIENT_SECRET,
      grant_type: "authorization_code",
      code: code,
      redirect_uri,
    };

    res.send(ret);
  } else {
    res.send(ret);
    // Handle any other HTTP method
  }
}
