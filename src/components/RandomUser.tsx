import DataLoading from "@/utility/refresh";
import { Button } from "@nextui-org/react";
import { useQueryClient } from "@tanstack/react-query";
import { useAtom } from "jotai";

const RandomUser = () => {
  const [dataLoad, setDataLoad] = useAtom(DataLoading);
  // Invalidate every query in the cache
  const queryClient = useQueryClient();

  const btn = () => {
    // Invalidate every query with a key that starts with `todos`
    queryClient.invalidateQueries({ queryKey: ["User"] });
  };
  return (
    <div>
      <div className="" onClick={btn}>
        <button>RandomUser</button>
      </div>
    </div>
  );
};

export default RandomUser;
