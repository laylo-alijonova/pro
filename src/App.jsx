import { Route, Routes } from 'react-router-dom'
import './App.css'
import Banner from './components/banner/Banner'
import Navbar from './components/navbar/Navbar'
import Today from './components/today/Today'
import { useState } from 'react'
import Likes from './pages/Like'
import Basket from './pages/Basket'
import Category from './components/category/Category'
import Month from './components/month/Month'
import SingleRoute from './pages/SingleRoute'
import Rasm from './components/rasm/Rasm'
import OurPro from './components/ourPro/OurPro'
import Black from './components/black/Black'
import Footer from './components/footer/Footer'
import SignUpForm from './pages/SignUpForm'
import ContactForm from './pages/ContactForm'

function App() {
  const [likedCount, setLikedCount] = useState(0);
  const [basketCount, setBasketCount]=useState(0)

  const handleLike = () => {
    setLikedCount(likedCount + 1);
  };

  const handleBasket=()=>{
    setBasketCount(basketCount+1)
  }

  return (
  <div className='cont'>
     <Navbar likedCount={likedCount} basketCount={basketCount} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Banner />
              <Today onLike={handleLike} onbasket={handleBasket} />
              <Category/>
              <Month/>
              <Rasm/>
              <OurPro/>
              <Black/>
              <Footer/>
            </>
          }
        />
        <Route path="/likes" element={<Likes />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/product/:id" element={<SingleRoute/>} />
        <Route path='sign' element={<SignUpForm/>}/>
        <Route path='con' element={<ContactForm/>}/>
      </Routes>
  </div>
  )
}

export default App
