import { Component, signal } from '@angular/core';
import { Iknowledge } from '../../interface/Iknowledge';

@Component({
  selector: 'app-knowledgement',
  standalone: true,
  imports: [],
  templateUrl: './knowledgement.component.html',
  styleUrl: './knowledgement.component.scss'
})
export class KnowledgementComponent {


  public arrayKnowledge = signal<Iknowledge[]>(
    [{
      src:"assets/icons/knowledge/html5.svg",
      alt: "Icone de conhecimento em html5.",
      title:"HTML"

    },

    {
      src:"assets/icons/knowledge/css3.svg",
      alt: "Icone de conhecimento em css3.",
      title:"CSS"

    },

    {
      src:"assets/icons/knowledge/github1.svg",
      alt: "Icone de conhecimento em github.",
      title:"Github",
      },

      {
        src:"assets/icons/knowledge/mongodb-icon.svg",
        alt: "Icone de conhecimento em mongoDB.",
        title:"MongoDB",
        },
 
      {
        src:"assets/icons/knowledge/java.svg",
        alt: "Icone de conhecimento em java.",
        title:"Java",
        },
     {
      src:"assets/icons/knowledge/angular.svg",
      alt: "Icone de conhecimento em angular.",
      title:"Angular"

    },

    {
      src:"assets/icons/knowledge/javascript.svg",
      alt: "Icone de conhecimento em javascript",
      title:"Java Script"

    },

    {
      src:"assets/icons/knowledge/nodejs.svg",
      alt: "Icone de conhecimento em nodeJs",
      title: "NodeJS"
    },
     ]
  )






}
