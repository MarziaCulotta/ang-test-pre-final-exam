import { Component, Input, OnInit } from '@angular/core';
import { MathService } from '../services/math.service';

@Component({
  selector: 'angprj-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.scss']
})
export class EvenComponent implements OnInit {

  @Input() evenChoice: string[] = [];

  constructor(private readonly mathService: MathService) { }

  ngOnInit(): void { }

}
