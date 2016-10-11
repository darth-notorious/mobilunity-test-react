import {INCREMENT} from '../actions';
import {invertColor} from '../utils';

export default function(state, {type, payload}){
    switch(type) {
        //Increase counter and generate random hex color
        case INCREMENT:
            const newTextColor = '#'+Math.floor(Math.random()*16777215).toString(16);
            return Object.assign({}, state, {
                currentCount: state.currentCount + 1,
                textColor: newTextColor,
                backgroundColor: invertColor(newTextColor)
            });
    }

    return state;
}