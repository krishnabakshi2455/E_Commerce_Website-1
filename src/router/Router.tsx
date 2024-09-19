import { Route, Routes } from 'react-router-dom'
import Homepage from '../pages/Homepage'
import Cards from '../components/Cards'
import Shop from '../components/Shop'
import CheckOut from '../components/CheckOut'
import ShopDetails from '../components/ShopDetails'
import ThankYou from '../components/ThankYou'
import Contact from '../components/Contact'
import Testimonial from '../components/Testimonial'
import Auth from '../pages/admin/Auth'
import Profile from '../pages/admin/profile/Profile'
import ProfileAddEdit from '../pages/admin/profile/ProfileAddEdit'
import Product from '../pages/admin/product/Product'
import Category from '../pages/admin/category/Category'
import CategoryAddEdit from '../pages/admin/category/CategoryAddEdit'
import Order from '../pages/admin/order/Order'
import ViewOrder from '../pages/admin/order/ViewOrder'

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/cart" element={<Cards />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/shopdetails" element={<ShopDetails />} />
        <Route path="/thankyou" element={<ThankYou />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/testimonials" element={<Testimonial />} />

        <Route path='/admin' element={<Auth />}>



            <Route path='profile' element={<Profile />} />
            <Route path='profile/add' element={<ProfileAddEdit />} />
            <Route path='profile/edit' element={<ProfileAddEdit />} />


            <Route path='category' element={<Category />} />
            <Route path='category/add' element={<CategoryAddEdit/>} />
            <Route path='category/edit' element={<CategoryAddEdit />} />



            <Route path='order' element={<Order />} />
            <Route path='order/view' element={<ViewOrder />} />



            <Route path='product' element={<Product/>} />
            <Route path='product/add' element={<ProfileAddEdit />} />
            <Route path='product/edit' element={<ProfileAddEdit />} />


          {/* <Route path='' element={<ProfileAddEdit />} /> */}
        </Route>
      </Routes>
    </>
  )
}

export default Router