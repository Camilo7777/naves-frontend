import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isOnHomePage: boolean = false;
  selectedValue: string = '';
  options = [
    { value: 'lanzadera', viewValue: 'Lanzadera' },
    { value: 'tripulada', viewValue: 'Tripulada' },
    { value: 'no-tripulada', viewValue: 'No tripulada' },
  ];

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Verificar la ruta actual
        this.isOnHomePage = this.router.url === '/';
      }
    });
  }

  onSelectionChange() {
    // Realiza la navegación basándote en el valor seleccionado
    switch (this.selectedValue) {
      case 'lanzadera':
        this.router.navigate(['/lanzadera']);
        break;
      case 'tripulada':
        this.router.navigate(['/tripulada']);
        break;
        case 'no-tripulada':
          this.router.navigate(['/no-tripulada']);
          break;
      default:
        break;
    }
  }
}
