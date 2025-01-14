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
    // {
    //   src:'assets/img/projects/D.png',
    //   alt: 'Projeto DarkTheme',
    //    title: 'DarkTheme',
    //     width:'100px',
    //      height: '51px',
    //       description: 
    //       `<p>Este projeto tem o interesse de realizar a troca de temas conforme a vontade do 
    //       usuário, assim, propiciando um tema amigavel para o seu ambiente!</p>`,
    //       link: [{
    //         name: 'Conheça o projeto',
    //         href: 'https://project-darktheme.onrender.com'
    //       }]
    //   },
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
        // {
        //   src:'assets/img/projects/logo.svg',
        //   alt: 'Projeto Pokedex',
        //    title: 'Pokedex',
        //     width:'100px',
        //      height: '51px',
        //       description: 
        //         `<p>Este desenvolvimento tem a funçao de trabalhar com os dados fornecidos
        //         de um pequeno servidor onde, os pokemons estão inseridos e terá como retorno
        //         as especificações do pokemom selecionado!<p/>`,
        //       link: [{
        //         name: 'Conheça o projeto',
        //         href: 'https://pokedex-angular-16qn.onrender.com'
        //       }]              
        //   },
          {
            src:'assets/img/projects/logo_atualizada-removebg-preview.png',
          alt: 'SGEA',
           title: 'SGEA',
            width:'100px',
             height: '51px',
              description: 
                `<p>O SGEA é um acrônimo de SISTEMA DE GERENCIAMENTO DE ESTOQUE AUTOMOTIVO.
                 O SGEA visa manter o controle de estoques e tambem de cadastro de colaboradores,
                 fornecedores e produtos! Este Sistema web é progamado para emissão alertas quando
                 há faturas perto de vencer e também quando é tentado realizar uma venda de um 
                 produto quando o estoque está baixo. O SGEA possui sistema de login e proteção 
                 de rota, onde, somente logado é possível acessar o sistema!<p/>`,
              link: [{
                name: 'Conheça o projeto',
                href: 'https://sgea-new.onrender.com'
              }],                  
          },
          {
            src:'assets/img/projects/FTBank_resized.png',
            alt: 'Projeto FTBank',
             title: 'FTBank',
              width:'150px',
               height: '140px',
                description: 
                  `<p>FTBank, o projeto que promete entregar a ideia similar a um sistema bancário para transferência e 
                  depósito de valores entre usuarios deste mesmo sistema. Este sistema está na reta final de seu desenvolvimento e aborda as seguintes linguagens, sendo elas,
                  Java, SpringBoot, Angular, e MongoDB, banco de dados não relacional!<p/>`,
                link: [{
                  name: 'Conheça o projeto',
                  href: 'https://ftbank-estatico.onrender.com'
                }]              
            },
            {
              src:'assets/img/projects/pcrpoint_rsz.png',
              alt: 'Ponto de cadastro e registro',
               title: 'PCR.POINT',
                width:'150px',
                 height: '140px',
                  description: 
                    `<p>O ponto de cadastro e registro é um sistema que visa entregar o acompanhamento mensal de colaboradores registrados
                    de uma empresa particular. Nele, você consegue realizar login através de um gestor cadastrado e explorar suas funcionalidades.
                    O sistema foi desenvolvido utilizando Linguagem Java com springBoot, Angular acompanhado do bootstrap,
                     e banco de dados relacional Postgres!Para registrar o ponto do colaborador é simples e prático, basta inserir o numero de 
                     registro que foi gerado na tela de informações após o cadastro do novo colaborador dentro do sistema e depois
                      vincular na tela de registrar ponto, fora do sistema!`,
                  link: [{
                    name: 'Conheça o projeto',
                    href: 'https://pcr-point.onrender.com/'
                  }]              
              }




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
