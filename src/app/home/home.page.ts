import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  coins: any[] = [];
  exchangeRate = 15000; // Kurs 1 USD = 15000 IDR

  constructor() {}

  // Fungsi untuk mengambil data dari API dan mengonversi harga ke IDR
  async refreshData() {
    try {
      const response = await fetch('https://api.coinlore.net/api/tickers/');
      const data = await response.json();
      this.coins = data.data.map((coin: any) => ({
        ...coin,
        price_idr: (parseFloat(coin.price_usd) * this.exchangeRate).toFixed(2), // Mengonversi ke IDR
      }));
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  ngOnInit() {
    this.refreshData();
  }
}
