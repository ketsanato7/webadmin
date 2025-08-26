import {
  useQuery} from "@tanstack/react-query";
import axios from "../../apiMonday";

export function get_data() {
  const query = useQuery({
    queryKey: ["genders"],
    queryFn: async () =>
      await axios
        .get("/genders/read")
        .then((result) => {
          return result.data.data;
        })
        .catch((error) => {
          console.log(error);
        }),
  });

  return query;
}


