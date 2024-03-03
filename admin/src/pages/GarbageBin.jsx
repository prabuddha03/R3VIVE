import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import BinData from '../components/BinData';
import { orkesConductorClient, WorkflowExecutor } from '@io-orkes/conductor-javascript';

export const config = {
  keyId: '33257126-64c6-496d-a2bd-6d7ddb7463c0',
  keySecret: 'Z6CXVmIq2lNLCVerfBpo41NTzmzdqc0UdGaUmKFY7y9SRvfO',
  serverUrl: `https://play.orkes.io/api`,
};

const clientPromise = orkesConductorClient(config);

const GarbageBin = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const client = await clientPromise;
        const executor = new WorkflowExecutor(client);
        const bindataResponse = await executor.getExecution('b2252134-d900-11ee-90b3-4ed8b8ac3789');
        const dataArray = bindataResponse.output.response.body.data;
        setData(dataArray);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <main>
      <div className='flex h-screen'>
        <Sidebar />
        <div className='px-6'>
          <p className='text-3xl font-semibold pt-3 text-black/60 pb-6'>
            Garbage bin data of your area
          </p>
          <div className='grid grid-cols-5 bg-gray-200 text-gray-500 font-bold px-20 gap-32 p-4'>
            <p className='pl-14'>cart#</p>
            <p>Type of Bin</p>
            <p>Garbage amt.</p>
            <p className=''>Fill status</p>
            <p>Bin status</p>
          </div>
          <BinData data={data} />
        </div>
      </div>
    </main>
  );
};

export default GarbageBin;
