import { Component } from '@angular/core';
import { AlertService } from 'src/app/Front-End/core/services/alerts.service';


@Component({
  selector: 'app-alert',
  templateUrl: './sweet-alert.component.html',
  styleUrls: ['./sweet-alert.component.css']
})
export class SweetAlertComponent {

  constructor(private alertService: AlertService) {}


  showJobCreatedSuccess() {
    this.alertService.showJobCreatedSuccess();
  }

  showJobFieildsError(){
    this.alertService.showJobFieildsError()
  }

  showErrorJobCreating(){
    this.alertService.showErrorJobCreating()
  }

  showJobUpdatedSuccess(){
    this.alertService.showJobUpdatedSuccess()

  }
  showJobClosedSuccess(){
    this.alertService.showJobClosedSuccess()

  }

  showJobReopenedSuccess(){
    this.alertService.showJobReopenedSuccess()

  }

  showJobDeletedSuccess(){
    this.alertService. showJobDeletedSuccess()

  }

  showJobConfirmClosed(){
    this.alertService.showJobConfirmClose()
  }

  showJobConfirmReopen(){
    this.alertService.showJobConfirmReopen()
  }

  showJobConfirmDelete(){
    this.alertService.showJobConfirmDelete()
  }


  showJobConfirmApply(){
    this.alertService. showJobConfirmApply()
  }

  showJobConfirmWtihdraw(){
    this.alertService.showJobConfirmWtihdraw()
  }

  showJobAppliedSuccess(){
    this.alertService. showJobAppliedSuccess()
  }

  showJobWithdrawnSuccess(){
    this.alertService.showJobWithdrawnSuccess()
  }

  showJobSavedSuccess(){
    this.alertService.showJobSavedSuccess()
  }

  showJobUnsavedSuccess(){
    this.alertService. showJobUnsavedSuccess()
  }


  
}
