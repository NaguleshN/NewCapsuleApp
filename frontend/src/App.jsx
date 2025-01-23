import React from 'react';
import { Container } from 'react-bootstrap';
import { Outlet, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import DigitalTimeCapsuleForm from './components/DigitalTimeCapsuleForm';
                                                                                                                                                                                                                                                                                                                                                                                                              

const App = () => {
  return (
    <>
      <Header />
      <ToastContainer />
      <Container className="my-2">
        <Routes>
          <Route path="/" element={<DigitalTimeCapsuleForm />} />
         
        </Routes>
        <Outlet />
      </Container>
    </>
  );
};

export default App;