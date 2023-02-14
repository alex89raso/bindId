import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vetrina',
  templateUrl: './vetrina.component.html',
  styleUrls: ['./vetrina.component.css'],
})
export class VetrinaComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
  goToFunnel() {
    this.router.navigate(['/funnel']);
  }
}
