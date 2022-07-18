
//crear un middleware que cada vez que se dispre una acción, 
//yo pueda obtener la información de esa acción y 
//hacer un console log de la misma.

export const logger = (store) => (next) => (action) =>{
    console.log('action', action);
    next(action);
}

/** 
 * Middleware que genera un nuevo dato antes de que ,
 */

export const featuring = (store) => (next) => (actionInfo) => {
    //crear arrgelo modificado, tener todos los datos del api, 
    //pero agregar el que yo quiero primero
    const featured = [{name: 'Tapu Lele'}, ...actionInfo.action.payload];
    const updatedActionInfo = {
        ...actionInfo, 
        action:{...actionInfo.action, payload: featured},
    };
    next(updatedActionInfo);
}