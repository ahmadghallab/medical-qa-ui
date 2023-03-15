import React from 'react';
import NotAuthorized from './NotAuthorized';
import ServerError from './ServerError';

const Error: React.FC<{ error: any }> = ({ error }) => {
  try {
    switch (error.response.status) {
      case 401:
      case 403:
        return <NotAuthorized />;
      case 404:
        return <ServerError message='Not available' />;
      case 500:
        return <ServerError message='Server error' />;
      default:
        return <ServerError message={error.response.data.message} />;
    }
  } catch (e) {
    return <ServerError message='Network or connection error' />;
  }
};

export default Error;
