import { message } from 'antd';
import axios from 'libs/axios';
import { RequestMethods } from 'models/Common';
import { useState } from 'react';

interface Params {
  onCompleted?: Function;
}

const useMutation = (params?: Params) => {
  const [loading, setLoading] = useState(false);

  const doRequest = (url: string, body: any, config: { method: RequestMethods }) => {
    setLoading(true);

    axios[config.method](url, body)
      .then((res: any) => {
        params.onCompleted(res.data.data);
      })
      .catch((err: any) => {
        let msg: string;
        try {
          msg = err.response.data.message;
        } catch (e) {
          msg = 'Something went wrong';
        }
        message.error(msg);
      })
      .finally(() => setLoading(false));
  };

  return { doRequest, loading } as const;
};

export default useMutation;
