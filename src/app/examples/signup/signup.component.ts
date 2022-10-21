import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';


@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
    test : Date = new Date();
    focus;
    focus1;
    constructor(private fb:FormBuilder){ }
    infoUser = this .fb.group({
        "email":["abc@gmail.com"],
        "password":[""]
    })
    ngOnInit() {}
}
