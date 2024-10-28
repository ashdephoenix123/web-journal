import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const AutoComplete = ({ options }) => {
  const modalRef = useRef();
  const [showOptions, setShowOptions] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [optionsToShow, setOptionsToShow] = useState(options);
  console.log("selectedCategory", selectedCategory);

  const showTheOptions = (event) => {
    event.preventDefault();
    showOptions === false && setShowOptions(true);
  };

  const closeTheOptions = () => {
    showOptions === true && setShowOptions(false);
  };

  const resetOptions = () => {
    closeTheOptions();
    setSelectedCategory("");
    setOptionsToShow(options);
  };

  const updateSelectedCategory = (option) => {
    setSelectedCategory(option);
    closeTheOptions();
  };

  const writeToCategory = (e) => {
    const { value } = e.target;
    setSelectedCategory(value);
    filterOptions(value);
  };

  const filterOptions = (value) => {
    let filteredOptions = options ? [...options] : [];
    filteredOptions = filteredOptions.filter((opt) =>
      opt.name.toLowerCase().includes(value.toLowerCase())
    );
    if (filteredOptions.length) {
      setOptionsToShow(filteredOptions);
    } else {
      setOptionsToShow("no results found");
    }
  };

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setShowOptions(false); // Close the modal
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={modalRef}>
      <form
        onClick={(event) => showTheOptions(event)}
        className="inline-flex gap-2 bg-white bg-opacity-15 px-2 py-2 justify-center max-w-fit"
      >
        <input
          type="text"
          name="selectedCategory"
          id="selectedCategory"
          value={
            typeof selectedCategory === "string"
              ? selectedCategory
              : selectedCategory?.name
          }
          placeholder="Browse Categories"
          onChange={writeToCategory}
          className="outline-none bg-transparent text-sm tracking-wide flex-1 text-opacity-65 text-white"
        />
        <button type="button" onClick={resetOptions}>
          <Image
            src={selectedCategory ? "/images/cross.svg" : "/images/chevron.svg"}
            alt="send icon"
            width={12}
            height={12}
            className=""
          />
        </button>
      </form>
      <ul
        className="absolute top-[36px] z-10 bg-black w-full max-h-52 overflow-y-scroll border border-white border-opacity-15 custom-scrollbar"
        style={{ display: showOptions ? "block" : "none" }}
      >
        {typeof optionsToShow !== "string" && optionsToShow.length > 0 ? (
          optionsToShow.map((option) => (
            <li
              key={option.id}
              onClick={() => updateSelectedCategory(option)}
              className="px-3 py-2 hover:bg-white hover:bg-opacity-15 cursor-pointer text-xs capitalize  whitespace-nowrap"
            >
              {option.name}
            </li>
          ))
        ) : (
          <li className="px-3 py-2 text-xs italic capitalize whitespace-nowrap select-none">
            no results found
          </li>
        )}
      </ul>
    </div>
  );
};

export default AutoComplete;
