import React, { useState, useContext, useEffect } from 'react';
import { Button, Input, Select } from 'antd';
import { showNotification } from '../../components/notification/showNotification';
import { useDispatch, useSelector } from 'react-redux';
import { createUser, fetchUsers, updateUser } from '../../api/usersApi';
import { PopupContext } from '../../utils/ModalContenxt';
import './style.scss';
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
  const [chair, setChair] = useState(null);
  const [table, setTable] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const { setLoading } = useContext(PopupContext);

  useEffect(() => {
    if (!loading) setLoading(false);
  }, [loading, setLoading]);

  const resetStates = () => {
    setChair(null);
    setTable(null);
    setCurrentUser(null);
  };

  // const copyToClipBoard = async () => {
  //   await navigator.clipboard.writeText(url).then(() => {
  //     showNotification('success', 'Ссылка скопирована !');
  //   });
  // };

  function calculateChairNumber(table, chair) {
    if (table < 1 || table > 6 || chair < 1 || chair > 12) {
      return 'Недопустимые значения для стола или стула.';
    }

    const totalChairsPerTable = 12;
    const chairNumber = (table - 1) * totalChairsPerTable + chair;
    return chairNumber;
  }
  const handleInviteUser = () => {
    const user = {
      id: Number(currentUser),
      seats: [calculateChairNumber(table, chair)],
    };

    let response = dispatch(updateUser({ ...user }));
    response.then((res) => {
      console.log(res);
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
        {/* <Input size="large" value={firstName} placeholder="Имя" onChange={(e) => setFirstName(e.target.value)} style={{ width: 350 }} /> */}
        {/* <Input size="large" value={lastName} placeholder="Фамилия" onChange={(e) => setLastName(e.target.value)} style={{ width: 350 }} /> */}

        <Select placeholder="Выберите Человека" size="large" style={{ width: 350 }} allowClear onChange={(e) => setCurrentUser(e)} value={currentUser}>
          {users && (
            <>
              {users?.map((user) => {
                return <Option key={user.id}>{`${user.firstName} ${user.lastName}`}</Option>;
              })}
            </>
          )}
        </Select>
        <Select
          placeholder="Выберите Стол"
          size="large"
          style={{ width: 350 }}
          allowClear
          options={TABLE_MOCK}
          value={table}
          onChange={(e) => {
            setTable(e);
          }}
        />

        <Select
          placeholder="Выберите Стул"
          size="large"
          style={{ width: 350 }}
          allowClear
          value={chair}
          options={CHAIR_MOCK}
          onChange={(e) => {
            setChair(e);
          }}
        />
        <Button size="large" color="primary" style={{ width: 350 }} onClick={handleInviteUser}>
          Пригласить
        </Button>

        {/* {url && (
          <Button onClick={copyToClipBoard} style={{ width: 350 }}>
            Копировать ссылку
          </Button>
        )} */}
      </div>
      {/* <div className="display-place__wrapper">
        <div className="main-table__wrapper">
          <div className="main-table">
            <div className="char">1</div>
            <div className="char">2</div>
            <div className="char">3</div>
            <div className="char">4</div>
          </div>
        </div>
        <div className="secondary-tables__wrapper">
          <div className="secondary-table">
            <div className="char">1</div>
            <div className="char">2</div>
            <div className="char">3</div>
            <div className="char">4</div>
            <div className="char">5</div>
            <div className="char">6</div>
            <div className="char">7</div>
            <div className="char">8</div>
            <div className="char">9</div>
            <div className="char">10</div>
            <div className="char">11</div>
            <div className="char">12</div>
          </div>
          <div className="secondary-table">
            <div className="char">1</div>
            <div className="char">2</div>
            <div className="char">3</div>
            <div className="char">4</div>
            <div className="char">5</div>
            <div className="char">6</div>
            <div className="char">7</div>
            <div className="char">8</div>
            <div className="char">9</div>
            <div className="char">10</div>
            <div className="char">11</div>
            <div className="char">12</div>
          </div>
        </div>
        <div className="secondary-tables__wrapper">
          <div className="secondary-table">
            <div className="char">1</div>
            <div className="char">2</div>
            <div className="char">3</div>
            <div className="char">4</div>
            <div className="char">5</div>
            <div className="char">6</div>
            <div className="char">7</div>
            <div className="char">8</div>
            <div className="char">9</div>
            <div className="char">10</div>
            <div className="char">11</div>
            <div className="char">12</div>
          </div>
          <div className="secondary-table">
            <div className="char">1</div>
            <div className="char">2</div>
            <div className="char">3</div>
            <div className="char">4</div>
            <div className="char">5</div>
            <div className="char">6</div>
            <div className="char">7</div>
            <div className="char">8</div>
            <div className="char">9</div>
            <div className="char">10</div>
            <div className="char">11</div>
            <div className="char">12</div>
          </div>
        </div>
        <div className="secondary-tables__wrapper">
          <div className="secondary-table">
            <div className="char">1</div>
            <div className="char">2</div>
            <div className="char">3</div>
            <div className="char">4</div>
            <div className="char">5</div>
            <div className="char">6</div>
            <div className="char">7</div>
            <div className="char">8</div>
            <div className="char">9</div>
            <div className="char">10</div>
            <div className="char">11</div>
            <div className="char">12</div>
          </div>
          <div className="secondary-table">
            <div className="char">1</div>
            <div className="char">2</div>
            <div className="char">3</div>
            <div className="char">4</div>
            <div className="char">5</div>
            <div className="char">6</div>
            <div className="char">7</div>
            <div className="char">8</div>
            <div className="char">9</div>
            <div className="char">10</div>
            <div className="char">11</div>
            <div className="char">12</div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default InviteUsers;
