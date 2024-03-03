import { Divider } from "@nextui-org/react";
import CardPage from "./CardPage";
import NavComp from "./NavComp";
import FooterComp from "./FooterComp";

const MainPage = () => {
  return (
    <>
      <div className="">
        <NavComp />
        <CardPage />
        <div className="flex h-[3dvh] justify-center items-center">
          <Divider />
        </div>
        <FooterComp />
      </div>
    </>
  );
};

export default MainPage;
