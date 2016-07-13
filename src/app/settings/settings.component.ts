import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, REACTIVE_FORM_DIRECTIVES } from '@angular/forms'
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';
import { MD_TABS_DIRECTIVES } from '@angular2-material/tabs';
import { MdButton } from '@angular2-material/button';
import { MD_SLIDE_TOGGLE_DIRECTIVES } from '@angular2-material/slide-toggle';
import { SettingsService } from '../settings.service';
import { Settings } from '../settings';

@Component({
    moduleId: module.id,
    selector: 'app-settings',
    templateUrl: 'settings.component.html',
    styleUrls: ['settings.component.css'],
    directives: [
        MD_CARD_DIRECTIVES,
        MD_LIST_DIRECTIVES,
        MD_TABS_DIRECTIVES,
        MdButton,
        MD_SLIDE_TOGGLE_DIRECTIVES,
        REACTIVE_FORM_DIRECTIVES
    ]
})
export class SettingsComponent implements OnInit {

    private form: FormGroup;
    private set: Settings;

    constructor(private settings: SettingsService, private fb: FormBuilder) {
        this.settings.getSettings().subscribe(data => this.set = data);
        this.form = fb.group({
                                "decimals": this.set['decimals'],
                                "dispzero": this.set['dispzero']
                            });
    }


    ngOnInit() {
        this.form.valueChanges.subscribe(val => this.settings.setSettings(val));
    }

}
