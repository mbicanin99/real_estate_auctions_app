import { Component, Input } from '@angular/core';
import { AppImage } from 'src/app/utils/types/image.interface';
import { RealEstate } from 'src/app/utils/types/real-estate.type';

@Component({
  selector: 'app-real-estate-card',
  templateUrl: './real-estate-card.component.html',
  styleUrl: './real-estate-card.component.scss'
})
export class RealEstateCardComponent {
  @Input() image: AppImage;
  @Input() realEstate: RealEstate;

}
