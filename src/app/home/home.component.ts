import { Component, signal } from '@angular/core';
import { GreetingComponent } from '../components/greeting/greeting.component';
import { CounterComponent } from '../components/counter/counter.component';

@Component({
  selector: 'app-home',
  imports: [GreetingComponent,CounterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  passedMessage = signal("this is a message passed from home component");
  keyUpHandler = (e : KeyboardEvent) => {
    console.log(`key up event, ${e.key}`);
  }
}
