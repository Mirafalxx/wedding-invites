import React, { useEffect, useState, useContext, useMemo, useCallback } from 'react';
import { Button, Modal, Table, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { createUser, deleteUser, fetchUsers, updateUser } from '../../api/usersApi';
import { UserOutlined } from '@ant-design/icons';
import Qrcode from '../../components/QRCODE';
import { PopupContext } from '../../utils/ModalContenxt';
import InviteUsers from '../InviteUsers/InviteUsers';
import './styles.scss';

const UserList = () => {
  const dispatch = useDispatch();
  const usersStore = useSelector((state) => state.users.users);
  const loading = useSelector((state) => state.users.loading);
  const [show, setShow] = useState(false);
  const [showQ, setShowQ] = useState(false);
  const [showLocation, setShowLocation] = useState(false);
  const [showEdit, setShowEdit] = useState(false);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const [firstNameEdit, setFirstNameEdit] = useState('');
  const [lastNameEdit, setLastNameEdit] = useState('');
  const [currentUser, setCurrentUser] = useState('');

  const { setLoading } = useContext(PopupContext);

  const users = useMemo(() => {
    return [...usersStore].sort((a, b) => a.firstName.localeCompare(b.firstName));
  }, [usersStore]);

  useEffect(() => {
    if (!loading) setLoading(false);
  }, [loading, setLoading]);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleCancel = () => {
    setShow(false);
  };

  const handleCancelEdit = () => {
    setShowEdit(false);
    setCurrentUser('');
    setFirstNameEdit('');
    setLastNameEdit('');
  };

  const handleOk = async () => {
    const response = await dispatch(
      createUser({
        firstName,
        lastName,
        email: '',
        password: '1234',
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

  const handleOkEdit = useCallback(async () => {
    const response = await dispatch(updateUser({ id: currentUser, firstName: firstNameEdit, lastName: lastNameEdit }));

    if (response?.payload) {
      handleCancelEdit();
      dispatch(fetchUsers());
    }
  }, [currentUser, firstNameEdit, lastNameEdit, dispatch]);

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

  const handleFirstNameChangeEdit = (e) => {
    setFirstNameEdit(e.target.value);
  };

  const handleLastNameChangeEdit = (e) => {
    setLastNameEdit(e.target.value);
  };

  const editHandler = (record) => {
    setFirstNameEdit(record.firstName);
    setLastNameEdit(record.lastName);
    setCurrentUser(record.id);
    setShowEdit(true);
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
            <div>Номер стола: {Math.ceil(item / 12)}</div>
          ))}
        </div>
      ),
    },
    {
      title: 'Активность',
      dataIndex: 'table_number',
      render: (_, record) => (
        <div className="table__action">
          <button onClick={() => removeHandler(record.id)} className="admin__btn-table">
            Удалить
          </button>

          <button onClick={() => editHandler(record)} className="admin__btn-table-edit">
            Редактировать
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="users">
      <div className="users__header">
        <button className="admin__btn" onClick={() => setShow(true)}>
          Добавить Пользователя
        </button>

        <button className="admin__btn" onClick={() => setShowLocation(true)}>
          Посадить пользователя
        </button>
        <button className="admin__btn" onClick={() => setShowQ(true)}>
          Показать QR CODE
        </button>
      </div>
      <div className="users-list">
        <Table columns={columns} dataSource={users} pagination={users.length > 10} scroll={{ x: 1300 }} />
      </div>
      <Modal title="Добавление гостя" footer={null} visible={show} onOk={handleOk} onCancel={handleCancel} className="modal">
        <div className="modal__body">
          <Input size="large" placeholder="Имя" prefix={<UserOutlined />} value={firstName} onChange={handleFirstNameChange} />
          <Input size="large" placeholder="Фамилия" prefix={<UserOutlined />} value={lastName} onChange={handleLastNameChange} />
        </div>
        <div className="modal__footer">
          <Button onClick={handleCancel}>Назад</Button>
          <Button onClick={handleOk}>ОК</Button>
        </div>
      </Modal>

      <Modal title="Редактирования гостя" footer={null} visible={showEdit} onCancel={handleCancelEdit} className="modal">
        <div className="modal__body">
          <Input
            size="large"
            placeholder="Имя"
            prefix={<UserOutlined />}
            value={firstNameEdit}
            onChange={handleFirstNameChangeEdit}
          />
          <Input
            size="large"
            placeholder="Фамилия"
            prefix={<UserOutlined />}
            value={lastNameEdit}
            onChange={handleLastNameChangeEdit}
          />
        </div>
        <div className="modal__footer">
          <Button onClick={handleCancelEdit}>Назад</Button>
          <Button onClick={handleOkEdit}>ОК</Button>
        </div>
      </Modal>

      <Modal
        title="QR CODE"
        footer={null}
        visible={showQ}
        onOk={() => setShowQ(false)}
        onCancel={() => setShowQ(false)}
        className="modal"
      >
        <Qrcode />
      </Modal>

      <Modal
        title="Выбрать место рассадки"
        footer={null}
        visible={showLocation}
        onCancel={() => setShowLocation(false)}
        className="modal"
      >
        {showLocation && <InviteUsers />}
      </Modal>
    </div>
  );
};

export default UserList;
