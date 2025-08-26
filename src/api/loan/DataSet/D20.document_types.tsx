import {
  useQuery} from "@tanstack/react-query";
import axios from "../../apiMonday";

export function get_data() {
  const query = useQuery({
    queryKey: ["document_types"],
    queryFn: async () =>
      await axios
        .get("/document_types/read")
        .then((result) => {
          return result.data.data;
        })
        .catch((error) => {
          console.log(error);
        }),
  });

  return query;
}


