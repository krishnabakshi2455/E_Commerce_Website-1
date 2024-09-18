import { Route, Routes } from 'react-router-dom'
import Homepage from '../pages/Homepage'
import Cards from '../components/Cards'
import Shop from '../components/Shop'
import CheckOut from '../components/CheckOut'
import ShopDetails from '../components/ShopDetails'
import ThankYou from '../components/ThankYou'
import Contact from '../components/Contact'

const Router = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/cart" element={<Cards/>} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/shopdetails" element={<ShopDetails />} />
        <Route path="/thankyou" element={<ThankYou/>} />
        <Route path="/contact" element={<Contact/>} />
    </Routes>
    </>
  )
}

export default Router