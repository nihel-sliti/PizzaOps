import { Component, OnInit } from '@angular/core';

interface Seat {
  label: string;
  available: boolean;
  selected: boolean;
}

@Component({
  selector: 'app-seat-selection',
  templateUrl: './seat-selection.component.html',
  styleUrls: ['./seat-selection.component.scss']
})
export class SeatSelectionComponent implements OnInit {
  rows: Seat[][] = [];

  ngOnInit(): void {
    this.generateSeats();
  }

  generateSeats(): void {
    const numberOfRows = 10;
    const seatsPerRow = 10;
    for (let i = 0; i < numberOfRows; i++) {
      const row: Seat[] = [];
      for (let j = 0; j < seatsPerRow; j++) {
        row.push({ label: `${String.fromCharCode(65 + i)}${j + 1}`, available: true, selected: false });
      }
      this.rows.push(row);
    }
    console.log(this.rows); // Vérifiez ici que les sièges sont bien générés
  }

  selectSeat(rowIndex: number, seatIndex: number): void {
    const seat = this.rows[rowIndex][seatIndex];
    if (seat.available) {
      seat.selected = !seat.selected;
    }
  }
}
