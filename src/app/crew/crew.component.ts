import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {

  crew: object[] = [
    {name: "Eileen Collins", firstMission: false},
    {name: "Mae Jemison", firstMission: false},
    {name: "Ellen Ochoa", firstMission: true}
  ];

  memberBeingEdited: object = null;

  constructor() { }

  ngOnInit() {
  }

  add(name: string, firstMission: string){
    this.crew.push({name: name, firstMission: firstMission})
  }

  remove(crewMember: object){
    this.crew.splice(this.crew.indexOf(crewMember), 1)
  }

  edit(member: object){
    this.memberBeingEdited = member;
  }

  save(name: string, member: object){
    member['name'] = name;
    this.memberBeingEdited = null;
  }
}
