import {
  useQuery} from "@tanstack/react-query";
import axios from "../../apiMonday";

export  function get_data() {
  const query = useQuery({
    queryKey: ["loan_purposes"],
    queryFn: async () =>
      await axios
        .get("/loan_purposes/read")
        .then((result) => {
          return result.data.data;
        })
        .catch((error) => {
          console.log(error);
        }),
  });

  return query;
}


