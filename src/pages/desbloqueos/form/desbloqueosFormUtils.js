import axios from 'axios';

// eslint-disable-next-line max-len
export const formatForOptions = (rawOptions) => rawOptions?.map((option) => ({ value: option.drSimID, text: option.name }));

export const countries = () => {
  const URL = 'https://2pr78ypovg.execute-api.us-east-1.amazonaws.com/items';

  axios.get(URL)
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((error) => error.data);
};

export const networks = () => {
  const URL = 'https://omb7k0gyvj.execute-api.us-east-1.amazonaws.com/items';

  axios.get(URL)
    .then((response) => response.data)
    .catch((error) => error.data);
};

export const brands = () => {
  const URL = 'https://mbt0pse1f1.execute-api.us-east-1.amazonaws.com/items';

  axios.get(URL)
    .then((response) => response.data)
    .catch((error) => error.data);
};

export const devices = () => {
  const URL = 'https://t4q0kvdhu4.execute-api.us-east-1.amazonaws.com/items';

  axios.get(URL)
    .then((response) => response.data)
    .catch((error) => error.data);
};

export const tools = [
  {
    id: '40',
    name: 'Samsung - USA Standard Service',
    desc: 'Our Standard Service scans LOCAL databases and is our low-cost solution with a very high success rate.If your unlocking code is unavailable after scanning LOCAL databases, we will issue you a full refund so you can use our Premium Service which scans databases located WORLDWIDE and guarantees the availability of your unlocking code. IMPORTANT! If your Samsung phone has received technical support or you have tried to unlock it without success in the past, make your request directly through our Premium Service. Valid for all Samsung models.',
  },
  {
    id: '41',
    name: 'Samsung - USA Standard Service 1',
    desc: '1 Our Standard Service scans LOCAL databases and is our low-cost solution with a very high success rate.If your unlocking code is unavailable after scanning LOCAL databases, we will issue you a full refund so you can use our Premium Service which scans databases located WORLDWIDE and guarantees the availability of your unlocking code. IMPORTANT! If your Samsung phone has received technical support or you have tried to unlock it without success in the past, make your request directly through our Premium Service. Valid for all Samsung models.',
  },
  {
    id: '42',
    name: 'Samsung - USA Standard Service 2',
    desc: '2 Our Standard Service scans LOCAL databases and is our low-cost solution with a very high success rate.If your unlocking code is unavailable after scanning LOCAL databases, we will issue you a full refund so you can use our Premium Service which scans databases located WORLDWIDE and guarantees the availability of your unlocking code. IMPORTANT! If your Samsung phone has received technical support or you have tried to unlock it without success in the past, make your request directly through our Premium Service. Valid for all Samsung models.',
  },
  {
    id: '43',
    name: 'Samsung - USA Standard Service 3',
    desc: '3 Our Standard Service scans LOCAL databases and is our low-cost solution with a very high success rate.If your unlocking code is unavailable after scanning LOCAL databases, we will issue you a full refund so you can use our Premium Service which scans databases located WORLDWIDE and guarantees the availability of your unlocking code. IMPORTANT! If your Samsung phone has received technical support or you have tried to unlock it without success in the past, make your request directly through our Premium Service. Valid for all Samsung models.',
  },
];