import React, { useContext, useEffect, useState } from 'react';
import { Button, Select } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, updateUser } from '../../api/usersApi';
import { PopupContext } from '../../utils/ModalContenxt';
import './style.scss';
import { showNotification } from '../../components/notification/showNotification';

const { Option } = Select;

const TABLE_MOCK = [
  {
    value: 1,
    label: 'Стол-1',
  },
  {
    value: 2,
    label: 'Стол-2',
  },
  {
    value: 3,
    label: 'Стол-3',
  },
  {
    value: 4,
    label: 'Стол-4',
  },
  {
    value: 5,
    label: 'Стол-5',
  },
  {
    value: 6,
    label: 'Стол-6',
  },
];

const CHAIR_MOCK = [
  {
    value: 1,
    label: 'Стул-1',
  },
  {
    value: 2,
    label: 'Стул-2',
  },
  {
    value: 3,
    label: 'Стул-3',
  },
  {
    value: 4,
    label: 'Стул-4',
  },
  {
    value: 5,
    label: 'Стул-5',
  },
  {
    value: 6,
    label: 'Стул-6',
  },
  {
    value: 7,
    label: 'Стул-7',
  },
  {
    value: 8,
    label: 'Стул-8',
  },
  {
    value: 9,
    label: 'Стул-9',
  },
  {
    value: 10,
    label: 'Стул-10',
  },
  {
    value: 11,
    label: 'Стул-11',
  },
  {
    value: 12,
    label: 'Стул-12',
  },
];

const InviteUsers = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const loading = useSelector((state) => state.users.loading);
  const [inputs, setInputs] = useState([{ table: null, chair: null }]);

  const [currentUser, setCurrentUser] = useState(null);
  const { setLoading } = useContext(PopupContext);

  useEffect(() => {
    if (!loading) setLoading(false);
  }, [loading, setLoading]);

  const resetStates = () => {
    setCurrentUser(null);
    setInputs([{ table: null, chair: null }]);
  };

  const addInput = () => {
    setInputs([...inputs, { table: null, chair: null }]);
  };

  const handleInputChange = (index, key, value) => {
    const updatedInputs = [...inputs];
    updatedInputs[index][key] = value;
    setInputs(updatedInputs);
  };

  function calculateChairNumber(table, chair) {
    if (table < 1 || table > 6 || chair < 1 || chair > 12) {
      showNotification('error', 'Недопустимые значения для стола или стула.', 'Рассадка');
      return;
    }
    const totalChairsPerTable = 12;
    return (table - 1) * totalChairsPerTable + chair;
  }
  const handleInviteUser = () => {
    const user = {
      id: Number(currentUser),
      seats: inputs.map((item) => calculateChairNumber(item.table, item.chair)),
    };

    let response = dispatch(updateUser({ ...user }));
    response.then((res) => {
      if (res.payload) {
        resetStates();
      }
    });
  };

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className="invite-user__container">
      <div className="add-user__wrapper">
        <Select placeholder="Выберите Человека" size="large" allowClear onChange={(e) => setCurrentUser(e)} value={currentUser}>
          {users && (
            <>
              {users?.map((user) => {
                return <Option key={user.id}>{`${user.firstName} ${user.lastName}`}</Option>;
              })}
            </>
          )}
        </Select>

        {inputs.map((input, index) => {
          return (
            <>
              <p>Место для человека</p>
              <Select
                placeholder="Выберите Стол"
                size="large"
                allowClear
                options={TABLE_MOCK}
                value={input.table}
                onChange={(e) => handleInputChange(index, 'table', e)}
              />

              <Select
                placeholder="Выберите Стул"
                size="large"
                allowClear
                value={input.chair}
                options={CHAIR_MOCK}
                onChange={(e) => handleInputChange(index, 'chair', e)}
              />
            </>
          );
        })}
        <Button size="large" color="primary" style={{ maxWidth: 350 }} onClick={addInput}>
          Добавить еще место для семьи
        </Button>
        <Button size="large" color="primary" style={{ maxWidth: 350 }} onClick={handleInviteUser}>
          Пригласить
        </Button>
      </div>
    </div>
  );
};

export default InviteUsers;
