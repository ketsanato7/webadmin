import {
  useQuery} from "@tanstack/react-query";
import axios from "../apiMonday";

function getlao_id_cards() {
  const query = useQuery({
    queryKey: ["lao_id_cards"],
    queryFn: async () =>
      await axios
        .get("/lao_id_cards/read")
        .then((result) => {
          return result.data.data;
        })
        .catch((error) => {
          console.log(error);
        }),
  });

  return query;
}




export { getlao_id_cards };
