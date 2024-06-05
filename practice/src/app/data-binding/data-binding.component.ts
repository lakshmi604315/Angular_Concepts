import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.scss'
})
export class DataBindingComponent {
  data: any;
  loading = false;
  error: any;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.loading = true; // Show loading indicator
    this.dataService.getData()
      .subscribe(response => {
        this.data = response;
        this.loading = false; // Hide loading indicator
      }, error => {
        this.error = error;
        this.loading = false; // Hide loading indicator in case of error
      });
  }
}