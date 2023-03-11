import {createStore} from 'vuex'


export default createStore({ 
    state:{ 
        count:0,
    },
    mutations:{ 
        increment(state){ 
            state.count++; 
        },
        decrement(state){ 
            state.count--; 
        }, 
        reset(state){ 
            state.count=0;
        }, 
        setValue(state, value){
            state.count = value; 
        },
    },
}); 



// const store = createStore({ 
//     state(){ 
//         return { counter: 0};
//     },

//     getters:{ 
//         getCounter(state){ 
//             return state.counter;
//         },
//     },
//     mutations:{ 
//         increment(state, countNum){
//             state.counter += countNum;
//         }, 
//         decrement(state, countNum){ 
//             state.counter -= countNum; 
//         },
//         reset(state, countNum){ 
//             state.counter *= countNum;
//         }, 
//         setValue(state){ 
//             return state.counter
//         },
//     }, 
//     actions:{ 
//         increment(op, countNum){ 
//             op.commit("increment", countNum); 
//         }, 
//         decrement(op, countNum){
//             op.commit("decrement", countNum);
//         },
//         reset(op, countNum){ 
//             op.commit("reset", countNum)
//         },
//         setValue(op){ 
//             op.commit("setValue");
//         },
//     },
// });

