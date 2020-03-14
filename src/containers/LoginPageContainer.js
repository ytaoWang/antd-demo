import {connect} from 'react-redux';
import LoginPage from '../components/LoginPage';
import {onLogin, onLogout, onMenu1} from '../redux/actions';

/**
 * 
 * @param {*} state store对象
 * @param {*} ownProps 组件中props访问成员
 * @description 将store中的数据作为props绑定到组件上
 */
const mapStateToProps = (state, ownProps) => {
    return {
        //login作为props在组件中访问
        login: state.rxHandleUser,
        logout: state.rxHandleUser
    }
};

/**
 * 
 * @param {*} dispath 
 * @param {*} ownProps 
 * @description 将action作为props绑定到组件上
 */
const mapDispatchProps = (dispatch, ownProps) => {
    return {
        onLogin: (...args) => dispatch(onLogin(...args)),
        onLogout: (...args) => dispatch(onLogout(...args)),
        onMenu1:  (...args) => dispatch(onMenu1(...args)),
    };
};

const LoginPageContainer = connect(mapStateToProps, mapDispatchProps)(LoginPage);

export default LoginPageContainer;
