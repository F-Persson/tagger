import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));




  // Loop through mock-TagItem and display them in the options page
  // Add button in save tag to save the tagItem to the database


  // TODO
  // Make a database for the TagItem


  // unable to do this:
  // re-use the save-tag component to use both in popup and options page

  // add the search bar to the top of the options page
  // add some icons to the left bar in the options page
  // fix the css