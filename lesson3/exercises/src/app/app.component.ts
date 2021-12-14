import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercises: Angular Lesson 3';

  color = 'green';
  height = 0;
  width = 0;
  message = 'Space shuttle ready for takeoff!';
  takeOffEnabled: boolean = true;

  handleTakeOff() {

    let result = window.confirm('Are you sure the shuttle is ready for takeoff?');
    if (result) {
      this.color = "blue";
      this.height = 10000;
      this.width = 0;
      this.message = "Shuttle in flight.";
      this.takeOffEnabled = false;
    }
    
  }

  handleLand(img) {

    window.alert('The shuttle is landing. Landing gear engaged.');
    this.color = 'green';
    this.height = 0;
    this.width = 0;
    this.message = 'The shuttle has landed.';
    img.style.bottom = '0px';
    this.takeOffEnabled = true;

  }

  handleAbort(img) {

    let result = window.confirm('Are you sure you want to abort the mission?');
    if (result) {
      this.color = "red";
      this.height = 0;
      this.width = 0;
      this.message = "Mission aborted.";
      img.style.bottom = '0px';
      this.takeOffEnabled = true;
    }

  }

  moveRocket(img, direction) {

    if (direction === "right") {
      let movement = parseInt(img.style.left) + 10 + "px";
      img.style.left = movement;
      this.width += 10000;
    }
    if (direction === "left") {
      let movement = parseInt(img.style.left) - 10 + "px";
      img.style.left = movement;
      this.width -= 10000;
    }
    if (direction === "up") {
      let movement = parseInt(img.style.bottom) + 10 + "px";
      img.style.bottom = movement;
      this.height += 10000;
    }
    if (direction === "down") {
      let movement = parseInt(img.style.bottom) - 10 + "px";
      img.style.bottom = movement;
      this.height -= 10000;
    }

  }

}
