import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const Home = ()=>{
  const [job, setJob] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = job.slice(indexOfFirstPost, indexOfLastPost);

  const handleNextPage = () => {
    if (indexOfLastPost < job.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };



  useEffect(()=>{
    FullData()
  },[])
  console.log("Environment variable REACT_APP_API_URL:", process.env.REACT_APP_API_URL);
    const FullData = async()=>{
      
      try{
    // const response = await axios.get(`${process.env.REACT_APP_API_URL}/wp-json/wp/v2/job`)
    const response = await axios.get('https://mediumorchid-dugong-884586.hostingersite.com/wp-json/wp/v2/job')

      setJob(response.data);
      }catch(error){
        alert("Api Issue")
      }
}



    return <>
  <div className="main-banner">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 align-self-center">
          <div className="caption header-text">
            <h6>Welcome to lugx</h6>
            <h2>BEST GAMING SITE EVER!</h2>
            <p>LUGX Gaming is free Bootstrap 5 HTML CSS website template for your gaming websites. You can download and use this layout for commercial purposes. Please tell your friends about TemplateMo.</p>
            <div className="search-input">
              <form id="search" action="#">
              {/* onkeypress="handle" */}
                <input type="text" placeholder="Type Something" id='searchText' name="searchKeyword"  /> 
                
                <button role="button">Search Now</button>
              </form>
            </div>
          </div>
        </div>
        <div className="col-lg-4 offset-lg-2">
          <div className="right-image">
            <img src="assets/images/banner-image.jpg" alt=""/>
            <span className="price">$22</span>
            <span className="offer">-40%</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="features">
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-6">
          <a href="#">
            <div className="item">
              <div className="image">
                <img src="assets/images/featured-01.png" alt="" style={{maxWidth: '44px'}}/>
              </div>
              <h4>Free Storage</h4>
            </div>
          </a>
        </div>
        <div className="col-lg-3 col-md-6">
          <a href="#">
            <div className="item">
              <div className="image">
                <img src="assets/images/featured-02.png" alt="" style={{maxWidth: '44px'}}/>
              </div>
              <h4>User More</h4>
            </div>
          </a>
        </div>
        <div className="col-lg-3 col-md-6">
          <a href="#">
            <div className="item">
              <div className="image">
                <img src="assets/images/featured-03.png" alt="" style={{maxWidth: '44px'}}/>
              </div>
              <h4>Reply Ready</h4>
            </div>
          </a>
        </div>
        <div className="col-lg-3 col-md-6">
          <a href="#">
            <div className="item">
              <div className="image">
                <img src="assets/images/featured-04.png" alt="" style={{maxWidth:'44px'}}/>
              </div>
              <h4>Easy Layout</h4>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>

  <div className="section trending">
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="section-heading">
            <h6>Trending</h6>
            <h2>Trending Games</h2>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="main-button">
            <a href="shop.html">View All</a>
          </div>
        </div>


{
  job.map((job)=> <>

        <div className="col-lg-3 col-md-6">
          <div className="item">
            <div className="thumb">
              <a href="product-details.html"> <img src={job.featured_image_src_large[0]} alt={job.title.rendered}/></a>
             <Link to={`${job.author_info.author_link}`} target="_blank"> <span className="price"><em style={{}}></em>{job.author_info.display_name}</span></Link>
            </div>
            <div className="down-content">
              <span className="category">Action</span>
              <h4>{job.title.rendered}</h4>
              <a href="product-details.html"><i className="fa fa-shopping-bag"></i></a>
            </div>
          </div>
        </div>

        </>)
      }
      </div>
    </div>
  </div>

  <div className="pagination-buttons">
            <button onClick={handlePreviousPage} disabled={currentPage === 1}>
              Previous
            </button>
            <button onClick={handleNextPage} disabled={indexOfLastPost >= job.length}>
              Next
            </button>
  </div>


  <div className="section most-played">
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="section-heading">
            <h6>TOP GAMES</h6>
            <h2>Most Played</h2>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="main-button">
            <a href="shop.html">View All</a>
          </div>
        </div>
        <div className="col-lg-2 col-md-6 col-sm-6">
          <div className="item">
            <div className="thumb">
              <a href="product-details.html"><img src="assets/images/top-game-01.jpg" alt=""/></a>
            </div>
            <div className="down-content">
                <span className="category">Adventure</span>
                <h4>Assasin Creed</h4>
                <a href="product-details.html">Explore</a>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-6 col-sm-6">
          <div className="item">
            <div className="thumb">
              <a href="product-details.html"><img src="assets/images/top-game-02.jpg" alt=""/></a>
            </div>
            <div className="down-content">
                <span className="category">Adventure</span>
                <h4>Assasin Creed</h4>
                <a href="product-details.html">Explore</a>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-6 col-sm-6">
          <div className="item">
            <div className="thumb">
              <a href="product-details.html"><img src="assets/images/top-game-03.jpg" alt=""/></a>
            </div>
            <div className="down-content">
                <span className="category">Adventure</span>
                <h4>Assasin Creed</h4>
                <a href="product-details.html">Explore</a>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-6 col-sm-6">
          <div className="item">
            <div className="thumb">
              <a href="product-details.html"><img src="assets/images/top-game-04.jpg" alt=""/></a>
            </div>
            <div className="down-content">
                <span className="category">Adventure</span>
                <h4>Assasin Creed</h4>
                <a href="product-details.html">Explore</a>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-6 col-sm-6">
          <div className="item">
            <div className="thumb">
              <a href="product-details.html"><img src="assets/images/top-game-05.jpg" alt=""/></a>
            </div>
            <div className="down-content">
                <span className="category">Adventure</span>
                <h4>Assasin Creed</h4>
                <a href="product-details.html">Explore</a>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-6 col-sm-6">
          <div className="item">
            <div className="thumb">
              <a href="product-details.html"><img src="assets/images/top-game-06.jpg" alt=""/></a>
            </div>
            <div className="down-content">
                <span className="category">Adventure</span>
                <h4>Assasin Creed</h4>
                <a href="product-details.html">Explore</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="section categories">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <div className="section-heading">
            <h6>Categories</h6>
            <h2>Top Categories</h2>
          </div>
        </div>
        <div className="col-lg col-sm-6 col-xs-12">
          <div className="item">
            <h4>Action</h4>
            <div className="thumb">
              <a href="product-details.html"><img src="assets/images/categories-01.jpg" alt=""/></a>
            </div>
          </div>
        </div>
        <div className="col-lg col-sm-6 col-xs-12">
          <div className="item">
            <h4>Action</h4>
            <div className="thumb">
              <a href="product-details.html"><img src="assets/images/categories-05.jpg" alt=""/></a>
            </div>
          </div>
        </div>
        <div className="col-lg col-sm-6 col-xs-12">
          <div className="item">
            <h4>Action</h4>
            <div className="thumb">
              <a href="product-details.html"><img src="assets/images/categories-03.jpg" alt=""/></a>
            </div>
          </div>
        </div>
        <div className="col-lg col-sm-6 col-xs-12">
          <div className="item">
            <h4>Action</h4>
            <div className="thumb">
              <a href="product-details.html"><img src="assets/images/categories-04.jpg" alt=""/></a>
            </div>
          </div>
        </div>
        <div className="col-lg col-sm-6 col-xs-12">
          <div className="item">
            <h4>Action</h4>
            <div className="thumb">
              <a href="product-details.html"><img src="assets/images/categories-05.jpg" alt=""/></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <div className="section cta">
    <div className="container">
      <div className="row">
        <div className="col-lg-5">
          <div className="shop">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-heading">
                  <h6>Our Shop</h6>
                  <h2>Go Pre-Order Buy & Get Best <em>Prices</em> For You!</h2>
                </div>
                <p>Lorem ipsum dolor consectetur adipiscing, sed do eiusmod tempor incididunt.</p>
                <div className="main-button">
                  <a href="shop.html">Shop Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-5 offset-lg-2 align-self-end">
          <div className="subscribe">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-heading">
                  <h6>NEWSLETTER</h6>
                  <h2>Get Up To $100 Off Just Buy <em>Subscribe</em> Newsletter!</h2>
                </div>
                <div className="search-input">
                  <form id="subscribe" action="#">
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your email..."/>
                    <button type="submit">Subscribe Now</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

    </>
}

export default Home;