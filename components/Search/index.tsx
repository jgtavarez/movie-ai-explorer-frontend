"use client";
import { Input } from "../ui";
import { SearchIcon } from "../icon";
import { useSearch } from "@/hooks/useSearch";

export const Search = () => {
  const { handleSearch, searchParams } = useSearch();

  return (
    <div className="relative max-w-lg mx-auto">
      <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
        <SearchIcon />
      </span>
      <Input
        type="text"
        placeholder="Search"
        defaultValue={searchParams.get("search") || ""}
        style={{
          paddingLeft: "2.5rem",
        }}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
      />
    </div>
  );
};
