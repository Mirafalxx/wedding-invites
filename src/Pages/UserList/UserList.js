import { Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchUsers } from '../../api/usersApi';
import './styles.scss';
const columns = [
  {
    title: 'Имя',
    dataIndex: 'name',
    render: (_, record) => (
      <div>
        {record.firstName} {record.lastName}
      </div>
    ),
  },
  {
    title: 'Фамилия',
    dataIndex: 'address',
  },
  {
    title: 'Номер стола',
    dataIndex: 'table_number  ',
  },
  {
    title: 'Придет',
    dataIndex: 'age',
    render: (_, record) => <div>{record.age === 0 ? 'Нет' : 'Да'}</div>,
    sorter: (a, b) => a.age - b.age,
  },
];

const UserList = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);

  console.log(users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className={'users-list'}>
      <Table columns={columns} dataSource={[...users, ...users]} pagination={[...users, ...users].length > 10} />
    </div>
  );
};
export default UserList;
