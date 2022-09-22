import React from "react";

type PropsType = {
    currentMoney: Array<any>
    onClickFilterHandler: any
}

export const FilteredMoneyComponent = (props: PropsType) => {
    return (
        <div>
            <ul>
                {props.currentMoney.map((objFromMoneyArr, index) =>
                    <li key={index}>
                        <span>{objFromMoneyArr.banknots}</span>
                        <span>{objFromMoneyArr.value}</span>
                        <span>{objFromMoneyArr.number}</span>
                    </li>
                )}
            </ul>
            <button onClick={() => props.onClickFilterHandler('all')}>all</button>
            <button onClick={() => props.onClickFilterHandler('RUBLS')}>RUBLS</button>
            <button onClick={() => props.onClickFilterHandler('Dollars')}>Dollars</button>
        </div>
    );
};
