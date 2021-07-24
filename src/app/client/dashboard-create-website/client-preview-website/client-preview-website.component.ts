import { Component, OnInit } from '@angular/core';
import { PreviewService } from '../../../services/preview/preview.service';

@Component({
  selector: 'app-client-preview-website',
  templateUrl: './client-preview-website.component.html',
  styleUrls: ['./client-preview-website.component.scss']
})
export class ClientPreviewWebsiteComponent implements OnInit {

  previewData = new PreviewService();
  constructor(private previewService: PreviewService) {
    this.previewData = previewService;
  }

  ngOnInit(): void {
  }
  openTabPreview() {
    window.open(`https://demo-easy-web-generator.herokuapp.com`)
  }
}