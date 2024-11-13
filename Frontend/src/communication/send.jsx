import { allInfo, set_allInfo } from '../baseData/index';

export const emit_request = (socket) => {
    console.log(allInfo, 4);
    socket.emit('CLIENT_REQUEST', JSON.stringify(allInfo));
}