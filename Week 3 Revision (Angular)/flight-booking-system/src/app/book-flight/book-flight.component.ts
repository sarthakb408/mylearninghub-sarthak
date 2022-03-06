import { Component, OnInit } from '@angular/core';
import { HttpDataService } from '../http-data.service';
import { FormBuilder, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-book-flight',
  templateUrl: './book-flight.component.html',
  styleUrls: ['./book-flight.component.css']
})
export class BookFlightComponent implements OnInit {

  constructor(public ht:HttpDataService, private fb: FormBuilder, private modalService: NgbModal) { }
  receiveFlightData:any;
  data:any;
  myForm: any;
  ngOnInit(): void {
    this.ht.getFlightData().subscribe((data) => this.show(data));   

    
    this.myForm = this.fb.group({
      Id: [""],
      FirstName: ['', Validators.required],
      LastName: ['', Validators.required],
      Birthdate: ['', Validators.required],
      CurrentAddress: ['', Validators.required],
      CurrenthouseNo: ['', Validators.required],
      CurrentCity: ['', Validators.required],
      CurrentState: ['', Validators.required],
      CurrentZip: ['', Validators.required],
      ParmanentAddress: ['', Validators.required],
      ParmanenthouseNo: ['', Validators.required],
      ParmanentCity: ['', Validators.required],
      ParmanentState: ['', Validators.required],
      ParmanentZip: ['', Validators.required],
      Email: ['', [Validators.required, Validators.email]],
      PhoneNumber: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]]

    });
    }
    show(data:any){
      this.receiveFlightData = data;
    }
    closeResult = '';
    open(content: any, data: any) {
  
      this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', size: 'xl', backdrop: 'static' }).result.then((result:any) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason:any) => {
        this.closeResult = `Dismissed`;
      });
    }
  }

