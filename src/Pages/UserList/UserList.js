import { Table } from "antd";
const columns = [
  {
    title: "Имя",
    dataIndex: "name",
  },
  {
    title: "Фамилия",
    dataIndex: "address",
  },
  {
    title: "Номер стола",
    dataIndex: "table_number  ",
  },
  {
    title: "Придет",
    dataIndex: "age",
    render: (_, record) => <div>{record.age === 0 ? "Нет" : "Да"}</div>,
    sorter: (a, b) => a.age - b.age,
  },
];
const data = [
  {
    key: "1",
    name: "John Brown",
    age: 0,
    address: "New York No. 1 Lake Park",
  },
  {
    key: "2",
    name: "Jim Green",
    age: 1,
    address: "London No. 1 Lake Park",
  },
  {
    key: "3",
    name: "Joe Black",
    age: 0,
    address: "Sydney No. 1 Lake Park",
  },
  {
    key: "4",
    name: "Jim Red",
    age: 1,
    address: "London No. 2 Lake Park",
  },
];

const UserList = () => <Table columns={columns} dataSource={data} pagination={data.length > 10} />;
export default UserList;
