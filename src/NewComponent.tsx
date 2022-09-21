import React from "react";

type PropsType = {
    topCars: Array<NewComponentType>
}

type NewComponentType = {
    manufacturer: string,
    model: string
}

export const NewComponent = (props: PropsType) => {
    return (
        <ul>
            {props.topCars.map((el, index) =>
                <li>
                    <span>{el.model}</span>
                    <span>{el.manufacturer}</span>
                </li>)}
        </ul>
    )
}