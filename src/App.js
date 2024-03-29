import React, { useState } from 'react';
import Layout from './components/Layout/Layout';
import AcceptInvite from './Pages/AcceptInvite/AcceptInvite';
import InviteUsers from './Pages/InviteUsers/InviteUsers';
import UserList from './Pages/UserList/UserList';
import { Route, Routes } from 'react-router-dom';
import Gallery from './Pages/Gallery/Gallery';
import './App.scss';
import { PopupContextProvider } from './utils/ModalContenxt';
import Spinner from './components/Spinner/Spinner';
import LocalStorage from './Pages/LocalStorage/LocalStorage';

const App = () => {
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(true);

  return (
    <PopupContextProvider modal={modal} setModal={setModal} setLoading={setLoading}>
      <Layout>
        <Routes>
          <Route path="/" element={<AcceptInvite />} />
          <Route path="/invite-users" element={<InviteUsers />} />
          <Route path="/user-list" element={<UserList />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/gallery/:id" element={<Gallery />} />
          <Route path="/store" element={<LocalStorage />} />
        </Routes>
      </Layout>
      <></>
      {loading && <Spinner />}
    </PopupContextProvider>
  );
};

export default App;
