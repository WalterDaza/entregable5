import React from 'react'

const Pagination = ({page, pageLength, setPage}) => {

    const pagesPerBlock = 8
    const currentBlock = Math.ceil(page / pagesPerBlock)
    const blockLength = Math.ceil(pageLength / pagesPerBlock)

    const arrPages = []
    const initialPage = (currentBlock - 1) * pagesPerBlock + 1
    const limitPage = blockLength === currentBlock ? pageLength : initialPage + pagesPerBlock - 1 
    for(let i = initialPage; i <= limitPage; i++){
        arrPages.push(i)
    }

    const handlePrev = () => {
        setPage(page - 1)
    }

    const handleNext = () => {
        setPage(page + 1)
    }

    const handlePage = currentPage => { 
        setPage(currentPage)
    }

  return (
    <div className='pagination_container'>
        {
            page > 1 &&
            <div className='pagination_prev' onClick={handlePrev}><i class='bx bxs-left-arrow'></i></div>
        }
        <div className='pagination_number'>
            {
                arrPages.map(e => (
                    <div onClick={() => handlePage(e)} className={`number ${page === e && "pagination_active"}`} key={e}>{e}</div>
                ))
            }
        </div>
        {
            page < pageLength &&
        <div className='pagination_next' onClick={handleNext}><i className='bx bxs-right-arrow'></i></div>
        }
    </div>
  )
}

export default Pagination