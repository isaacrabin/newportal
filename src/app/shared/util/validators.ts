import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';
import { PhoneNumberUtil, PhoneNumberFormat } from 'google-libphonenumber';
const phoneNumberUtil = PhoneNumberUtil.getInstance();
/*export class PasswordValidator {
    static ValidatePassword(control: AbstractControl) {
       let regex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
       let password = control.value;

       if(password){
        let isStrong = regex.test(password);
        console.log(isStrong);
        console.log(password);
         if (!isStrong) {
             control.setErrors( {nPassword: true, weak: true} );
         }
       }


        return null;
    }
}*/

export function passwordValidator(control: AbstractControl) {
    if (control && (control.value != null || control.value != undefined)) {
        let password = control.value;
        let strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
        // let strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})");

        if(password){
            let isStrong = strongRegex.test(password);
            if (!isStrong) {
                return {
                    weak: true
                };
                //control.setErrors( {nPassword: true, weak: true} );
            }
        }

        return null;
    }
}

export class ConfirmPasswordValidator {
    static MatchPassword(control: AbstractControl) {
       let password = control.get('npassword').value;

       let confirmPassword = control.get('confirmPassword').value;

       if(confirmPassword){
        if(password != confirmPassword) {
            control.get('confirmPassword').setErrors( {npassword: true} );
        } else {
            return null
        }
       }


    }
}

export function confirmConfirmPasswordValidator(control: AbstractControl) {
    if (control && (control.value != null || control.value != undefined)) {
        const passControl = control.value;
        const confirmPass = control.root.get('confirmPassword');
        if(confirmPass && (confirmPass != null || confirmPass != undefined)){
            if (confirmPass.value && (confirmPass.value != null || confirmPass.value != undefined)) {
                if(passControl !== confirmPass.value){
                    //reset confirm password value
                    control.root.get('confirmPassword').setValue('');
                    return null;
                    // return {
                    //     notmatch: true
                    // };
                }
            }
        }
        return null;
    }
}

export function PhoneNumberValidator(regionCode: string): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } => {
    let validNumber = false;
    try {
      const phoneNumber = phoneNumberUtil.parseAndKeepRawInput(
        control.value, regionCode == undefined ? 'KE' :  regionCode
      );
      validNumber = phoneNumberUtil.isValidNumber(phoneNumber);
    } catch (e) { }

    return validNumber ? null : { 'wrongNumber': { value: control.value } };
  }
}

export function TwoNamesProvidedValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      let validNames = false;
      try {
        var values = control.value.trim().split(" ");
        validNames = values.length>=2;
        console.log(validNames);
      } catch (e) { }
  
      return validNames ? null : { 'invalidNames': { value: control.value } };
    }
  }

export function formatPhoneNumber(phoneNumber: string, regionCode: string){
    return phoneNumberUtil.format(phoneNumberUtil.parseAndKeepRawInput(phoneNumber, regionCode == undefined ? 'KE' :  regionCode), PhoneNumberFormat.E164);
}

  export class TubiCustomValidators
  {
      /**
       * Check for empty (optional fields) values
       *
       * @param value
       */
      static isEmptyInputValue(value: any): boolean
      {
          return value == null || value.length === 0;
      }

      static getDate(value: any): Date{
        //console.log(value);
        //console.log(value._i.month);
        //console.log(value._i.date);
        //console.log(value);
        var d = value != null ?new Date(value):null;
          return d;
      }
  
      /**
       * Must match validator
       *
       * @param controlPath A dot-delimited string values that define the path to the control.
       * @param matchingControlPath A dot-delimited string values that define the path to the matching control.
       */
      static compareDates(controlPath: string, matchingControlPath: string): ValidatorFn
      {
          return (formGroup: AbstractControl): ValidationErrors | null => {
  
              // Get the control and matching control
              const control = formGroup.get(controlPath);
              const matchingControl = formGroup.get(matchingControlPath);
  
              // Return if control or matching control doesn't exist
              if ( !control || !matchingControl )
              {
                  return null;
              }
  
              // Delete the invalidDates error to reset the error on the matching control
              if ( matchingControl.hasError('invalidDates') )
              {
                  delete matchingControl.errors.mustMatch;
                  matchingControl.updateValueAndValidity();
              }

  
              // Don't validate empty values on the matching control
              // Don't validate if values are matching
              if ( this.isEmptyInputValue(control.value) || this.isEmptyInputValue(matchingControl.value) || this.getDate(control.value) < this.getDate(matchingControl.value) )
              {
                  //console.log(this.getDate(control.value) > this.getDate(matchingControl.value));
                  return null;
              }
  
              // Prepare the validation errors
              const errors = {invalidDates: true};
  
              // Set the validation error on the matching control
              matchingControl.setErrors(errors);
              //console.log("Has Errors");
  
              // Return the errors
              return errors;
          };
      }
  }

//(startDate !== null && endDate !== null) && startDate > endDate
