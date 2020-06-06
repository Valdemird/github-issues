import {getElement, get} from '../drivers/graphql-client';

export const testing = (value) => {
    return new Promise(async (resolve,reject) => {
        setTimeout(() => {
            resolve(value)
        }, 320);
    })
}

export const getAutoComplete =() => {

}