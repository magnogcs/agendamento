import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import {HorariospProvider} from './../../providers/horariosp/horariosp';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';
import { PagamentoPage } from '../pagamento/pagamento';
import { Observable } from 'rxjs/Observable';



/**
 * Generated class for the HorariosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-horarios',
  templateUrl: 'horarios.html',
})
export class HorariosPage {
  title: string;
  form: FormGroup;
  horariosp: any;
  horarios: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
  private formBuilder: FormBuilder, private provider: HorariospProvider, private toast: ToastController) {
    this.horarios = this.provider.getAll();
    // maneira 1
    this.horariosp = this.navParams.data.horariosp || { };
    this.createForm();
 
    // // maneira 2
    // this.horarios = { };
    // this.createForm();
 
    // if (this.navParams.data.key) {
    //   const subscribe = this.provider.get(this.navParams.data.key).subscribe((c: any) => {
    //     subscribe.unsubscribe();
 
    //     this.horarios = c;
    //     this.createForm();
    //   })
    // }
 
    this.setupPageTitle();
  }
 
  private setupPageTitle() {
    this.title = this.navParams.data.horarios ? 'Alterando contato' : 'Novo contato';
  }
 
  createForm() {
    this.form = this.formBuilder.group({
      key: [this.horarios.key],
      date: [this.horarios.date, Validators.required],
      start: [this.horarios.start, Validators.required],
      end: [this.horarios.end, Validators.required],
    });
  }
 
  onSubmit() {
    if (this.form.valid) {
      this.provider.save(this.form.value)
        .then(() => {
          this.toast.create({ message: 'Aguarde.', duration: 3000 }).present();
          this.navCtrl.push(PagamentoPage);
        })
        .catch((e) => {
          this.toast.create({ message: 'Erro ao solicitar este horário.', duration: 3000 }).present();
          console.error(e);
        })
    }
  }
}