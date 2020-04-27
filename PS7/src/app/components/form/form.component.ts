import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CallBackEndService } from '../../service/call-back-end.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  countryForm;
  country: string;
  options: string;
  @Output() countryMessage = new EventEmitter<any>();

  constructor(    
    private formBuilder: FormBuilder,
    private BackEndService: CallBackEndService
    ) {
      this.countryForm = this.formBuilder.group({
        country: '',
      })
    }

  ngOnInit(): void {
  }

  onSubmit(data){
    this.options = data.country;
    this.BackEndService.onQuery(this.options).subscribe(
    response => {
      this.countryMessage.emit(response);
    }
  )
  }
}
