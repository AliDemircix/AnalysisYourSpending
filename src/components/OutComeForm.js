import { Button, InputNumber } from 'antd';
import React, { useState } from 'react';
import AlertModal from './AlertModal';
import DatePickerComponent from './DatePickerComponent';
import { SelectOption } from './SelectOption';

const OutComeForm = ({outComes,setOutComes}) => {
    const [outCome, setOutCome] = useState({});
    const [isMarket, setIsMarket] = useState(false);
    const [visible, setVisible] = useState(false);

    // useEffect(()=>{
    //     console.log(outCome)
    // },[outCome])
    return <div>
         <AlertModal visible={visible} setVisible={setVisible} message="Successfully Added"></AlertModal>
        <InputNumber addonAfter="€" defaultValue={0} onChange={(e) => setOutCome({ ...outCome, amount: (e) })} />
        <SelectOption setOutCome={setOutCome} outCome={outCome} isMarket={isMarket} setIsMarket={setIsMarket} ></SelectOption>
        <DatePickerComponent setOutCome={setOutCome} outCome={outCome}></DatePickerComponent>
        <Button type="primary" className='addBtn' onClick={()=>{
            setOutComes([...outComes,outCome]);
            setIsMarket(false);
            setVisible(true);
            setTimeout(() =>
            {
                setVisible(false);
            }, 2000);
            
        }}>Add</Button>
       
    </div>
}


export default OutComeForm;