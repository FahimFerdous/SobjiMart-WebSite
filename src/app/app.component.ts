import { Component, OnInit } from "@angular/core";
import "jquery";
declare var $: any;

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "SobjiMartApp";

  ngOnInit() {
    $.getScript("assets/js/jquery.min.js");
    $.getScript("assets/js/jquery.easing.1.3.js");
    $.getScript("assets/js/bootstrap.min.js");
    $.getScript("assets/js/jquery.nav.js");
    $.getScript("assets/js/jquery.sticky.js");
    $.getScript("assets/js/isotope.pkgd.min.js");
    $.getScript("assets/slick/slick.min.js");
    $.getScript("assets/js/parallax.min.js");
    $.getScript("assets/js/wow-1.3.0.min.js");
    $.getScript("assets/js/main.js");
  }
}
