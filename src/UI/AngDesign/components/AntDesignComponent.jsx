import React, { useState } from 'react';
import { DatePicker, message, Alert, Button, Tooltip } from 'antd';
import { EditOutlined, SearchOutlined } from '@ant-design/icons';

function AntDesignComponent() {
  const [date, setDate] = useState(null);
  const handleChange = (value) => {
    message.info(
      `Selected Date: ${value ? value.format('YYYY-MM-DD') : 'None'}`
    );
    setDate(value);
  };
  return (
    <>
      <div style={{ width: 400, margin: '100px auto' }}>
        <DatePicker onChange={handleChange} />
        <div style={{ marginTop: 16 }}>
          <Alert
            message='Selected Date'
            description={date ? date.format('YYYY-MM-DD') : 'None'}
          />
        </div>
      </div>
      <div>
        <EditOutlined />
      </div>
      <div>
        <Tooltip title='search'>
          <Button type='primary' shape='circle' icon={<SearchOutlined />} />
        </Tooltip>
        <Button type='primary' shape='circle'>
          A
        </Button>
        <Button type='primary' icon={<SearchOutlined />}>
          Search
        </Button>
        <Tooltip title='search'>
          <Button shape='circle' icon={<SearchOutlined />} />
        </Tooltip>
        <Button icon={<SearchOutlined />}>Search</Button>
        <br />
        <Tooltip title='search'>
          <Button shape='circle' icon={<SearchOutlined />} />
        </Tooltip>
        <Button icon={<SearchOutlined />}>Search</Button>
        <Tooltip title='search'>
          <Button type='dashed' shape='circle' icon={<SearchOutlined />} />
        </Tooltip>
        <Button type='dashed' icon={<SearchOutlined />}>
          Search
        </Button>
        <Button icon={<SearchOutlined />} href='https://www.google.com' />
        <br />
        <br />
        <Tooltip title='search'>
          <Button
            type='primary'
            shape='circle'
            icon={<SearchOutlined />}
            size='large'
          />
        </Tooltip>
        <Button type='primary' shape='circle' size='large'>
          A
        </Button>
        <Button type='primary' icon={<SearchOutlined />} size='large'>
          Search
        </Button>
        <Tooltip title='search'>
          <Button shape='circle' icon={<SearchOutlined />} size='large' />
        </Tooltip>
        <Button icon={<SearchOutlined />} size='large'>
          Search
        </Button>
        <br />
        <Tooltip title='search'>
          <Button shape='circle' icon={<SearchOutlined />} size='large' />
        </Tooltip>
        <Button icon={<SearchOutlined />} size='large'>
          Search
        </Button>
        <Tooltip title='search'>
          <Button
            type='dashed'
            shape='circle'
            icon={<SearchOutlined />}
            size='large'
          />
        </Tooltip>
        <Button type='dashed' icon={<SearchOutlined />} size='large'>
          Search
        </Button>
        <Button
          icon={<SearchOutlined />}
          size='large'
          href='https://www.google.com'
        />
      </div>
    </>
  );
}

export default AntDesignComponent;
