
// Importing all the Images
import e1 from '../assets/e1.png'
import e2 from '../assets/e2.png'
import e3 from '../assets/e3.png'
import e4 from '../assets/e4.png'
import e5 from '../assets/e5.png'
import e6 from '../assets/e6.png'
import e7 from '../assets/e7.png'
import e8 from '../assets/e8.png'

//Importing Link
import { Link } from 'react-router-dom'


const LandingPage = () => {


  return (
    <div className="flex flex-col">

      {/* Hero Section of the Portal */}
      <div className="hero-section -ml-4  h-50">
        {/* Image of the Hero Section */}
        <div className="hero-image">
          <p className="hero-text">
            Join us on this exciting <br /> journey of discovery <br /> and become a hero <br /> in your own story.
          </p>
        </div>

      </div>
      <div className="hero-caption mt-32 mb-32">
        <p>Why your ward should be here</p>
        <p className="caption text-gray-500">Providing an exceptional educational experience for success</p>
      </div>
      {/* Courses and Offers */}
      <div className="courses-section grid gap-4  grid-cols-3 md:flex-rows sm:gap-2 ">
        {/* Images of the Courses Section */}

        <div className=" first-course">
          <div className="course-img">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
            </svg>
          </div>
          <p className='text-xl font-bold'>Outstanding Faculty</p>
          <div className="course-caption-text">
            <p>Our teachers are highly trained and passionate about education. They are committed to ensuring that your child receives the best possible support and guidance throughout their academic journey.</p>
          </div>
        </div>
        <div className="second-course">
          <div className="course-img">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>

          </div>
          <p className='text-xl font-bold'>Global Curriculum</p>
          <div className="course-caption-text">
            <p>Our international curriculum is designed to equip students with the skills and knowledge they need to thrive in a globalized world. We offer a wide range of subjects and programs that are tailored to meet the unique needs of each individual student.</p>
          </div>
        </div>
        <div className=" third-course">
          <div className="course-img">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
            </svg>

          </div>
          <p className='text-xl font-bold'>State-of-the-art Facilities</p>
          <div className="course-caption-text">
            <p>Our school is equipped with modern and innovative facilities, including science and computer labs, libraries, sports grounds, and more. These facilities provide students with the tools they need to excel in their studies and develop their talents.</p>
          </div>
        </div>
      </div>

      {/* Enroll Button */}

      <div className="btn justify-center ">
        <Link to={'/login'} className="bg-black text-white py-3 px-5 flex gap-2">Enroll Your Ward Now
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>

        </Link>
      </div>

      {/* Lastest Newsletter */}
      <h2 className="news-caption">Latest Newsletter</h2>
      <p className="caption text-gray-500 text-center mb-4">Stay up-to-date with the latest news and events at our school</p>
      <div className="news-section px-9 py-8 grid gap-6 grid-cols-3 mb-2 ">
        <div className="news-img news-first">
          <p className="news-img-caption">
            New school fees release <br />
            ahead of next academic year
          </p>
        </div>
        <div className="news-img news-sec">
          <p className="news-img-caption">
            New school fees release <br />
            ahead of next academic year
          </p>
        </div>
        <div className="news-img news-third">
          <p className="news-img-caption">
            New school fees release <br />
            ahead of next academic year
          </p>
        </div>
      </div>

      {/* Read More Button */}
      <div className="btn justify-center ">
        <Link className="bg-black text-white py-3 px-5 flex gap-2">Read More
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>

        </Link>
      </div>

      {/* Acknowledgement Section */}
      <div className="ack flex -mr-8  py-4 px-8  gap-4 ">
        <div className="ack-text">
          <p className="text">
            “ We appreciate the school's emphasis on diversity, equity, and inclusion. Our daughter has been exposed to a wide range of cultures and perspectives. ”
          </p>
          <p className="sub-text py-4 text-gray-300">
            Mr Nathan Offei Ansah • Parent</p>
        </div>

        {/* Parent Image */}
        <div className="ack-img">
        </div>
      </div>

      {/* Join the Winning School Section */}
      <div className="school-stats p-16  -ml-8 flex -mr-8">
        <p className="school-ads -ml-6">Join the winning school now</p>

        <div className="stats flex  gap-8 ml-4 -mr-16">
          <div className="enrolled-students">
            <h2>3000+</h2>
            <p>Enrolled Students</p>
          </div>

          <div className="number-of-staff">
            <h2>30</h2>
            <p>Staff</p>
          </div>

          <div className="global-alumni">
            <h2>10,000</h2>
            <p>Global Alumni</p>
          </div>
        </div>
      </div>

      <div className="alumni-images p-8 grid grid-row-4">

        {/* Alumni Images and the BUTTON */}

        {/* First and Second Images for the ALUMNI and the BUTTON */}
        <div className="almuni-img grid grid-cols-3 gap-12">
          <div className="image-alumni image-al-first me-auto ml-20">
            <img src={e1} alt="" style={{
              width: '120px', heigh
                : '80px'
            }} />
          </div>

          <div className="alumni-text-section">
            <p className='mb-4'>Enroll your ward to join <br />
              over 3000+ successful students</p>

            {/* Join Us Button */}

            <div className="btn justify-center mb">
              <Link to={'/login'} className="bg-black text-white py-3 px-5 flex gap-2">Enroll Your Ward Now
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>

              </Link>
            </div>
          </div>

          <div className="image-alumni eigth mx-auto">
            <img src={e8} alt="" style={{
              width: '120px',
            }} />
          </div>
        </div>

        <div className="almuni-img grid grid-cols-3 gap-8 -mt-12">
          <div className="image-alumni second me-auto ml-40">
            <img src={e2} alt="" style={{
              width: '80px', height
                : '80px',
            }} />
          </div>

          {/* The Third and Sixth Pictures */}
          <div className=" just-an-empty-div flex gap-48">
            <div className="image-alumni third -ml-48 mt-2">
              <img src={e3} alt="" style={{
                width: '80px', height
                  : '80px',
              }} />
            </div>
            <div className="image-alumni sixth -mr-32">
              <img src={e6} alt="" style={{
                width: '80px', height
                  : '80px',
              }} />
            </div>
          </div>
          <div className="image-alumni seventh mx-auto mr-56">
            <img src={e7} alt="" style={{
              width: '80px', height
                : '80px',
            }} />
          </div>
        </div>

        {/* Forth and Fifth Images */}
        <div className="almuni-img grid fourth-and-fifth-img grid-cols-2 flex gap-8">

          <div className="image-alumni fourth ml-72">
            <img src={e4} alt="" style={{
              width: '120px', height
                : '120px',
            }} />
          </div>
          <div className="image-alumni fifth ">
            <img src={e5} alt="" style={{
              width: '120px', height
                : '120px', marginLeft: '120px', marginTop: '-20px',
            }} />
          </div>
        </div>


      </div>

      {/* Seperator Footer */}
      <div className="blank-section footer bg-black -ml-10 -mr-4 grid grid-row-3 flex ">
        <div className="details grid grid-cols-2 p-16">
          <div className="school-details">
            <h1 className='text-white text-2xl mb-1'>deutscheinternationalschool</h1>
            <p className='text-gray-300'>Building Future Leaders</p>
          </div>
          <div className="flex grid grid-cols-2 gap-4">
            <div className="dev-team">
              <h1 className='text-white text-2xl mb-1'>Quick Links</h1>
              <div className="grid grid-cols-2 gap-2">
                <ul>
                  <li><a href="/">Home</a></li>
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Career</a></li>
                  <li><a href="#">Newsletter</a></li>
                </ul>
                <ul>
                  <li><a href="#">Gallery</a></li>
                  <li><a href="#">Facility</a></li>
                  <li><a href="#">FAQs</a></li>
                  <li><a href="#">Team</a></li>
                </ul>
              </div>
            </div>

            {/* Contact Information and Newsletter*/}
            <div className="newsletter-section text-gray-300">
              <h1 className='text-2xl text-white mb-1'>Contact Information</h1>

              {/* Email  */}
              <div className="flex gap-2 p-2">
                <div className="">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>

                </div>
                <div className="">
                  <p>deutscheinternationalschool@gmail.com</p>
                </div>
              </div>

              {/* Telephone */}
              <div className="flex gap-2 p-2">
                <div className="">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>

                </div>
                <div className="">
                  <p>+233245679328</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex gap-2 ml-2 mt-2">
                <div className="">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>

                </div>
                <div className="">
                  <p>Asamankese, Near the Pentecost Church</p>
                </div>
              </div>

              {/* Newsletter Section */}
              <div className="flex bg-white newsletter-sub m-4 rounded-full">
                <input type="text" className='py-2  px-4 border-none rounded-full' placeholder='Subscribe to Newsletter' />

                <div className="send-btn -mr-16 rounded-full">
                  <Link class="absolute z-10 h-9 bg-black rounded-full text-white flex items-center justify-center aspect-square right-1 top-[50%] -translate-y-[50%] "><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg></Link>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Seperator */}
        <div className="seperator bg-gray-300 mr-16 -mt-6 ml-16"></div>

        {/* Copyright */}
        <div className="btm-footer text-gray-300 -mt-10 px-14 grid-cols-3 grid flex bg-black">
          <p className='ml-4'>All Rights Reserved. The Digerati</p>

          <p className='ml-20'> A deutscheinternationalschool © 2023</p>

          <div className="grid grid-cols-3 flex btm-sub ">
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Cookie Policies</li>
          </div>

        </div>

      </div>



    </div>
  )
}

export default LandingPage