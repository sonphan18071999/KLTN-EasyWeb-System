import { Injectable } from '@angular/core';
import { Preview } from 'src/app/interfaces/Preview';

@Injectable({
  providedIn: 'root',
})
  
export class PreviewService {
  private previewDatabaseService: Preview;
  constructor() {
    this.previewDatabaseService = {
      logo: '',
      status: '',
      bussinessName: '',
      websiteUrl: '',
      schema: '',
      type: -1,
      port:0
    };
  }

  set dataPreview(item: Preview) {
    this.previewDatabaseService=item
  }

  get dataPreview(): Preview{
    return this.previewDatabaseService;
  }
}
