import {ChangeDetectorRef, Component, OnInit} from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-profile', templateUrl: './profile.component.html', styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  imageUrl = 'assets/images/develop/work_in_progress.png';

  tiles: Tile[] = [{text: 'USER_PROFILE.LOGO', cols: 1, rows: 4, color: '#fff'}, {
    text: 'USER_PROFILE.GENERAL_INFO',
    cols: 3,
    rows: 4,
    color: '#fff'
  }, {text: 'USER_PROFILE.FOOTER', cols: 4, rows: 2, color: '#fff'},];

  constructor(private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
  }

  tagle() {
    this.imageUrl = this.imageUrl ? '' : 'assets/images/develop/work_in_progress.png';
    console.log(this.imageUrl)
    this.cdr.markForCheck();
  }

  changeImage(event): void {
    const image: File = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onload = () => {
      this.imageUrl = reader.result as string;
      this.cdr.markForCheck();
    };
  }
}
