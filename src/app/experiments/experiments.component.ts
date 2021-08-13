import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {
  experiments: string[] = ['Moon soil sample', 'Plant growth in orbit', 'Human bone density changes', 'Water droplet podcast for grades K-5', 'Satellite launch'];
  selectedExperiments: string[] = [];

  constructor() { }

  ngOnInit() { }

  addExperiment(experiment: string){
    if(!this.selectedExperiments.includes(experiment) && this.selectedExperiments.length < 2){
      this.selectedExperiments.push(experiment)
    }
  }

  removeExperiment(experiment: string){
    this.selectedExperiments.splice(this.selectedExperiments.indexOf(experiment), 1)
  }
}
