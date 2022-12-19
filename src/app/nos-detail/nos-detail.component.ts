import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


import { Nos } from '../interfaces/nos';
import { NOS } from '../mocks/mock-nos';

@Component({
  selector: 'app-nos-detail',
  templateUrl: './nos-detail.component.html',
  styleUrls: ['./nos-detail.component.scss']
})
export class NosDetailComponent implements OnInit {

  nos?: Nos;

  constructor(private route: ActivatedRoute) {}
    
    ngOnInit(): void {
    this.getNos();}

    getNos(): void {
      const id = Number(this.route.snapshot.paramMap.get('id'));
      this.nos = NOS.find(element => element.id === id);
    }

}
