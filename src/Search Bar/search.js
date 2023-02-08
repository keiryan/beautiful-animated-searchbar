import { useState, useRef, useEffect } from "react";
import {
  Form,
  Input,
  ResultContainer,
  Result,
  GhostResultContainer,
  SearchIcon,
  Coin,
  FormContainer,
  NoResults,
} from "./styles.search";

// array of fruits to be used in the search bar
const fruits = [
  "apple",
  "banana",
  "kiwi",
  "orange",
  "pear",
  "pineapple",
  "strawberry",
  "watermelon",
];

export default function Search() {
  const [value, setValue] = useState("");
  const [height, setHeight] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(value);
    setValue("");
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const filteredFruits = fruits.filter((fruit) =>
    fruit.toLowerCase().includes(value.toLowerCase())
  );

  const prevHeight = useRef();

  const currentHeight = useRef();

  const noResults = filteredFruits.length === 0;

  useEffect(() => {
    setHeight(currentHeight.current.clientHeight);
    prevHeight.current = height;
    console.log(prevHeight.current, currentHeight.current.clientHeight);
  }, [value]);

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit} value={value}>
        <SearchIcon />
        <Input
          onChange={handleChange}
          value={value}
          type="text"
          placeholder="Search"
        />
      </Form>
      <ResultContainer height={noResults ? 300 : height} value={value}>
        {filteredFruits.length === 0 ? (
          <NoResults>No Results</NoResults>
        ) : (
          filteredFruits.map((fruit) => (
            <Result key={fruit}>
              <Coin />
              {fruit}
            </Result>
          ))
        )}
      </ResultContainer>
      <GhostResultContainer ref={currentHeight} value={value}>
        {filteredFruits.length === 0 ? (
          <NoResults>No Results</NoResults>
        ) : (
          filteredFruits.map((fruit) => (
            <Result key={fruit}>
              <Coin />
              {fruit}
            </Result>
          ))
        )}
      </GhostResultContainer>
    </FormContainer>
  );
}
