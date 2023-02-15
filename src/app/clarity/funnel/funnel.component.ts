import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-funnel',
  templateUrl: './funnel.component.html',
  styleUrls: ['./funnel.component.css'],
})
export class FunnelComponent implements OnInit {
  constructor(private router: Router) {}
  errore: any = {};
  ngOnInit(): void {}
  goToTyp() {
    this.router.navigate(['/typ']);
  }
  generaErrore() {
    throw new Error('custom errror');
  }
}
