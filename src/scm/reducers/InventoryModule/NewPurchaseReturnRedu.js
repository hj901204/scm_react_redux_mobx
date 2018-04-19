/**
 * Created by MW on 2017/4/20.
 */
import { fromJS, Record,List } from 'immutable';
import { NEWPURCHASE_RETURN_REDU } from '../../consts/ActTypes';

let initState = fromJS({
    selectedList: [],
    dataSource:{},
    loading: false,
    saveLoading: false,
});

let NewPurchaseReturnRedu = (state = initState, action) => {
    switch (action.type) {
        case NEWPURCHASE_RETURN_REDU:
            return action.state;
        default:
            return state;
    }
}

export default NewPurchaseReturnRedu