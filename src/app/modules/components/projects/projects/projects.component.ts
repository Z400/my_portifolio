import { Component, inject, signal } from '@angular/core';
import { Iprojects } from '../../interface/IProjects';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';
import { DialogProjectsComponent } from '../../dialog/dialog-projects/dialog-projects.component';


@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})


export class ProjectsComponent {

  #dialog = inject(MatDialog);
 
  public arrayProjects = signal<Iprojects[]>([
    {
      src:'assets/img/projects/D.png',
      alt: 'Projeto DarkTheme',
       title: 'DarkTheme',
        width:'100px',
         height: '51px',
          description: 
          `<p>Este projeto tem o interesse de realizar a troca de temas conforme a vontade do 
          usuário, assim, propiciando um tema amigavel para o seu ambiente!</p>`,
          link: [{
            name: 'Conheça o projeto',
            href: 'https://project-darktheme.onrender.com'
          }]
      },
      {
        src:'assets/img/projects/To-Do_List-removebg-preview.png',
        alt: 'Projeto To-Do List v2',
         title: 'To-Do List v2',
          width:'100px',
           height: '51px',
            description: 
              `<p>Este projeto, ToDo List foi desenvolvido novamente para aperfeiçoamento
              de sua temática, contudo, o projeto segue com as mesma intenções da versão 1
              que é a organização de uma rotina de tarefas!
              </p>`,
            link: [{
              name: 'Conheça o projeto',
              href: 'https://todo-v2-1iuv.onrender.com'
            }]
        },
        {
          src:'assets/img/projects/logo.svg',
          alt: 'Projeto Pokedex',
           title: 'Pokedex',
            width:'100px',
             height: '51px',
              description: 
                `<p>Este desenvolvimento tem a funçao de trabalhar com os dados fornecidos
                de um pequeno servidor onde, os pokemons estão inseridos e terá como retorno
                as especificações do pokemom selecionado!<p/>`,
              link: [{
                name: 'Conheça o projeto',
                href: 'https://pokedex-angular-16qn.onrender.com'
              }]              
          },
          {
            src:'assets/img/projects/logo_atualizada-removebg-preview.png',
          alt: 'SGEA',
           title: 'SGEA',
            width:'100px',
             height: '51px',
              description: 
                `<p>O SGEA é um acrônimo de SISTEMA DE GERENCIAMENTO DE ESTOQUE AUTOMOTIVO.
                 Este, tem a sua intenção em demonstrar conhecimentos um pouco mais a fundo utilizando
                 Angular com NodeExpress para obter acessao ao MongoDB.
                 OBS: Este projeto ainda esta em construção!<p/>`,
              link: [{
                name: 'Conheça o projeto',
                href: 'https://estatico-sgea.onrender.com'
              }],                  
          },
          {
            src:'assets/img/projects/FTBankLogo.png',
            alt: 'Projeto FTBank',
             title: 'FTBank',
              width:'430px',
               height: '140px',
                description: 
                  `<p>FTBank, o projeto que promete entregar a ideia similar a sistema bancário para transferência e 
                  depósito de valores. Este sistema está na reta final de seu desenvolvimento e aborda as seguintes linguagens, sendo elas,
                  Java (Linguagem de programação), SpringBoot (Framework Backend) e Angular (Framework Frontend)!<p/>`,
                link: [{
                  name: 'Conheça o projeto',
                  href: 'https://ftbank-estatico.onrender.com'
                }]              
            },




          // {
          //   src:'assets/img/projects/vfull.png',
          //   alt: 'Projeto vida fullStack',
          //    title: 'Vida FullStack',
          //     width:'100px',
          //      height: '51px',
          //       description: 
          //       '<p>Explore o fascinante mundo do desemvolvimento no meu blog dedicado exclusivamento aos Dev´s</p>',
          //       link: [{
          //         name: 'Conheça o blog',
          //         href: 'https://vidafullstack.com.br'
          //       }]
          //   },
          //   {
          //     src:'assets/img/projects/vfull.png',
          //     alt: 'Projeto vida fullStack',
          //      title: 'Vida FullStack',
          //       width:'100px',
          //        height: '51px',
          //         description: 
          //         '<p>Explore o fascinante mundo do desemvolvimento no meu blog dedicado exclusivamento aos Dev´s</p>',
          //         link: [{
          //           name: 'Conheça o blog',
          //           href: 'https://vidafullstack.com.br'
          //         }]
          //     }
  ]);

   
  public openDialog(data: Iprojects){
    this.#dialog.open(DialogProjectsComponent,{
      data,
      panelClass: EDialogPanelClass.PROJECTS
    })
  }


}
