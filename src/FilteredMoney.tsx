import React, {useState} from 'react';
import {FilteredMoneyComponent} from "./FilteredMoneyComponent";

export type FilterValuesType = 'all' | 'RUBLS' | 'Dollars'

export const FilteredMoney = () => {
    const [money, setMoney] = useState([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
    ])

    let [filterMoney, setFilterMoney] = useState('all')

    let currentMoney = money

    const onClickFilterHandler = (nameButton: FilterValuesType) => {
        setFilterMoney(nameButton)
    }

    if (filterMoney !== 'all') {
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknots === filterMoney)
    }

    return (
        <>
            <FilteredMoneyComponent currentMoney={currentMoney} onClickFilterHandler={onClickFilterHandler}/>
        </>

    );
};
