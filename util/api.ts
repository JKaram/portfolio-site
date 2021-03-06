import axios from "axios";
import { useEffect } from "react";
export const getGithubRepo = async () => {
  try {
    const resp = await axios.get("https://api.github.com/repos/jkaram/portfolio-site");
    return resp.data.updated_at;
  } catch (err) {
    console.error(err);
  }
};
