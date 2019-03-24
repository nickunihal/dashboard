import { Component, OnInit, OnDestroy } from '@angular/core';
import { KycService } from '../../services/kyc.service';

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
    phone: ''
  };
  buttonName: String = 'Continue';
  stage;
  authorizedRep;
  viewActive;
  constructor(private kycService: KycService) {
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
      this.kycService.updateStage(2);
      console.log('subed val', this.stage);
    } else if (this.stage === 2) {
      //TODO Save profile
      this.kycService.updateStage(3);
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
