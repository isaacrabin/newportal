import { HttpClient, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Observable, Subscriber } from 'rxjs';
import { NewsService } from '_services/news.service';

@Component({
  selector: 'app-addnews',
  templateUrl: './addnews.component.html',
  styleUrls: ['./addnews.component.scss']
})
export class AddnewsComponent implements OnInit {
 
  imageSrc!: Observable<any>;
   myForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    file: new FormControl('', [Validators.required]),
    fileSource: new FormControl('', [Validators.required])
  });
    
  get f(){
    return this.myForm.controls;
  }
  constructor(
    private http: HttpClient, 
    private service: NewsService,
    public dialogRef: MatDialogRef<AddnewsComponent>,
    
    ) { }
  
    onNoClick(): void {
      this.dialogRef.close();
    }

  ngOnInit(): void {
  }
  onFileChange = ($event: Event) =>{
    const target = $event.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];
    console.log(file);
    this.convertToBase64(file)
  }
  convertToBase64(file: File) {
    const observable = new Observable((subscriber: Subscriber<any>) => {
      this.readFile(file, subscriber);
    });
    observable.subscribe((d) => {
      console.log(d)
      this.imageSrc = d
      
    })
  }
  readFile(file: File, subscriber: Subscriber<any>) {
    const filereader = new FileReader();
    filereader.readAsDataURL(file);
    filereader.onload = () => {
      subscriber.next(filereader.result);
      subscriber.complete();
    };
    filereader.onerror = (error) => {
      subscriber.error(error);
      subscriber.complete();
    };
  }
  //onFileChange(event) {
    // const reader = new FileReader();
    
    // if(event.target.files && event.target.files.length) {
    //   const [file] = event.target.files;
    //   reader.readAsDataURL(file);
    
    //   reader.onload = () => {
   
    //     this.imageSrc = reader.result as string;
     
    //     this.myForm.patchValue({
    //       fileSource: reader.result
    //     });
   
    //   };
   
    // }
  //}
  upload() {
      console.log(this.myForm.value);
    this.service.uploadFile(this.myForm.value).subscribe(response => {
     
		// this.selectedFiles.value = '';
     if (response instanceof HttpResponse) {
        console.log(response.body);
      }	  
    });    
  }
  

}
