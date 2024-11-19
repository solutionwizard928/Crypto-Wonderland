
import io from 'socket.io-client';
// export const socket = io('http://localhost:5000');
// export const socket = io('http://192.168.145.30');

export const constant = {
    // socket :                                     io('http://localhost:5000'),
    USER_EVENT :                                 'USER_LOGIN',
    CLIENT_REQUEST :                             'CLIENT_REQUEST',
    USER_LOGIN_RESPONSE :                        'USER_LOGIN_RESPONSE',
    FORBIDDEN_USER :                             'FORBIDDEN_USER',
}