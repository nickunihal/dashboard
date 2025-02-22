import { Component, OnInit, OnDestroy } from '@angular/core';
import { KycService } from '../../services/kyc.service';
import { HttpService } from '../../services/http.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-kyc',
  templateUrl: './kyc.component.html',
  styleUrls: ['./kyc.component.css']
})
export class KycComponent implements OnInit, OnDestroy {
  userData = {
    pan: '',
    name: '',
    email: '',
    address: '',
    phone: '',
    documents: []
  };
  buttonName: String = 'Continue';
  stage;
  authorizedRep;
  viewActive;
  constructor(private kycService: KycService, private httpService: HttpService) {
    kycService.stage$.subscribe(stage => {
      this.stage = stage;
    });
    kycService.authorizedRep$.subscribe(rep => {
      this.authorizedRep = rep;
    });
    kycService.viewActive$.subscribe(active => {
      this.viewActive = active;
    });
   }

  buttonPressed() {
    if (this.stage === 1) {
      // check logic TODO
      this.buttonName = 'Create Customer';
      this.httpService.callApi(environment.services.profile.resources.read.method,
      environment.url + ':' + environment.services.profile.port + '/' +
      environment.services.profile.resources.read.endpoint, {pan: this.userData.pan})
      .subscribe(res => {
        if (res['success'] === true) {
          this.kycService.updateStage(3);
          delete res['profile']._id;
          delete res['profile'].__v;
          this.userData = res['profile'];
          this.buttonName = 'Save';
        } else {
          this.kycService.updateStage(2);
          console.log('updating stage', this.stage);
        }
      },
      err => {
        console.log(err)
        if (err.error['success'] === false) {
        this.kycService.updateStage(2);
          console.log('updating stage', this.stage);
        } else {
          console.log('Error Occured');
        }
        
      });
    } else if (this.stage === 2) {
      //TODO Save profile
      this.httpService.callApi(environment.services.profile.resources.create.method,
        environment.url + ':' + environment.services.profile.port + '/' +
        environment.services.profile.resources.create.endpoint, this.userData)
        .subscribe(res => {
          if (res['success'] === true) {
            this.kycService.updateStage(3);
            // this.userData = res['profile'];
          }
        },
        err => {
          console.log('Error Occured');
        });
      this.kycService.updateStage(3);
      this.buttonName = 'Save';
    } else if (this.stage === 3) {
      //TODO Save profile
      this.httpService.callApi(environment.services.profile.resources.update.method,
        environment.url + ':' + environment.services.profile.port + '/' +
        environment.services.profile.resources.update.endpoint, this.userData)
        .subscribe(res => {
          if (res['success'] === true) {
            this.userData = res['profile'];
          }
        },
        err => {
          console.log('Error Occured');
        });
      this.buttonName = 'Save';
      }
  }

  ngOnDestroy() {
    this.kycService.resetAll();
  }
  ngOnInit() {
    this.kycService.initAll();
    console.log('stage', this.stage);
    console.log('authrep', this.authorizedRep);
    console.log('viewActive', this.viewActive);
  }


}
