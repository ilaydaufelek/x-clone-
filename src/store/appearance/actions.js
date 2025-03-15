import {  _setBackgroundColor, _setBorder, _setColor , _setFontSize, _setShadow } from ".";
import store from "..";
export const setBackgroundColor = (data)=>store.dispatch(_setBackgroundColor(data))
export const setColor = (data)=>store.dispatch(_setColor(data))
export const setFontSize =(data)=> store.dispatch(_setFontSize(data))
export const setBorder=(data)=>store.dispatch(_setBorder(data))
export const setShadow=(data)=>store.dispatch(_setShadow(data))
