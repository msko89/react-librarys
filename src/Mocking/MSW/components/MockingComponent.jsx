import React, { useState } from 'react';

const Item = ({ name, age }) => {
  return (
    <li>
      name: {name} / age: {age}
    </li>
  );
};

const url =
  'https://raw.githubusercontent.com/techoi/raw-data-api/main/simple-api.json';

function MockingComponent() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const handleClick = () => {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setData(json.data);
      })
      .catch((error) => {
        setError(error);
      });
  };

  const handleMocking = () => {
    fetch('./login')
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        console.log(JSON.stringify(json));
      });
  };

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <button onClick={handleClick}>데이터 가져오기</button>
      <button onClick={handleMocking}>데이터 Mocking</button>
      {data && (
        <ul>
          {data.people.map((person) => (
            <Item key={`${person.name}${person.age}`} {...person} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default MockingComponent;
