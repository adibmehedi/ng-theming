import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  themeName = 'gryffindor';

  constructor( 
    private breakpointObserver: BreakpointObserver){
  }

  public switchTheme() {
    this.themeName = (this.themeName == 'gryffindor') ? 'slitherine' : 'gryffindor';
  }

  isHandset: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => {
        return result.matches;
      })
    );

    

}
