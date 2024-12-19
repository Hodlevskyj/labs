import * as components from './components';
import WButton from './components/Button/WButton.vue';
import {App} from "vue";

const componentsList=components?.default;
const WComponents={
    // install(Vue){
    //     Object.keys(componentsList).forEach(name=>{
    //         Vue.components(name,componentsList[name]);
    //     })
    // }
    install(app:App){
        app.component("WButton",WButton);
    }
}
export default WComponents;