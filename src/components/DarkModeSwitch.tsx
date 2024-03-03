import darkmodutiity from "@/utility/darkmodutiity";
import {MoonIcon, SunIcon} from "@heroicons/react/16/solid";
import {Switch} from "@nextui-org/react";
import {useAtom} from "jotai";
import {useEffect} from "react";

const DarkModeSwitch = () => {
  const [drkm, setDrkm] = useAtom(darkmodutiity);

  useEffect(() => {
    if (drkm) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [drkm]);

  return (
    <>
      {" "}
      <Switch
        defaultSelected
        size="lg"
        color="secondary"
        thumbIcon={({isSelected, className}) =>
          isSelected ? (
            <SunIcon className={className} />
          ) : (
            <MoonIcon className={className} />
          )
        }
        isSelected={drkm}
        onValueChange={(isSelected: boolean) => setDrkm(isSelected)}
      ></Switch>
    </>
  );
};

export default DarkModeSwitch;
