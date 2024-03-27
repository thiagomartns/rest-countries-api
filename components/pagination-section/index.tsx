import React, { useContext } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { CountryContext } from "@/contexts/CountryContext";

export const PaginationSection = () => {
  const { currentPage, paginate, pageNumbers } = useContext(CountryContext);

  return (
    <section className="py-10">
      <Pagination>
        <PaginationContent className="flex-wrap">
          <PaginationItem>
            <PaginationPrevious
              className="hover:cursor-pointer"
              onClick={() => paginate(currentPage - 1)}
            />
          </PaginationItem>
          {pageNumbers.map((number: number) => (
            <PaginationItem key={number}>
              <PaginationLink
                isActive={number === currentPage ?? false}
                className="hover:cursor-pointer"
                onClick={() => paginate(number)}
              >
                {number}
              </PaginationLink>
            </PaginationItem>
          ))}

          <PaginationItem className="hover:cursor-pointer">
            <PaginationNext onClick={() => paginate(currentPage + 1)} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </section>
  );
};
