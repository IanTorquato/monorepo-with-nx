import { useEffect, useState } from 'react';

import { api } from '@monorepo-nx-silbeck-clear/axios-config';

export function Index() {
  const [returnedBack, setReturnedBack] = useState({}as any);

  useEffect(()=>{
    api.get('/').then((response=>setReturnedBack(response))).catch(console.error);
  }, []);

  return (
    <div>
      <br />

      <div style={{ textAlign:'center', marginTop: '40px'}}>
        <b style={{fontSize: '24px'}}> {returnedBack.data?.message} </b>
      </div>
    </div>
  );
}

export default Index;
