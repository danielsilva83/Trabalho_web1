import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from './services/funcionario.service';
import { Funcionario } from './models/funcionario';
import { NgForm } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  config: any;
  funcionario = {} as Funcionario;
  funcionarios: Funcionario[];
  public paginaAtual = 1;
  public maxSize = 10;
  constructor(private funcionarioService: FuncionarioService) {}
  
  ngOnInit() {
    this.getFuncionarios();
     this.config = {
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: this.getFuncionarios()
    };
  }
  
 
  pageChanged(event){
    this.config.currentPage = event;
  }	
  

  // defini se um funcionarioro será criado ou atualizado
  saveFuncionario(form: NgForm) {
    if (this.funcionario.id !== undefined) {
      this.funcionarioService.updateFuncionario(this.funcionario).subscribe(() => {
        this.cleanForm(form);
      });
    } else {
      this.funcionarioService.saveFuncionario(this.funcionario).subscribe(() => {
        this.cleanForm(form);
      });
    }
  }

  // Chama o serviço para obtém todos os funcionarioros
  getFuncionarios() {
    this.funcionarioService.getFuncionarios().subscribe((funcionarios: Funcionario[]) => {
      this.funcionarios = funcionarios;
    });
  }

  // deleta um funcionarioro
  deleteFuncionario(funcionario: Funcionario) {
    this.funcionarioService.deleteFuncionario(funcionario).subscribe(() => {
      this.getFuncionarios();
    });
  }

  // copia o funcionarioro para ser editado.
  editFuncionario(funcionario: Funcionario) {
    this.funcionario = { ...funcionario };
  }

  // limpa o formulario
  cleanForm(form: NgForm) {
    this.getFuncionarios();
    form.resetForm();
    this.funcionario = {} as Funcionario;
  }
	
 

}