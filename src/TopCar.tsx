import React from "react";

type PropsType = {
    topCars: Array<NewComponentType>
}

type NewComponentType = {
    manufacturer: string,
    model: string
}

export const TopCar = (props: PropsType) => {
    return (
        <ul>
            {props.topCars.map((el, index) =>
                <li key={index}>
                    <span>{el.model}</span>
                    <span>{el.manufacturer}</span>
                </li>)}
        </ul>
    )
}