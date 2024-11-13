// src/app/app.component.ts
import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar'; // Import the module
import { MatRadioChange, MatRadioModule } from '@angular/material/radio'; // Import for mat-radio-group
import { MatButtonModule } from '@angular/material/button'; // Import for mat-raised-button
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    MatToolbarModule, // Add MatToolbarModule to imports
    MatRadioModule, // Add MatRadioModule for radio buttons
    MatButtonModule, // Add MatButtonModule for the button
    FormsModule,
    MatInputModule, // Add FormsModule and MatInputModule
  ],
})
export class AppComponent {
  title = 'scroulette';
  privateSelected = 'n'; // Default to 'n' (no)
  randomLink = '';

  generateLink(): void {
    const baseUrl = 'https://soundcloud.com/'; // Replace with your actual base URL if different

    // Add logic here to generate a random track/playlist path
    // This is just a placeholder example:
    const randomPath = `artist/album/track${Math.floor(Math.random() * 1000)}`; // Replace with your logic
    // Consider using an API or a predefined list of Soundcloud links for better functionality.

    this.randomLink = `${baseUrl}${randomPath}`;

    if (this.privateSelected === 'y') {
      this.randomLink = `${baseUrl}${randomPath}`; // Logic to generate or append private link indicator (if needed)
    }
  }

  onPrivateChange(event: MatRadioChange) {
    this.privateSelected = event.value;
  }
}
