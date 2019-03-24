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
    name: ''
  };
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

  ngOnDestroy() {
    this.kycService.resetAll();
  }
  ngOnInit() {
    this.kycService.initAll();
  }


}
