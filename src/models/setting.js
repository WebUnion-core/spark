export default {
    namespace: 'setting',

    state: {
        theme: 'day',
    },

    subscriptions: {
        setup({
            dispatch,
            history
        }) {
            // eslint-disable-line
        },
    },

    // effects指的是涉及到异步请求的方法。通常用来调用服务获取数据
    effects: {
        * fetch({
            payload
        }, {
            call,
            put
        }) {
            // eslint-disable-line
            yield put({
                type: 'save'
            });
        },
    },

    reducers: {
        save(state, action) {
            return {
                ...state,
                ...action.payload
            };
        },
    },
};
