import React, { useContext } from 'react'
import { AuthContext } from '../context/Auth';
import axios from 'axios';
import { ErrorMsgContext } from '../context/ErrorMsg';
import { SuccessMsgContext } from '../context/SuccessMsg';

export default  function useInteractions() {
    const {auth} = useContext(AuthContext);
    const {setErrorMsg} = useContext(ErrorMsgContext);
    const {setSuccessMsg} = useContext(SuccessMsgContext);

    async function setInteractions(count,func,id){
      return await axios(
            `http://localhost/KolalaPic/public/${count}/${func}?id=${id}`,{
              headers:{
                tkn:auth
              },
              withCredentials:true
            }
          )
            .then((res) => {
              setSuccessMsg(res.data.success);
            return true;
            })
            .catch((res) => {
              setErrorMsg(res.response.data.error);
              // console.log(res)
              return false;
            });
    }
    return { setInteractions };
}
