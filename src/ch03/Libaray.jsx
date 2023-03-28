import React from 'react';
import Book from './Book';


export default function Library(props){
    return(
        <div>
        <Book name = "처만Phython" numOfPage={300}></Book>
        <Book name = "처만AWS"  numOfPage={400}></Book>
        <Book name = "처만React"  numOfPage={500}></Book>
        </div>
    )
}