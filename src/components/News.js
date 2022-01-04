import React, { useEffect,useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'


const News=(props)=> {

 const [articles, setarticles] = useState([])
 const [loading, setloading] = useState(false)
 const [page, setpage] = useState(1)
 const [totalResults, settotalResults] = useState(0)

// articles=[] for class one
// constructor(){
   
//     super();
//     this.state={
//         articles:this.articles,
//         loading:false,
//         page:1,
//         totalResults:0
//     }
// }

// the code to fetch news from api
// async means waiting fo component to finish

useEffect(async () => {
  
        let url=`https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=db4f4cd1f2fe463d95ec5bd71b577226`;
        setloading(true);
        let data = await fetch(url);
       
        let Parseddata = await data.json();
     
        setarticles(Parseddata.articles);
            setloading(false);
            settotalResults(Parseddata.totalResults);
     
     //    this.setState({
     //        articles:Parseddata.articles,
     //        loading:false,
     //        totalResults:Parseddata.totalResults
     // })
     
   
}, [])



const handlePrevClick= async ()=>{
    let url=`https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=db4f4cd1f2fe463d95ec5bd71b577226&page=${page-1}`;
    setloading(true);
    let data = await fetch(url);
    let Parseddata = await data.json();
     
    setarticles(Parseddata.articles);
    setloading(false);
    settotalResults(Parseddata.totalResults);
    setpage(page-1);
    // this.setState({
    //  articles:Parseddata.articles,
    //   page:this.state.page-1,
    //   loading:false,
    //   totalResults:Parseddata.totalResults
      
    //            })
}
const handleNextClick= async ()=>{
    console.log("next");
    let url=`https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=db4f4cd1f2fe463d95ec5bd71b577226&page=${page+1}`;
    setloading(true);
    let data = await fetch(url);
    let Parseddata = await data.json();
    console.log(Parseddata);
    setarticles(Parseddata.articles);
    setloading(false);
    settotalResults(Parseddata.totalResults);
    setpage(page+1);
    // this.setState({
    //  articles:Parseddata.articles,
    //   page:this.state.page+1,
    //   loading:false,
    //   totalResults:Parseddata.totalResults
      
    //            })
  
}
//  const fetchMoreData = async ()=>{
//     this.setState({page: this.state.page + 1})
//     let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apikey=dbe57b028aeb41e285a226a94865f7a7&page=${this.state.page} `;
//     let data = await fetch(url);
//     let parsedData = await data.json()
//     this.setState({
//     articles: this.state.articles.concat(parsedData.articles),
//     totalResults: parsedData.totalResults,
//     loading: false,
//     })
//     };

    
        return (
            <div className="container my-4">
               <h2> News</h2>
          {/* loading is true then spin     */}
          {/* {this.state.loading&&<Spinner/>} */}


          {/* <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!==this.state.totalResults}
          loader={<Spinner/>}> */}
         
         
        
        
                <div className="row">
                    {/* to use state use below thingy and return it */}
                    {loading && <Spinner/>}
                { !loading && articles.map((element)=>{
                  return <div className="col-md-4"  key ={element.url}>
                      {/* use slice to limit words (for beauty) */}
                    <NewsItem  title={ element.title?element.title.slice(0,44):""} description={ element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage} url={element.url}/>
                    </div>
                })}
                </div>
                {/* </InfiniteScroll> */}

                <div className="container my-4 d-flex justify-content-between">
                {/* &larr; is arrow symbol */}
                {/* disable is a property of btn  */}
                <button type="button" disabled={page<=1} className="btn btn-dark" onClick={handlePrevClick}> &larr; previous</button>
                <button type="button" className="btn btn-dark" onClick={handleNextClick}>Next &rarr; </button>
                </div>

             
               
               
            </div>
        )
    
}
   News.defaultProps={
    category:'general'
    }
    News.propTypes={
    category:PropTypes.string
    }
export default News
