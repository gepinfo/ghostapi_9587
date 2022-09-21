import { Component, OnInit } from '@angular/core';
import { GhostapiService } from './ghostapi.service';

@Component({
  selector: 'app-ghostapi',
  templateUrl: './ghostapi.component.html',
  styleUrls: ['./ghostapi.component.scss'],
})

export class GhostapiComponent implements OnInit {
    public ghostapi = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        name: '',
        posts: '',
        likes: '',
        comments: '',
        shares: '',
    }

    constructor (
        private ghostapiService: GhostapiService,
    ) { }

    ngOnInit() {
        this.ghostapi.created_by = sessionStorage.getItem('email') || ''; 
    }
}