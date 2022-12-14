import React from 'react';
import './App.css';
import {Todolist} from './Todolist';
import {TopCar} from "./TopCar";
import {Counter} from "./counter";
import {FilteredMoney} from "./FilteredMoney";


function App() {

    const tasks1 = [
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "ReactJS", isDone: false}
    ]
    const tasks2 = [
        {id: 1, title: "Hello world", isDone: true},
        {id: 2, title: "I am Happy", isDone: false},
        {id: 3, title: "Yo", isDone: false}
    ]

    const topCars = [
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'}
    ]

    return (
        <div className="App">
            <Todolist title="What to learn" tasks={tasks1}/>
            <Todolist title="Songs" tasks={tasks2}/>
            <div>
                <TopCar topCars={topCars}/>
            </div>
            <div>
                <Counter/>
            </div>
            <div>
                <FilteredMoney/>
            </div>
        </div>
    );
}

export default App;
