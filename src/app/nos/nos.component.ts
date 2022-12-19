import { Component, OnInit } from '@angular/core';

import { Nos } from '../interfaces/nos';
import { NosService } from '../nos.service';

@Component({
  selector: 'app-nos',
  templateUrl: './nos.component.html',
  styleUrls: ['./nos.component.scss']
})
export class NosComponent implements OnInit {

  nos: Nos[] = [];

  constructor(private nosService: NosService) { }

  ngOnInit(): void {
    this.getNos();
  }

  getNos(): void {
    this.nos = this.nosService.getNos();
  }

}


