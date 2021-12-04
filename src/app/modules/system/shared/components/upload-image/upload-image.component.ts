import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.scss'],
})
export class UploadImageComponent implements OnInit {
  @Input() imageUrl = '';
  @Input() preview = false;

  constructor(private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
  }

  changeImage(event): void {
    const image: File = event.target.files[0];
    if (image) {
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = () => {
        this.imageUrl = reader.result as string;
        this.cdr.markForCheck();
      };
    }
  }

  clear(): void {
    this.imageUrl = '';
    this.cdr.markForCheck();
  }
}
