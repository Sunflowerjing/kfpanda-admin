import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import type { TableProps } from 'antd';
import { fetchStatData } from '@/api/index';

interface DataType {
  key: string;
  name: string;
  num: string;
}



const columns: TableProps<DataType>['columns'] = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'num',
    dataIndex: 'num',
    key: 'num',
  },
];

const formatResult = (result: any): DataType[] => {
  return Object.entries(result).map(([name, num]) => ({ key: name, name, num: String(num) }));
};

const Service: React.FC = () => {
  const [data, setData] = useState<DataType[]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetchStatData();
        const formattedData = formatResult(result);
        setData(formattedData);
      } catch (error) {
        console.error('请求数据失败:', error);
      }
    };

    getData();
  }, []);

  return <Table<DataType> columns={columns} dataSource={data} pagination={false} />;
};

export default Service;