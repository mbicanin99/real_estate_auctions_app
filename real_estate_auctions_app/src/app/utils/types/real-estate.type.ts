import { AppImage } from "src/app/utils/types/image.interface";

export interface RealEstate{
    id: number;
    title: string;
    description: string;
    location: string;
    // image: AppImage;
    quadrature: number;
    isAuction: boolean;
    auctionStartDate: Date | string;
    auctionEndDate: Date | string;
    startingBid: number;
    bidIncrement: number;
}