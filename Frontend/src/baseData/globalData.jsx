
import io from 'socket.io-client';
export const socket = io('http://localhost:5000');
// export const socket = io('http://192.168.145.30');

export const constant = {
    USER_EVENT : "USER_LOGIN",
}