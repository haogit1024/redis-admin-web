import { createStore } from 'vuex'
import { mutationTypes } from "@/store/store-type"

export default createStore({
  state: {
    redisKey: {
      id: 0,
      dbIndex: 0,
      key: ''
    }
  },
  getters: {
    redisKey: (state: any) => {
      return state.redisKey
    }
  },
  mutations: {
    [mutationTypes.REDIS_KEY_CLICK] (state: any, payload: any) {
      // mutations 不能异步，只能同步
      state.redisKey = {
        id: payload.id,
        dbIndex: payload.dbIndex,
        key: payload.key
      }
    }
  },
  actions: {
    redisKeyClick(context, payload: any) {
      // 这里可以进行异步
      context.commit(mutationTypes.REDIS_KEY_CLICK, payload)
    }
  },
  modules: {
  }
})
