import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/api-services/api.service';
import { AppImage } from 'src/app/utils/types/image.interface';
import { HomeActions } from './store/actions/home.actions';
import { selectImages } from './store/reducer/home.reducer';
import { RealEstate } from 'src/app/utils/types/real-estate.type';

@Component({
  selector: 'app-home-page',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomePageComponent implements OnInit {
  public images$: Observable<Array<AppImage>> = this.store.select(selectImages);
  public realEstates: RealEstate[]=[
    {
      id: 1,
      title: "Luxurious Downtown Apartment",
      description: "Experience the epitome of urban living in this sophisticated downtown apartment. Perfectly situated in the heart of the city, this property offers exquisite design and modern amenities.",
      location: "Belgrade",
      quadrature: 58,
      isAuction: false,
      auctionStartDate: '12/05/2024 13h',
      auctionEndDate: '12/05/2024 16h',
      startingBid: 200,
      bidIncrement: 50
    },
    {
      id: 2,
      title: "Modern City Center Penthouse",
      description: "Indulge in luxury with this stunning penthouse located in the bustling city center. Enjoy panoramic views, contemporary design, and a lifestyle of elegance and comfort.",
      location: "Belgrade",
      quadrature: 66,
      isAuction: false,
      auctionStartDate: '15/05/2024 13h',
      auctionEndDate: '18/05/2024 16h',
      startingBid: 400,
      bidIncrement: 50
    },
    {
      id: 3,
      title: "Charming Suburban Home",
      description: "Escape the city hustle to this charming suburban home. Nestled in a peaceful neighborhood, this property offers a serene retreat with spacious interiors and a lovely outdoor space.",
      location: "Belgrade",
      quadrature: 69,
      isAuction: false,
      auctionStartDate: '19/06/2024 13h',
      auctionEndDate: '19/06/2024 14h',
      startingBid: 250,
      bidIncrement: 50
    },
    {
      id: 4,
      title: "Tranquil Suburb Retreat",
      description: "Discover tranquility in this suburb retreat. Surrounded by nature and greenery, this property provides a perfect balance between modern living and a peaceful suburban lifestyle.",
      location: "Belgrade",
      quadrature: 47,
      isAuction: false,
      auctionStartDate: '12/07/2024 13h',
      auctionEndDate: '12/07/2024 16h',
      startingBid: 280,
      bidIncrement: 50
    }
  ];

  constructor(private apiService: ApiService, private store: Store){}

  ngOnInit(): void{
    this.store.dispatch(HomeActions.loadImages({numberOfRealEstates: this.realEstates.length}));
  }

}
