
import baseData from '../baseData/index';
import { allInfo, set_allInfo } from '../baseData/index';
import { socket } from '../baseData/globalData';
import { emit_request } from '../communication/send';

export const sendController = (data) => {
    console.log(data,socket, 5)
    set_allInfo(data);
    emit_request(socket);
}