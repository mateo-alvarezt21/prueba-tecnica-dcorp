import React from 'react'

const Pagination = ({herosPerPage,currentPage, setCurrentPage, totalHeros}) => {

  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalHeros / herosPerPage); i++){
    pageNumbers.push(i)
  }

  const onPreviusPage = () =>{
    setCurrentPage(currentPage -  1)
  }
  const onNextPage = () =>{
    setCurrentPage(currentPage +  1)
  }

  const onSpecificPage = (n) =>{
    setCurrentPage(n)
  }


  return (
    <nav 
      className="pagination is-centered" 
      role="navigation" 
      aria-label="pagination">

      <a className={`pagination-previous ${currentPage === 1 ? "is-disabled" : ""}`} onClick={onPreviusPage}><i className='bx bx-chevron-left' ></i></a>
      <a className={`pagination-next ${currentPage >= pageNumbers.length ? "is-disabled" : ""}`} onClick={onNextPage}><i className='bx bx-chevron-right'></i></a>
      <ul className="pagination-list">
  
        {
          pageNumbers.map(noPage => {
            return(
            <li key={noPage}>
              <a className={`pagination-link ${noPage === currentPage ? "is-current" : ""}`} onClick={() => onSpecificPage(noPage)} >
                {noPage}
              </a>
            </li>
            )
          })
        }
      </ul>
    </nav>
  )
}

export default Pagination