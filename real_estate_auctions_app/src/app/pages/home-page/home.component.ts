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
    title: "First real estate", 
    description: "Very god property in center of city", 
    location: "Belgrade",
    quadrature: 58,
    isAuction: false,
    auctionStartDate: '13h 12/05/2024',
    auctionEndDate: '16h 12/05/2024',
    startingBid: 200,
    bidIncrement: 50},
    {
      id: 2, 
      title: "Second real estate", 
      description: "Very god property in center of city", 
      location: "Belgrade",
      quadrature: 66,
      isAuction: false,
      auctionStartDate: '13h 15/05/2024',
      auctionEndDate: '16h 18/05/2024',
      startingBid: 400,
      bidIncrement: 50
    },
    {
      id: 3, 
      title: "Third real estate", 
      description: "Very god property in perifery of city", 
      location: "Belgrade",
      quadrature: 69,
      isAuction: false,
      auctionStartDate: '13h 19/06/2024',
      auctionEndDate: '16h 19/06/2024',
      startingBid:250,
      bidIncrement: 50
    },
    {
      id: 3, 
      title: "Forth real estate", 
      description: "Very god property in perifery of city", 
      location: "Belgrade",
      quadrature: 47,
      isAuction: false,
      auctionStartDate: '13h 12/07/2024',
      auctionEndDate: '16h 12/07/2024',
      startingBid:280,
      bidIncrement: 50
    }
  ];

  constructor(private apiService: ApiService, private store: Store){}

  ngOnInit(): void{
    this.store.dispatch(HomeActions.loadImages({numberOfRealEstates: this.realEstates.length}));
  }

}
