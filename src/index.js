import React from 'react';
import ReactDOM from 'react-dom';
import { CounterApp } from './components/01-useState/CounterApp';
import { CounterWithCustomHook } from './components/01-useState/CounterWithCustomHook';
import { SimpleForm } from './components/02-SimpleForm/SimpleForm';
import { HooksApp } from './HooksApp';
import {MainApp} from './components/09-useContext/MainApp';
import {FormWithCustomHook} from "./components/02-SimpleForm/FormWithCustomHook";
import MultipleCustomHooks from "./components/03-examples/MultipleCustomHooks";
import FocusScreen from "./components/04-useRef/FocusScreen";
import RealExampleRef from "./components/04-useRef/RealExampleRef";
import Memorize from "./components/06-memos/Memorize";
import MemoHook from "./components/06-memos/MemoHook";
import CallbackHook from "./components/06-memos/CallbackHook";
import TodoApp from "./components/08-useReducer/TodoApp";

ReactDOM.render(
    <MainApp/> ,
  document.getElementById('root')
);

