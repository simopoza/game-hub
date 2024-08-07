import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useGameQueryStore from "../Stores/GameStore";
import { useNavigate } from "react-router-dom";

const SearchInput = () => {
  const setSearchInput = useGameQueryStore((s) => s.setSearchInput);
  const ref = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();


  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) {
          setSearchInput(ref.current.value);
          navigate('/');
        }
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={ref}
          borderRadius={20}
          placeholder="Search games..."
          variant="filled"
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
