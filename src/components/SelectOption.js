import { Select } from 'antd';
import React from 'react';
import { categories } from '../api/categories';
const { Option } = Select;


export const SelectOption = ({ setOutCome, outCome, setIsMarket, isMarket }) => {

    const handleChange = (value) => {
        if (value === "Market") {
            setIsMarket(true);
        }
        setOutCome({ ...outCome, category: value })
    };
    const handleMarketChange = (value) => {
        setOutCome({ ...outCome, category: "Market" })
    };

    return <>
        <Select
            defaultValue="Select"
            style={{
                width: 120,
            }}
            onChange={handleChange}
        >{categories && categories.map((c, id) => <Option key={id} value={c.name} name={c.name}>{c.name} </Option>)}

        </Select>
        {isMarket && <Select
            defaultValue="Select"
            style={{
                width: 120,
            }}
            onChange={handleMarketChange}>
            {categories.find(c => c.name === "Market").Market.map((m, id) => <Option key={id} value={m.name} name={m.name}>{m.name} </Option>)}
        </Select>}

    </>
};