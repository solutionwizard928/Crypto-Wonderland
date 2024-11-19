
import baseData from '../baseData/index';
import { set_allInfo } from '../baseData/index';
import { emit_request } from '../communication/communicate';

export const sendController = (data) => {
    set_allInfo(data);
    emit_request();
}