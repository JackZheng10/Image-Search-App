import Axios from "axios";

export default Axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization:
      "Client-ID 6b564aa5706ab063f170e8ac2f14a7dc674d8b3563ed58b8026df47f1d4edc0f"
  }
});
