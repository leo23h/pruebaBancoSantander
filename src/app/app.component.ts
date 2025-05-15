import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatTableModule} from '@angular/material/table';


export interface PeriodicElement {
  name: string;
  position: number;
  task?: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', task: 'Progress'},
  {position: 2, name: 'Helium', task: 'In progress'},
  {position: 3, name: 'Lithium', task: 'Pending'},
];

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatTableModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'pruebaBancoSantander';
  displayedColumns: string[] = ['position', 'name', 'task'];
  dataSource = ELEMENT_DATA;

  ngOnInit(): void {
    console.log('AppComponent initialized');
  }







}
