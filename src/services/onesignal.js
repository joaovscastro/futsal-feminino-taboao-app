import axios from 'axios';

const onesignalapi = axios.create({
  baseURL: 'https://onesignal.com/api/v1',
  headers: {
    Authorization: 'Basic M2Y0ZTc0YzAtZjM1MC00ZGVmLTk4Y2QtNjI1ODU3Njg4OWY3',
  },
});

export default onesignalapi;
