import { checkForName } from './js/nameChecker'
import { handleSubmit } from './js/formHandler'
import { getGeo} from './js/getGeo';
import { getWeather} from './js/getWeather';
import { getPixa} from './js/getPixa';
import { isEmpty} from './js/formChecks';
import { checkDate} from './js/formChecks';
import { addDays} from './js/formChecks';


import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'

console.log(checkForName);

// alert("I EXIST")
// console.log("CHANGE!!");

export {
    checkForName,
    handleSubmit,
    getGeo,
    getPixa,
    getWeather,
    isEmpty,
    checkDate,
    addDays
}
