import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataSourceService } from '../../services/data-source.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-nave',
  templateUrl: './agregar-nave.component.html',
  styleUrls: ['./agregar-nave.component.css']
})
export class AgregarNaveComponent {
  public  opcSeleccionada : number = 0;
  vehiculoForm!: FormGroup;


  public nave = {
    descripcion: '',
    creador: '',
    nombre: '',
    peso: 0,
    empuje: 0,
    potencia: 0,
    fechaActividad: '',
    tipoCombustible: '',
    numeroTripulantes :0
  }



  constructor(private fb: FormBuilder, private dataSourceService:DataSourceService, private router: Router) {
    this.opcSeleccionada = dataSourceService.opc;
    this.vehiculoForm = this.fb.group({
      descripcion: ['', Validators.required],
      creador: ['', Validators.required],
      nombre: ['', Validators.required],
      peso: [null, [Validators.required, Validators.min(0)]],
      empuje: [null, [Validators.required, Validators.min(0)]],
      potencia: [null, [Validators.required, Validators.min(0)]],
      fechaActividad: ['', Validators.required],
      tipoCombustible: ['', Validators.required],
      numeroTripulantes: [null, [Validators.required, Validators.min(0)]],
      foto: [null], // Este control es para la imagen
    });
  }

  onSubmit() {
    this.dataSourceService.registerNave(this.nave).subscribe(
      (data) => {
        console.log(data);
      },(error) =>{
        console.log(error);}
    )

    if(this.opcSeleccionada == 1){
      this.router.navigate(['/lanzadera']);
    }
    if(this.opcSeleccionada == 2){
      this.router.navigate(['/tripulada']);
    }

    if(this.opcSeleccionada == 3){
      this.router.navigate(['/no-tripulada']);
    }


  }

  volver() {
    if(this.opcSeleccionada == 1){
      this.router.navigate(['/lanzadera']);
    }
    if(this.opcSeleccionada == 2){
      this.router.navigate(['/tripulada']);
    }

    if(this.opcSeleccionada == 3){
      this.router.navigate(['/no-tripulada']);
    }
    }



}
