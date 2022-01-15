import axios from 'axios';
import React from 'react';
import useSWR from 'swr';

const fetcher = (...args) => axios.get(...args).then((res) => res.data);

function useUser(id) {
  const { data, error } = useSWR(`/api/user/${id}`, fetcher);

  return {
    user: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export default function Profile() {
  const { user, isLoading, isError } = useUser(123);

  if (isError) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  // 데이터 렌더링
  return (
    <>
      <div>hello {user.name}!</div>
      <Avatar id={123} />
    </>
  );
}

export function Avatar({ id }) {
  const { user, isLoading, isError } = useUser(id);

  if (isError) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  // 데이터 렌더링
  return <div>hello {user.name}! (Avatar)</div>;
}
