import { useEffect } from "react";
import { useHistory } from "react-router-dom";

import { SERVER_PREFIX } from '../fakeServer/fakeServer';


const BlogPage = () => {
  const history = useHistory();
  const token = localStorage.getItem(`${SERVER_PREFIX}_token`);;

  useEffect(() => {
    if (!token) {
      history.push("/login");
    }
  }, [history, token]);

  return (
    <div>Blog page</div>
  );
};

export default BlogPage;