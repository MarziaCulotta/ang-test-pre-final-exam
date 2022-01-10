import { Component, Input, OnInit } from '@angular/core';
import { MathService } from '../services/math.service';

@Component({
  selector: 'angprj-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.scss']
})
export class OddComponent implements OnInit {

  @Input() oddChoice: string[] = [];

  constructor(private readonly mathService: MathService) { }

  ngOnInit(): void {
  }

}
