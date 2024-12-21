import * as components from './components';
import WButton from './components/Button/WButton.vue';
import WSelect from './components/Select/WSelect.vue';
import {App} from "vue";

const componentsList=components?.default;
const WComponents={
    // install(Vue){
    //     Object.keys(componentsList).forEach(name=>{
    //         Vue.components(name,componentsList[name]);
    //     })
    // }
    install: (app,optios) => {
        app.component('WButton', WButton);
        app.component('WSelect', WSelect);
        app.component('WAlert', WAlert);
        Object.keys(componentsList).forEach(name=>{
            app.component(name,componentsList[name]);
        })
    }
}
export default WComponents;