import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-setup-wifi',
  templateUrl: './setup-wifi.component.html',
  styleUrls: ['./setup-wifi.component.scss']
})
export class SetupWifiComponent implements OnInit {

  public setup: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) { }

  public ngOnInit(): void {
    this.setup = this.fb.group({
      ssid: ["", Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(31)])],
      password: ["", Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(63)])]
    });
  }

  public onSubmit() {
    if(!this.setup.valid) {
      console.warn("Invalid form", this.setup);
      return;
    }

    console.log(this.setup);
    this.router.navigate(["/setup-gsm"]);
  }

}
