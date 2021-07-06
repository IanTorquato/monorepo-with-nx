import { useState } from "react";

export function Index() {
  const [returnedBack, setReturnedBack] = useState({message: 'Temporário'});

  // useEffect(()=>{
    // api
  // },[]);

  return (
    <div>
      <br />

      <div style={{ textAlign:'center', marginTop: '40px'}}>
        <b style={{fontSize: '24px'}}> {returnedBack.message} </b>
      </div>
    </div>
  );
}

export default Index;
