export function createPages(pages, pagesCount, currentPage) {
  if(pagesCount > 10) {
    if(currentPage > 1) {
      for (let i = currentPage-1; i <= currentPage+1; i++) {
        pages.push(i)
        if(i === pagesCount) break
      }
    }
    else {
      for (let i = 1; i <= 3; i++) {
        pages.push(i)
        if(i === pagesCount) break
      }
    }
  }  else {
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i)
    }
  }
}
