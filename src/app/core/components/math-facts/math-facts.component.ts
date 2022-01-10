import { Component, OnInit } from '@angular/core';
import { MathService } from '../services/math.service';

@Component({
  selector: 'angprj-math-facts',
  templateUrl: './math-facts.component.html',
  styleUrls: ['./math-facts.component.scss']
})
export class MathFactsComponent implements OnInit {

  mathFact$!: string;
  evenChoice: string[] = [];
  oddChoice: string[] = [];

  constructor( private readonly mathService: MathService) { }

  ngOnInit(): void {
    this.getData()
  }

  public getData() {
    this.mathService.getRundomNumb().subscribe( (res: string) => {this.mathFact$ = res; console.log(res)
    })
  }

  public even() {
    this.evenChoice.push(this.mathFact$);
    this.getData();
  }

  public odd() {
    this.oddChoice.push(this.mathFact$);
    this.mathService.updateStorage(this.oddChoice);
    this.getData();
  }


}
