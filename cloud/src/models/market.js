import {queryMarket,queryMarketDetails} from '@/services/market';
const MarketModel = {
  namespace: 'market',
  state: {
    marketData:[],
    total:0,
    setId:{id:null},
    marketDetailsData:{},
  },
  effects: {
    *fetchLoadMarket(_, { call, put }) {
      const response = yield call(queryMarket,_.payload);
      yield put({
        type: 'changeMarketData',
        payload: response,
      });
    },
    *fetchLoadMarketDetails(_, { call, put }) {
      const response = yield call(queryMarketDetails,_.payload);
      yield put({
        type: 'changeMarketDetailsData',
        payload: response,
      });
    },
  },
  reducers: {
    changeMarketData(state, action) {
      // action.payload.data.list.forEach(function(item){
      //   for(let key in item){
      //     item[key]===null?item[key]='-':item[key];
      //   }
      // });
      return { ...state,marketData:action.payload.data.list,total:action.payload.data.total};
    },
    changeSetId(state, action) {
      return { ...state,setId:action.payload};
    },
    changeMarketDetailsData(state, action) {
      return {...state,marketDetailsData:action.payload.data,};
    },
  },
};
export default MarketModel;