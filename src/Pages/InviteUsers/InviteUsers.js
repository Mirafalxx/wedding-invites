import React, { useState } from "react";
import { Button, Select } from "antd";
import { showNotification } from "../../components/notification/showNotification";
import "./style.scss";

const USERS_MOCK = [
  {
    value: 1,
    label: "Максим Суханов",
  },
  {
    value: 2,
    label: "Эмиль Алимбеков",
  },
  {
    value: 3,
    label: "Эльдар Джакыпов",
  },
  {
    value: 4,
    label: "Валлая Балалай",
  },
];

const TABLE_MOCK = [
  {
    value: 1,
    label: "Стол-1",
  },
  {
    value: 2,
    label: "Стол-2",
  },
  {
    value: 3,
    label: "Стол-3",
  },
  {
    value: 4,
    label: "Стол-4",
  },
  {
    value: 5,
    label: "Стол-5",
  },
  {
    value: 6,
    label: "Стол-6",
  },
];

const CHAIR_MOCK = [
  {
    value: 1,
    label: "Стул-1",
  },
  {
    value: 2,
    label: "Стул-2",
  },
  {
    value: 3,
    label: "Стул-3",
  },
  {
    value: 4,
    label: "Стул-4",
  },
  {
    value: 5,
    label: "Стул-5",
  },
  {
    value: 6,
    label: "Стул-6",
  },
  {
    value: 7,
    label: "Стул-7",
  },
  {
    value: 8,
    label: "Стул-8",
  },
  {
    value: 9,
    label: "Стул-9",
  },
  {
    value: 10,
    label: "Стул-10",
  },
  {
    value: 11,
    label: "Стул-11",
  },
  {
    value: 12,
    label: "Стул-12",
  },
];

const InviteUsers = () => {
  const [invitedUser, setInvitedUser] = useState(null);
  const [chair, setChair] = useState(null);
  const [table, setTable] = useState(null);
  const [url, setUrl] = useState(null);

  const resetStates = () => {
    setInvitedUser(null);
    setChair(null);
    setTable(null);
  };

  const copyToClipBoard = async () => {
    await navigator.clipboard.writeText(url).then(() => {
      showNotification("success", "Ссылка скопирована !");
      resetStates();
    });
  };

  const handleInviteUser = () => {
    const user = {
      id: invitedUser,
      chair,
      table,
    };
    setTimeout(() => {
      setUrl(`http://localhost:3000/?id=${134}`);
      console.log(user);
    }, 1000);
  };

  return (
    <div className="invite-user__container">
      <Select
        placeholder="Выберите персону"
        size="large"
        style={{ width: 350 }}
        allowClear
        options={USERS_MOCK}
        onChange={(e) => {
          setInvitedUser(e);
        }}
      />
      <Select
        placeholder="Выберите Стол"
        size="large"
        style={{ width: 350 }}
        allowClear
        options={TABLE_MOCK}
        onChange={(e) => {
          setTable(e);
        }}
      />

      <Select
        placeholder="Выберите Стул"
        size="large"
        style={{ width: 350 }}
        allowClear
        options={CHAIR_MOCK}
        onChange={(e) => {
          setChair(e);
        }}
      />
      <Button size="large" color="primary" style={{ width: 350 }} onClick={handleInviteUser}>
        Пригласить
      </Button>

      {url && (
        <Button onClick={copyToClipBoard} style={{ width: 350 }}>
          Копировать ссылку
        </Button>
      )}
    </div>
  );
};

export default InviteUsers;
