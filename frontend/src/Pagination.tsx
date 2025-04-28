import ReactPaginate from "react-paginate"

interface PaginationProps {
  currentPage: number
  onChangePage: (selectedPage: number) => void
  pageCount: number
}

export const Pagination: React.FC<PaginationProps> = ({ currentPage, onChangePage, pageCount }) => (
  <ReactPaginate
    className="pagination"
    breakLabel="..."
    nextLabel=">"
    previousLabel="<"
    onPageChange={event => onChangePage(event.selected + 1)}
    pageRangeDisplayed={6}
    pageCount={pageCount}
    forcePage={currentPage - 1}
  />
)
