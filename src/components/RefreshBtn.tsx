import DataLoading from "@/utility/refresh";
import {Button} from "@nextui-org/react";
import {QueryClient, useQueryClient} from "@tanstack/react-query";
import {useAtom} from "jotai";

const RefreshBtn = () => {
  const [dataLoad, setDataLoad] = useAtom(DataLoading);
  // Invalidate every query in the cache
  const queryClient = useQueryClient();

  const btn = () => {
    // Invalidate every query with a key that starts with `todos`
    queryClient.invalidateQueries({queryKey: ["User"]});
  };
  return (
    <div>
      <div className="">
        <Button
          color="primary"
          variant="shadow"
          isLoading={dataLoad}
          onPress={btn}
        >
          Refetch
        </Button>
      </div>
    </div>
  );
};

export default RefreshBtn;
