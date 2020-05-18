import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import MainView from './components/mainView/mainView';


//todo stylus variables for shared themes


if (process.env.NODE_ENV !== 'production') {
       console.log('Looks like we are in development mode!');
     }else {
    //console.log('Looks like we are in production mode!');
}

ReactDOM.render(
    <MainView/> ,
    document.getElementById('root')
);