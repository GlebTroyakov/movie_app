import { Pagination } from 'antd'

export const MoviePagination = function ({
  totalResults,
  currentPage,
  changePage,
}: {
  totalResults: number
  currentPage: number
  changePage: (pageNumber: number) => void
}) {
  return (
    <div style={{ textAlign: 'center' }}>
      <Pagination
        className="movies__pagination"
        defaultCurrent={1}
        total={totalResults <= 10000 ? totalResults : 10000}
        pageSize={20}
        onChange={(pageNumber) => {
          changePage(pageNumber)
        }}
        current={currentPage}
        hideOnSinglePage
        showSizeChanger={false}
        style={{}}
      />
    </div>
  )
}
