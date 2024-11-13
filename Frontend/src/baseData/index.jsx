import { constant } from "./globalData";

export var allInfo = {
    event : '',
    users : [],
};

export const set_allInfo = (data) => {
    console.log(data, 8 , 'baseData');
    allInfo.event = data[0];
    switch(data[0]) {
        case constant.USER_EVENT:
            allInfo.users = data;
        default:
            allInfo = allInfo;
         break;
    }
}
export default { allInfo, set_allInfo };