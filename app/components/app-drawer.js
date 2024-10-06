import Component from '@glimmer/component';
import { action ,set } from '@ember/object';
import { service } from '@ember/service';
export default class AppDrawerComponent extends Component {

  @service
  desktopservice;

  allList = {
    6: {
      link: '/icons/multimedia-video-player.svg',
      name: 'video',
    },
    7: {
      link: '/icons/calculator.png',
      name: 'Calculator',
    },
    8: {
      link: '/icons/doc.png',
      name: 'Document',
    },
    9: {
      link: '/icons/camera.png',
      name: 'Cheese',
    },
    10: {
      link: '/icons/cpu.png',
      name: 'Additional Drivers',
    },
    11: {
      link: '/icons/ace-of-hearts.png',
      name: 'Ace',
    },
    12: {
      link: '/icons/calendar.png',
      name: 'Calender',
    },
    13: {
      link: '/icons/translate.png',
      name: 'Language',
    },
    14: {
      link: '/icons/google-docs.png',
      name: 'LibereOffice Writer',
    },
    15: {
      link: '/icons/powerpoint.png',
      name: 'LibereOffice Impress',
    },
    16: {
      link: '/icons/xls.png',
      name: 'LibereOffice Calc',
    },
    17: {
      link: '/icons/utorrent.png',
      name: 'Utorrent',
    },
    18: {
      link: '/icons/gnomeweb.png',
      name: 'Web',
      componentPath:"installed-apps/ephiny/web"
    },
  };
   
  @action
  openApp(key){
    if(!this.desktopservice.taskBarIcons[key]){
      set(this.desktopservice.taskBarIcons,key , this.allList[key])
      set(this.desktopservice,"currentOpenedAppId" , key);
    }
    set(this.desktopservice,"taskBarIcons",this.desktopservice.taskBarIcons)
    set(this.desktopservice.currentApp,'appName', this.allList[key].componentPath);
  }
  
  @action
  insertDesktopImg(){
    const taskbar = document.querySelector('.taksbar');
    const topbar = document.querySelector('.topbar');

    document.querySelector('.desktop-one-img').src = this.args.dekstopScreenShot;

    // Restore the child divs after the screenshot is taken
    taskbar.style.display = 'block';
    topbar.style.display = 'flex';
  }
}
