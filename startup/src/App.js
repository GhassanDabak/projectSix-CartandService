import './App.css';
import { useState } from 'react';
import { Route, Routes } from "react-router-dom";
import NavBar from './components/navbar/navbar';
import HomePage from './pages/homepage/homepage';
import Footer from './components/footer/footer';
import LoginPage from "./pages/login-page/login-page"
import RegisterPage from "./pages/register-page/register-page"
import BooksPage from './pages/books-page/books-page';
import TeachersPage from './pages/teachers-page/teachers-page';
import DetailedBook from './components/detailed-book/detailed-book';
import books from './data/books/books';
import teachers from './data/teachers/teachers';
import DetailedTeacher from './components/detailed-teacher/detailed-teacher';
import CartPage from './pages/cart-page/cart-page';
import CheckoutPage from './pages/checkout-page/checkout-page';
import Userprofile from './pages/user-profile/user-profile';


function App() {
  const [loggedUser,setLoggedUser] = useState(JSON.parse(localStorage.getItem("loggedUser")));

  return (
    <div className="App">
     <NavBar loggedUser={loggedUser} setLoggedUser={setLoggedUser}/>
     <Routes>
     <Route exact path="/" element={<HomePage />} />
     <Route exact path="/login" element={<LoginPage setLoggedUser={setLoggedUser} />} />
     <Route exact path="/register" element={<RegisterPage setLoggedUser={setLoggedUser} />} />
     <Route exact path="/books" element={<BooksPage />} />
     <Route exact path="/teachers" element={<TeachersPage />} />
     <Route exact path="/books/:title" element={<DetailedBook games={books} setLoggedUser={setLoggedUser}/>} />
     <Route exact path="/teachers/:title" element={<DetailedTeacher rooms={teachers}/>} />
     <Route exact path="/cart" element={<CartPage setLoggedUser={setLoggedUser} />} />
     <Route exact path="/checkout" element={<CheckoutPage setLoggedUser={setLoggedUser} />} />
     <Route exact path="/profile" element={<Userprofile setLoggedUser={setLoggedUser} loggedUser={loggedUser} />} />
     </Routes>
     <Footer />
    </div>
  );
}

export default App;
