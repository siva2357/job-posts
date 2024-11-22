// src/app/Front-End/core/services/alerts.service.ts
import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertService {





  // Success Messages
  showJobCreatedSuccess(): void {
    Swal.fire({
      title: 'Success',
      text: 'Job created successfully.',
      icon: 'success',
      showConfirmButton: false,
      timer:1500
    });
  }


  showJobUpdatedSuccess(): void {
    Swal.fire({
      title: 'Success',
      text: 'Job updated successfully.',
      icon: 'success',
      showConfirmButton: false,
      timer:1500
    });
  }



  async showJobConfirmClose(): Promise<boolean> {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: 'Do you really want to close this job post?',
      icon: 'warning',
      showCancelButton: true, // Adds a Cancel button
      confirmButtonText: 'Yes, close it!',
      cancelButtonText: 'No, keep it',
    });
    return result.isConfirmed;
  }
  
  showJobClosedSuccess(): void {
    Swal.fire({
      title: 'Success',
      text: 'Job closed successfully.',
      icon: 'success',
      showConfirmButton: false,
      timer:1500
    });
  }



  async showJobConfirmDelete(): Promise<boolean> {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: 'Do you really want to delete this job post?',
      icon: 'warning',
      showCancelButton: true, // Adds a Cancel button
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it',
    });
    return result.isConfirmed;
  }

  showJobDeletedSuccess(): void {
    Swal.fire({
      title: 'Success',
      text: 'Job deleted successfully.',
      icon: 'success',
      showConfirmButton: false,
      timer:1500
    });
  }
  

    
  async showJobConfirmReopen(): Promise<boolean> {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: 'Do you really want to reopen this job post?',
      icon: 'warning',
      showCancelButton: true, // Adds a Cancel button
      confirmButtonText: 'Yes, open it!',
      cancelButtonText: 'No, keep it',
    });
    return result.isConfirmed;
  }


  showJobReopenedSuccess(): void {
    Swal.fire({
      title: 'Success',
      text: 'Job reopened successfully.',
      icon: 'success',
      showConfirmButton: false,
      timer:1500
    });
  }








  async showJobConfirmApply(): Promise<boolean> {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: 'Do you really want to apply this job post?',
      icon: 'warning',
      showCancelButton: true, // Adds a Cancel button
      confirmButtonText: 'Yes, apply it!',
      cancelButtonText: 'No, keep it',
    });
    return result.isConfirmed;
  }
  
  showJobAppliedSuccess(): void {
    Swal.fire({
      title: 'Success',
      text: 'Job applied successfully.',
      icon: 'success',
      showConfirmButton: false,
      timer:1500
    });
  }


  async showJobConfirmWtihdraw(): Promise<boolean> {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: 'Do you really want to withdraw this job post?',
      icon: 'warning',
      showCancelButton: true, // Adds a Cancel button
      confirmButtonText: 'Yes, withdraw it!',
      cancelButtonText: 'No, keep it',
    });
    return result.isConfirmed;
  }


  showJobWithdrawnSuccess(): void {
    Swal.fire({
      title: 'Success',
      text: 'Job withdrawn successfully.',
      icon: 'success',
      showConfirmButton: false,
      timer:1500
    });
  }

  showJobUnsavedSuccess(): void {
    Swal.fire({
      title: 'Success',
      text: 'Job unsaved successfully.',
      icon: 'success',
      showConfirmButton: false,
      timer:1500
    });
  }

  showJobSavedSuccess(): void {
    Swal.fire({
      title: 'Success',
      text: 'Job saved successfully.',
      icon: 'success',
      showConfirmButton: false,
      timer:1500
    });
  }
  


  // Success Messages
  showErrorJobCreating(): void {
    Swal.fire({
      title: 'Error',
      text: 'Error creating job ',
      icon: 'error',
      showConfirmButton: false,
      timer:1500

    });
  }

  // Signup Details Alerts
  showJobFieildsError(): void {
    Swal.fire({
      title: 'Error',
      text: 'Please enter all details.',
      icon: 'error',
      showConfirmButton: false,
      timer:1500

    });
  }




}
