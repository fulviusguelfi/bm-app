import { Component, VERSION } from "@angular/core";
import { BottomBarComponent } from "./bottom-bar/bottom-bar.component";

@Component({
  selector: "bm-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;
}
