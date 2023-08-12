import { FormControl, FormLabel, Select } from "@chakra-ui/react";
import { useContext } from "react";
import { HouseContext } from "../../context/HouseContext";

const MoveInDate = () => {
  const { setMoveInDate } = useContext(HouseContext);

  const moveInDates = [
    { value: "Within a month" },
    { value: "Within 3 months" },
    { value: "Within 6 months" },
    { value: "Within the year" },
  ];

  const moveInDateHandler = (event) => {
    setMoveInDate(event.target.value);
  };

  return (
    <Select
      iconSize="0px"
      placeholder="select date"
      onChange={moveInDateHandler}
    >
      {moveInDates.map((moveInDate, index) => (
        <option key={index}>{moveInDate.value}</option>
      ))}
    </Select>
  );
};

export default MoveInDate;
