import React, { useEffect, useState, useContext } from 'react';
import { Button, Modal, Table, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { createUser, deleteUser, fetchUsers } from '../../api/usersApi';
import './styles.scss';
import { UserOutlined } from '@ant-design/icons';
import Qrcode from '../../components/QRCODE';
import { PopupContext } from '../../utils/ModalContenxt';

const UserList = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const loading = useSelector((state) => state.users.loading);
  const [show, setShow] = useState(false);
  const [showQ, setShowQ] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setLoading } = useContext(PopupContext);

  useEffect(() => {
    if (!loading) setLoading(false);
  }, [loading, setLoading]);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleCancel = () => {
    setShow(false);
  };

  const handleOk = async () => {
    const response = await dispatch(
      createUser({
        firstName,
        lastName,
        email,
        password,
        drinks: '',
        isAdmin: null,
        seats: [],
        isVisit: false,
      })
    );

    if (response?.payload) {
      setShow(false);
      dispatch(fetchUsers());
    }
  };

  const removeHandler = async (id) => {
    const response = await dispatch(deleteUser(id));

    if (response?.payload) {
      dispatch(fetchUsers());
    }
  };

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const columns = [
    {
      title: 'Фамилия Имя',
      dataIndex: 'name',
      render: (_, record) => (
        <div>
          {record.firstName} {record.lastName}
        </div>
      ),
    },
    {
      title: 'Придет не придет',
      dataIndex: 'name',
      render: (_, record) => <div>{record.isVisit ? 'Придет' : 'Не придет'}</div>,
      sorter: (a, b) => a.isVisit.length - b.isVisit.length,
    },

    {
      title: 'Выпивка',
      dataIndex: 'drinks',
    },

    {
      title: 'Номер стола',
      dataIndex: 'table_number',
      render: (_, record) => (
        <div>
          {record.seats.map((item) => (
            <div>Номер стула: {item}</div>
          ))}
        </div>
      ),
    },
    {
      title: 'Придет',
      dataIndex: 'age',
      render: (_, record) => <div>{record.age === 0 ? 'Нет' : 'Да'}</div>,
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: 'Активность',
      dataIndex: 'table_number',
      render: (_, record) => (
        <button onClick={() => removeHandler(record.id)} className="admin__btn-table">
          Удалить
        </button>
      ),
    },
  ];

  return (
    <div className="users">
      <div className="users__header">
        <button className="admin__btn" onClick={() => setShow(true)}>
          Добавить Пользователя
        </button>
        <button className="admin__btn" onClick={() => setShowQ(true)}>Показать QR CODE</button>
      </div>
      <div className="users-list">
        <Table columns={columns} dataSource={users} pagination={users.length > 10} scroll={{ x: 1300 }} />
      </div>
      <Modal title="Добавление гостя" footer={null} visible={show} onOk={handleOk} onCancel={handleCancel} className="modal">
        <div className="modal__body">
          <Input size="large" placeholder="Имя" prefix={<UserOutlined />} value={firstName} onChange={handleFirstNameChange} />
          <Input size="large" placeholder="Фамилия" prefix={<UserOutlined />} value={lastName} onChange={handleLastNameChange} />
          <Input size="large" placeholder="Email" prefix={<UserOutlined />} value={email} onChange={handleEmailChange} />
          <Input size="large" placeholder="Пароль" prefix={<UserOutlined />} type="password" value={password} onChange={handlePasswordChange} />
        </div>
        <div className="modal__footer">
          <Button onClick={handleCancel}>Назад</Button>
          <Button onClick={handleOk}>ОК</Button>
        </div>
      </Modal>
      <Modal title="QR CODE" footer={null} visible={showQ} onOk={() => setShowQ(false)} onCancel={() => setShowQ(false)} className="modal">
        <Qrcode />
      </Modal>
    </div>
  );
};

export default UserList;
