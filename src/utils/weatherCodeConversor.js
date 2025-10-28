import IconSunny from '../assets/images/icon-sunny.webp'
import IconStorm from '../assets/images/icon-storm.webp'
import IconRain from '../assets/images/icon-rain.webp'
import IconSnow from '../assets/images/icon-snow.webp'
import IconFog from '../assets/images/icon-fog.webp'
import IconPartlyCloudy from '../assets/images/icon-partly-cloudy.webp'
import IconOvercast from '../assets/images/icon-overcast.webp'
import IconDrizzle from '../assets/images/icon-drizzle.webp'

export const weatherCodeToIcon = (weatherCode) => {
    let weatherIcon;

    if(weatherCode >= 0 && weatherCode <= 1){
    weatherIcon = IconSunny;
    } else if(weatherCode == 2){
    weatherIcon = IconPartlyCloudy;
    } else if(weatherCode == 3) {
    weatherIcon = IconOvercast;
    } else if(weatherCode >= 45 && weatherCode <= 48){
    weatherIcon = IconFog;
    } else if((weatherCode >= 51 && weatherCode <= 57) || (weatherCode >= 80 && weatherCode <= 82)){
    weatherIcon = IconRain;
    } else if((weatherCode >= 61 && weatherCode <= 67)){
    weatherIcon = IconDrizzle;
    } else if((weatherCode >= 71 && weatherCode <= 77) || (weatherCode >= 85 && weatherCode <= 86)){
    weatherIcon = IconSnow;
    } else if((weatherCode >= 95 && weatherCode <= 99) || (weatherCode >= 37 && weatherCode <= 39)){
    weatherIcon = IconStorm;
    }

   return weatherIcon;

};