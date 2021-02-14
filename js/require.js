let _header = document.querySelector('#header')
let _footer = document.querySelector('#footer')
let header_content = `<div class="topbar">
<div class="container-fluid">
  <div class="row">
    <div class="col-12">
      <div class="d-block d-md-flex align-items-center text-center">
        <div class="mr-4 d-inline-block py-1">
          <a href="#"><i class="far fa-envelope mr-2 fa-flip-horizontal text-primary"></i>info@thegurufoundation.org</a>
        </div>
        <div class="mr-auto d-inline-block py-1">
          <a href="tel:1-800-555-1234"><i class="fas fa-map-marker-alt text-primary mr-2"></i>6 Estate Housing Road, Calabar, Cross River State, Nigeria.</a>
        </div>
        <div class="d-inline-block py-1">
          <ul class="list-unstyled">
            <li><a href="">Careers</a></li>
            <li><a href="">News & Media</a></li>
            <li><a href="">FAQ</a></li>
            <li class="contact-number nav-item pr-4 ">
              <a class="font-weight-bold" href="#"><i class="fab fa-whatsapp pr-2"></i>+(234)08039314268</a>
            </li>
          </ul>
        </div>
        
      </div>
    </div>
  </div>
</div>
</div>
<nav class="navbar bg-white navbar-static-top navbar-expand-lg">
<div class="container-fluid">
  <button type="button" class="navbar-toggler" data-toggle="collapse" data-target=".navbar-collapse"><i class="fas fa-align-left"></i></button>
  <a class="navbar-brand" href="/">
    <img class="img-fluid" src="/images/GuruFOUNDATION.png" alt="logo">
  </a>
  <div class="navbar-collapse collapse">
    <ul class="nav navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="/" id="navbarDropdown"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/gurusession/" >Guru Session</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/gurulearn/" id="navbarDropdown">Learning</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/gurutalk/"    aria-haspopup="true" aria-expanded="false">Talks</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/guruclub/"   aria-haspopup="true" aria-expanded="false">Guru Club</a>
        
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#" id="navbarDropdown"  aria-haspopup="true" aria-expanded="false">Blog</a>
        
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/donate/"  aria-haspopup="true" aria-expanded="false">Donate</a>
        
      </li>
      
      <li class="dropdown nav-item">
        <a href="" class="nav-link" data-toggle="dropdown">Community</a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="https://facebook.com/thegurufoundation">Facebook<i class="fas fa-arrow-right"></i></a></li>
            <li><a class="dropdown-item" href="https://twitter.com/thegurufoundation1">Twitter<i class="fas fa-arrow-right"></i></a></li>
            <li><a class="dropdown-item" href="https://instagram.com/thegurufoundation">Instagram</a></li>
            <li><a class="dropdown-item" href="">LinkedIn</a></li>
            <li><a class="dropdown-item" href="https://t.me/joinchat/RSWy4Ri2U24zCvOTvG4Ryw">Telegram</a></li>
            <li><a class="dropdown-item" href="/contribute/">Contribute</a></li>
          </ul>
      </li>

      <li class="dropdown nav-item">
        <a href="" class="nav-link" data-toggle="dropdown">Event</a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="/Gurubighundred/">The big 100<i class="fas fa-arrow-right"></i></a></li>
          
          </ul>
      </li>
    </ul>
  </div>
  <!-- <div class="d-none d-sm-flex ml-auto mr-5 mr-lg-0 pr-4 pr-lg-0">
    <ul class="nav ml-1 ml-lg-2 align-self-center">
      <li class="contact-number nav-item pr-4 ">
        <a class="font-weight-bold" href="#"><i class="fab fa-whatsapp pr-2"></i>+(234)08039314268</a>
      </li>
      <li class="header-search nav-item">
        <div class="search">
          <a class="search-btn not_click" href="javascript:void(0);"></a>
          <div class="search-box not-click">
            <form action="" method="post">
              <input type="text" class="not-click form-control" name="search" placeholder="Search..">
              <button class="search-button" type="submit"> <i class="fa fa-search not-click"></i></button>
            </form>
          </div>
        </div>
      </li>
    </ul>
  </div> -->
</div>
</nav>`

let footer_content = ` <div class="container-fluid p-0">
<div class="row">
  <div class="col-lg-6">
    <div class="p-6">
      <div class="row">
        <div class="col-lg-6">
          <a href="index-2.html"><img class="img-fluid" src="/images/GuruFOUNDATION.png" alt="logo"></a>
          <p class="mt-3 text-dark">We also know those epic stories</p>
        </div>
        <div class="col-lg-6">
          <h5 class="text-primary">Head office</h5>
          <p class="text-dark">No 6 Estate Housing Road, Calabar, CRS</p>
          <p class="text-dark"><i class="fab fa-whatsapp mr-2 text-primary"></i>+(234) 08039314268</p>
          <p class="text-dark"><i class="far fa-envelope mr-2 text-primary"></i>info@thegurufoundation.org</p>
          <h4 class="text-dark mb-0 font-weight-bold"><a class="text-dark" href="#">+(234)08039314268</a></h4>
        </div>
      </div>
    </div>
  </div>
  <div class="col-lg-6 bg-dark">
    <div class="p-6">
      <div class="row">
        <div class="col-sm-6 col-lg-5 mb-4 mb-lg-0">
          <h5 class="text-primary mb-2 mb-sm-4">Events / Programs</h5>
          <div class="footer-link">
            <ul class="list-unstyled mb-0">
              <li><a class="text-white" href="#">Guru Session</a></li>
              <li><a class="text-white" href="#">Guru Talk</a></li>
              <li><a class="text-white" href="#">Guru Learn</a></li>
              <li><a class="text-white" href="#">Guru Club</a></li>
              <!-- <li><a class="text-white" href="#">Process Automation</a></li> -->
            </ul>
          </div>
        </div>
        <div class="col-sm-6 col-lg-5">
          <h5 class="text-primary mb-2 mb-sm-4">Pages</h5>
          <div class="footer-link">
            <ul class="list-unstyled mb-0">
              <li><a class="text-white" href="#">About</a></li>
              <li><a class="text-white" href="#">Our Mission</a></li>
              <li><a class="text-white" href="#">Home</a></li>
              <li><a class="text-white" href="#">Our Core Value</a></li>
              
            </ul>
          </div>
        </div>
      </div>
      <p class="mb-0 text-white mt-5">©Copyright 2020 <a href="/" class="text-primary">The Guru Foundation</a> All Rights Reserved</p>
    </div>
  </div>
</div>
</div>`
    
window.addEventListener('DOMContentLoaded', () => {
    _header.innerHTML = header_content
    _footer.innerHTML = footer_content



    // fetch('/components/header.html', {
    //     method: 'GET',
    //     header: ''
    // }
    
    // )
    // .then( async(response) =>  {
        
    // if (!response.ok) {
    //     throw Error(response.statusText);
    // }
    //     const responseText = await response.text()
    //     console.log(responseText)
    //     _header.innerHTML = responseText
    // })
    // .catch((error) => {
    //     console.log('Looks like there was a problem: \n', error);
    // });

    // footer

   

  
})
