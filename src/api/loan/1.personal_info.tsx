import {
  useQuery} from "@tanstack/react-query";
import axios from "../apiMonday";

function get_personal_info() {
  const query = useQuery({
    queryKey: ["personal_info"],
    queryFn: async () =>
      await axios
        .get("/personal_info/read_village")
        .then((result) => {
          return result.data.data;
        })
        .catch((error) => {
          console.log(error);
        }),
  });

  return query;
}




export { get_personal_info };
