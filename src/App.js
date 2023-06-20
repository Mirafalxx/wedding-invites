import React from 'react';
import Layout from './components/Layout/Layout';
import AcceptInvite from './Pages/AcceptInvite/AcceptInvite';
import InviteUsers from './Pages/InviteUsers/InviteUsers';
import UserList from './Pages/UserList/UserList';
import { Route, Routes } from 'react-router-dom';
import Gallery from './Pages/Gallery/Gallery';
import './App.scss';

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AcceptInvite />} />
        <Route path="/invite-users" element={<InviteUsers />} />
        <Route path="/user-list" element={<UserList />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/gallery/:id" element={<Gallery />} />

      </Routes>
    </Layout>
  );
};

export default App;
