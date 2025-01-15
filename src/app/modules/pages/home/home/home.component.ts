import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../../components/header/header/header.component';
import { KnowledgementComponent } from '../../../components/knowledgement/knowledgement/knowledgement.component';
import { ExperienceComponent } from '../../../components/experience/experience/experience.component';
import { ProjectsComponent } from '../../../components/projects/projects/projects.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, KnowledgementComponent,ExperienceComponent,ProjectsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  ngOnInit(): void {
    this.exibirAlerta();
  }

    public exibirAlerta(){
      alert("Saudações, nobre avaliador! Informo, que: Os projetos publicados e vinculados a este portifólio, são hospedados com gerenciamento gratuíto. Logo, o serviço poderá estar inativo no momento da solicitação e levar até 50 segundos para o backend emitir a resposta solicitada apenas na primeira solicitação!");
    }

}
