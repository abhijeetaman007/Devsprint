import React from 'react';

const Pagination = (props) => {
    //pushed all pages as list tags into this array
    let pageLinks = []
    //active means selected page number highlighted 
    
    for(let i = 1; i <= props.pages + 1; i++ ) {
        let active = props.currentPage == i ? 'active' : '';
        pageLinks.push(<li className={`waves-effect ${active}`} key={i} onClick={() => props.nextPage(i)}><a className="page-link" href="#!">{i}</a></li>)              
    }
    return (
            <div className="container">
                <div className="row">
                    <nav>
                    <ul className="pagination">
                        
                        { props.currentPage > 1 ? <li className="waves-effect" onClick={() => props.nextPage(props.currentPage - 1)
                        //prev button takes u one page before by updating value of currPage to currPage-1
                        }><a className="page-link" href="#">Prev</a></li> : ''}
                        {  pageLinks }
                        { props.currentPage < props.pages + 1 ? <li className="page-item" onClick={() => props.nextPage(props.currentPage + 1)
                        //next button takes u one page after by updating value of currPage to currPage+1
                        }><a className="page-link" href="#">Next</a></li> : ''} 
                    </ul>
                    </nav>
                    
                </div>        
            </div>
    )
}


export default Pagination;
