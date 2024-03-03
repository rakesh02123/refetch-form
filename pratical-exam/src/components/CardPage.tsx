import DataLoading from "@/utility/refresh";

import {
  ClockIcon,
  GlobeAltIcon,
  InboxArrowDownIcon,
  MapIcon,
  UsersIcon,
} from "@heroicons/react/16/solid";
import {Card, CardBody, Divider, Skeleton, User} from "@nextui-org/react";
import {Image} from "@nextui-org/react";
import {useQuery} from "@tanstack/react-query";
import axios from "axios";
import {useAtom} from "jotai";
import {useEffect} from "react";

const CardPage = () => {
  const [dataLoad, setDataLoad] = useAtom(DataLoading);
  const {data, isLoading, isFetching} = useQuery({
    queryKey: ["User"],

    queryFn: async () => {
      await new Promise((t) => setTimeout(t, 2000));
      const apiData = await axios.get("https://randomuser.me/api/");
      const data = await apiData.data.results[0];
      console.log(data);
      return data;
    },

    refetchOnWindowFocus: false,
    retry: true,
  });
  useEffect(() => {
    if (isLoading || isFetching) {
      setDataLoad(true);
    } else {
      setDataLoad(false);
    }
  }, [isLoading, isFetching]);
  if (isLoading || isFetching) {
    return (
      <>
        <div className="flex h-[80dvh] justify-center items-center">
          <Card>
            <CardBody className="w-[300px] space-y-2">
              <div className="flex justify-center items-center text-center">
                <Skeleton className="rounded-full">
                  <Image
                    className="rounded-full h-[150px] w-[150px]"
                    alt="NextUI hero Image"
                    src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
                  />
                </Skeleton>
              </div>
              <Skeleton className="rounded-md">
                <div className="flex justify-center items-center text-center">
                  XYZ
                </div>
              </Skeleton>
              <Divider />
              <div className="flex gap-3">
                <div className="">
                  <Skeleton className="rounded-md">
                    <UsersIcon className="h-7" />
                  </Skeleton>
                </div>
                <Skeleton className="rounded-md">
                  <div className="">Gander</div>
                </Skeleton>
              </div>
              <div className="flex gap-3">
                <div className="">
                  <Skeleton className="rounded-md">
                    <ClockIcon className="h-7" />
                  </Skeleton>
                </div>
                <Skeleton className="rounded-md">
                  <div className="">00 Years</div>
                </Skeleton>
              </div>
              <div className="flex gap-3">
                <div className="">
                  <Skeleton className="rounded-md">
                    <InboxArrowDownIcon className="h-7" />
                  </Skeleton>
                </div>
                <Skeleton className="rounded-md">
                  <div className="">xyz@gmail.com</div>
                </Skeleton>
              </div>
              <div className="flex gap-3">
                <div className="">
                  <Skeleton className="rounded-md">
                    <MapIcon className="h-7" />
                  </Skeleton>
                </div>
                <Skeleton className="rounded-md">
                  <div className="">XYZ</div>
                </Skeleton>
              </div>
              <div className="flex gap-3">
                <div className="">
                  <Skeleton className="rounded-md">
                    <GlobeAltIcon className="h-7" />
                  </Skeleton>
                </div>
                <Skeleton className="rounded-md">
                  <div className="">Country</div>
                </Skeleton>
              </div>
            </CardBody>
          </Card>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="flex h-[80dvh] justify-center items-center">
        <Card>
          <CardBody className="w-[300px] space-y-2">
            <div className="flex justify-center items-center text-center">
              <Image
                className="rounded-full h-[150px] w-[150px] border-3 border-blue-700 p-[2px]"
                alt="NextUI hero Image"
                src={data.picture.large}
              />
            </div>
            <div className="flex justify-center items-center text-center font-bold text-2xl">
              {data.name.title} {data.name.first} {data.name.last}
            </div>
            <Divider />
            <div className="flex gap-3">
              <div className="">
                <UsersIcon className="h-7" />
              </div>
              <div className="font-bold text-lg">{data.gender}</div>
            </div>
            <div className="flex gap-3">
              <div className="">
                <ClockIcon className="h-7" />
              </div>
              <div className="font-bold text-lg">{data.dob.age} Years</div>
            </div>
            <div className="flex gap-3">
              <div className="">
                <InboxArrowDownIcon className="h-7" />
              </div>
              <div className="font-bold text-lg">{data.email}</div>
            </div>
            <div className="flex gap-3">
              <div className="">
                <MapIcon className="h-7" />
              </div>
              <div className="font-bold text-lg">
                {data.location.timezone.description}
              </div>
            </div>
            <div className="flex gap-3">
              <div className="">
                <GlobeAltIcon className="h-7" />
              </div>
              <div className="font-bold text-lg">{data.nat}</div>
            </div>
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default CardPage;
