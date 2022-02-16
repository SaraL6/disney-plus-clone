import React, { useState, useEffect } from "react";
import axios from "../axios";
const useRow = (fetchUrl) => {
  const [medias, setMedia] = useState([]);


  useEffect(() => {
    async function fetchMedia() {
      const request = await axios.get(fetchUrl);
      setMedia(request.data.items);
      return request;
    }
    fetchMedia();
  }, [fetchUrl]);
  return { medias };
};
export default useRow;
