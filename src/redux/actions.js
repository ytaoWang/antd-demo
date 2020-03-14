/**
 * action 类型
 */

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export const MENU_1 = 'MENU_1';

export const onLogin = (flag) => ({type:LOGIN, data:flag});
export const onLogout = (flag) => ({type:LOGOUT, data:flag});
export const onMenu1 = (name) => ({type:MENU_1, data:name});