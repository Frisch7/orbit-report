import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite';

@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {
  @Input() satellites: Satellite[];
  satelliteCount : object[];
  
  spaceDebris : number;
  communication : number;
  probe: number;
  positioning: number;
  spaceStation: number;
  telescope: number;
  total: number;
  constructor() { 
    this.satelliteCount = [];
    this.spaceDebris = 0;
    this.communication = 0;
    this.probe = 0
    this.positioning = 0
    this.spaceStation = 0;
    this.telescope = 0;
    this.total = 0;

    console.log(this.satellites);
    
  }

  
  ngOnInit() {
  }


  totalSatellites(): number{
    console.log(this.satellites);
    return this.satellites.length;
  }
  totalSatellitesType(satelliteType : string): number{
    
    let count : number = 0;
    this.satellites.forEach(e => {
      if(e.type === satelliteType){
        count++
      }
    });
    console.log("executed totalSatellitesType method");
    return count;
  }
  generateArrayOfSatelliteTypes(): string[]{
    let satelliteTypes = [];
    this.satellites.forEach(e => {
      if(!satelliteTypes.includes(e.type)){
        satelliteTypes.push(e.type);
      }
    });
    console.log(satelliteTypes);
    return satelliteTypes;
  }
}
