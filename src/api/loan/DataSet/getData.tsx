import {
  useQuery} from "@tanstack/react-query";
import axios from "../../apiMonday";

export function getData({props}) {

  const query = useQuery({
    queryKey: [props.name],
    queryFn: async () =>
      await axios
        .get(`/${props.name}/read`)
        .then((result) => {
          return result.data.data;
        })
        .catch((error) => {
          console.log(error);
          return error
        }),
  });

  return query;
}

