import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CarRentalItem } from '../../models/car-rental-item';
import { BookingService } from '../../services/booking/booking.service';
import { OrderItem } from '../../models/order-item';
import { TokenService } from '../../services/token/token.service';
import { CartService } from '../../services/cart/cart.service';
import { UserstateComponent } from '../userstate/userstate.component';

@Component({
  selector: 'app-car-rental',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './car-rental.component.html',
  styleUrl: './car-rental.component.css'
})
export class CarRentalComponent  extends UserstateComponent {

  carRentalList!: CarRentalItem[];
  filteredCarRentalList!: CarRentalItem[];
  orderItem: OrderItem;

  constructor(
    private bookingService: BookingService,
    public override tokenService: TokenService,
    private cartService: CartService
  ){
    super(tokenService)
  }

  ngOnInit(): void {
    this.getLogged();
    this.bookingService.getAllCarRental().subscribe({
      next: (data: CarRentalItem[]) => {
        this.carRentalList = data;
        this.filteredCarRentalList = this.carRentalList
      },
      error: (error: string) => {
        console.log(`Error: ${error}`);
      },
    });
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredCarRentalList = this.carRentalList;
      return;
    }
    
    text = text.toLowerCase().trim();
    this.filteredCarRentalList = this.carRentalList.filter(
    item => item?.carType.toLowerCase().includes(text)
    );
  }

  addToCart(bookingId: string, price: number): void {
    if(this.isLoggedIn){
      this.bookingService.addToCart({userId: this.userId, bookingId, price}).subscribe({
        next: (data:any) => {
          this.orderItem = data.body;
          window.location.reload();
        }
      })
    }else {
      this.cartService.addToCart(bookingId, price);
      window.location.reload();
    }
  }


}
