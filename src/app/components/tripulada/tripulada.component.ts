import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataSourceService } from 'src/app/services/data-source.service';

@Component({
  selector: 'app-tripulada',
  templateUrl: './tripulada.component.html',
  styleUrls: ['./tripulada.component.css']
})
export class TripuladaComponent {
  dataList: any[] | undefined;

  constructor(private dataService: DataSourceService,private router: Router) {}


  ngOnInit() {
    this.getData();
  }

  getData() {
    console.log();
    this.dataService.opc = 2;
    this.dataService.getData().subscribe(data => {
      this.dataList = data;
      console.log(data);
    });
}


agregarNave() {
  this.router.navigate(['/agregar-nave']);
  }

  volver() {
    this.router.navigate(['/']);
    }
}
