import { render, screen } from '@testing-library/angular';

import { AppComponent } from './app.component';
import { AppModule } from './app.module';

describe('Integration - Ticket Managing App', () => {
  const mount = () =>
    render(AppComponent, {
      imports: [AppModule],
      excludeComponentDeclaration: true,
    });

  it('should render the application correctly', async () => {
    // ARRANGE
    await mount();

    // ASSERT
    expect(screen.getByText('Ticket Managing System')).toBeTruthy();
  });
});
